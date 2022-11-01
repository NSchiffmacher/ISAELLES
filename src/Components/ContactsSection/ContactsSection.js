import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import TextWithIcon from '../TextWithIcon/TextWithIcon';

import './ContactsSection.css';

function ContactsSection() {
  const navigate = useNavigate();
  const contact_click = (e) => {
    e.preventDefault();
    navigate('/contact');
  } 

  
  const [is_phone] = useState(
    window.innerWidth < 768 ? true : false
  );

  const facebook_username = "@asso.isaelles";
  const twitter_username  = "@isaelles" + (is_phone ? "\u00A0".repeat(9) : "");
  const linkedin_username = "@ISAElles" + (is_phone ? "\u00A0".repeat(8) : "");

  return (
    <div className="contacts_section">
        <div className="logo">
            <img src="/images/logo_isaelles.svg" alt="isaelles logo" />
        </div>
        <div className="contacts">
            <TextWithIcon href="https://www.facebook.com/asso.isaelles" icon="/images/contacts_logo/facebook.png" className="contact contact_facebook">{ facebook_username }</TextWithIcon>
            <TextWithIcon href="https://twitter.com/isaelles" icon="/images/contacts_logo/twitter.svg" className="contact contact_twitter">{ twitter_username }</TextWithIcon>
            <TextWithIcon href="https://www.linkedin.com/company/isaelles" icon="/images/contacts_logo/linkedin.png" className="contact contact_linkedin">{ linkedin_username }</TextWithIcon>
        </div>
        <TextWithIcon icon="/images/contacts_logo/pinpoint.png" className="contact contact_adress">4 Avenue Edouard Belin, 31400 Toulouse, France</TextWithIcon>
        
        <span onClick={contact_click} className="button_contact">Nous contacter</span>
    </div>
  )
}

export default ContactsSection