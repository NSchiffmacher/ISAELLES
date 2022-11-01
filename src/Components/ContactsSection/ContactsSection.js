import React from 'react';

import TextWithIcon from '../TextWithIcon/TextWithIcon';

import './ContactsSection.css';

function ContactsSection() {
  return (
    <div className="contacts_section">
        <div className="logo">
            <img src="/images/logo_isaelles.svg" alt="isaelles logo" />
        </div>
        <div className="contacts">
            <TextWithIcon href="https://www.facebook.com/asso.isaelles" icon="/images/contacts_logo/facebook.png" className="contact contact_facebook">@asso.isaelles</TextWithIcon>
            <TextWithIcon href="https://twitter.com/isaelles" icon="/images/contacts_logo/twitter.svg" className="contact contact_twitter">@isaelles</TextWithIcon>
            <TextWithIcon href="https://www.linkedin.com/company/isaelles" icon="/images/contacts_logo/linkedin.png" className="contact contact_linkedin">@ISAElles</TextWithIcon>
        </div>
    </div>
  )
}

export default ContactsSection