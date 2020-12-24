import React from 'react';

import Contact from "./Contact";

export default function ContactList (props) {
    return (
        <div className="contact-list">
            {props.contacts.length ? (
                props.contacts.map(contact =>
                    <Contact
                        key={contact.id}
                        contact={contact}
                        onEdit={props.onEdit}
                        onDelete={props.onDelete}
                    />)
            ) : (
                <Contact contact={null}/>
            )}
        </div>
    );
}