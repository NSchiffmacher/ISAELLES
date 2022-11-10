import React, { useState } from 'react';

import TextWithIcon from '../TextWithIcon/TextWithIcon';
import SpanButton from '../LinkButton/LinkButton';

import urls from '../../urls';
import './ContactsSection.css';
import useIsPhone from '../../util/useIsPhone';
import useAppearTransition from '../../util/useAppearTransition';

function ContactsSection(props) {
  const is_phone = useIsPhone();

  const facebook_username = "@asso.isaelles";
  const twitter_username  = "@isaelles" + (is_phone ? "\u00A0".repeat(9) : "");
  const linkedin_username = "@ISAElles" + (is_phone ? "\u00A0".repeat(8) : "");

  const [text_with_icon_style, set_text_with_icon_style] = useState({
    transform: 'translateY(200px)',
    opacity: 0,
    transition: 'transform 0.4s ease-out, opacity 0.5s ease-out',
  });
  const per_item_delay = 0.2;
  const text_with_icon_trigger = useAppearTransition(() => {
    set_text_with_icon_style({
      ...text_with_icon_style,
      transform: 'translateY(0px)',
      opacity: 1
    });
  }, { threshold: is_phone ? 0.1 : 0.7 });

  return (
    <div className="contacts_section">
        <div className="logo" ref={ props.title_ref }>
            <img src="/images/logo_isaelles.svg" alt="isaelles logo" />
        </div>
        <div className="contacts" ref={ text_with_icon_trigger }>
            {[ 
                {style:text_with_icon_style, href:"https://www.facebook.com/asso.isaelles", icon:"/images/contacts_logo/facebook.png", className:"contact contact_facebook", username: facebook_username},
                {style:text_with_icon_style, href:"https://twitter.com/isaelles", icon:"/images/contacts_logo/twitter.svg", className:"contact contact_twitter", username: twitter_username},
                {style:text_with_icon_style, href:"https://www.linkedin.com/company/isaelles", icon:"/images/contacts_logo/linkedin.png", className:"contact contact_linkedin", username: linkedin_username}
             ].map(({style, icon, href, className, username}, index) => <TextWithIcon key={"contact_section_text_with_icon_"+index} style={{ ...style, transitionDelay: (index * per_item_delay) + "s" }} href={ href } icon={ icon } className={ className }>{ username }</TextWithIcon>)}
            
        </div>
        
        <SpanButton href={ urls.CONTACT_PAGE }>Nous contacter</SpanButton>
    </div>
  )
}

export default ContactsSection