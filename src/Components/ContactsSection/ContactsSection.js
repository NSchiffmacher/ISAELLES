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
            <TextWithIcon href="" icon="yep" className="">@asso.isaelles</TextWithIcon>
            <TextWithIcon href="" icon="yep" className="">@isaelles</TextWithIcon>
            <TextWithIcon href="" icon="yep" className="">@ISAElles</TextWithIcon>
        </div>
    </div>
  )
}

export default ContactsSection