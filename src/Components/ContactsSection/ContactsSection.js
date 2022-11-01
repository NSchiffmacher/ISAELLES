import React from 'react';

import Contact from '../Contact/Contact';

import './ContactsSection.css';

function ContactsSection() {
  return (
    <div className="contacts_section">
        <div className="logo">
            <img src="/images/logo_isaelles.svg" alt="isaelles logo" />
        </div>
        <div className="contacts">
            <Contact href="" icon="yep" color="var(--isaelles-deep-blue)">@asso.isaelles</Contact>
            <Contact href="" icon="yep" color="var(--isaelles-magenta)">@isaelles</Contact>
            <Contact href="" icon="yep" color="var(--isaelles-deep-blue)">@ISAElles</Contact>
        </div>
    </div>
  )
}

export default ContactsSection