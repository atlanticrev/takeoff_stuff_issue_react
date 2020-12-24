import React from 'react';
import Button from "./Button";

export default function Contact ({ contact, onEdit, onDelete }) {

    return (
        <div className="contact">
            {contact ? (
                <>
                    <div className="contact-info">
                        <span className="contact-info-row">{contact.name}</span>
                        <span className="contact-info-row">{contact.email}</span>
                        <span className="contact-info-row">{contact.phone}</span>
                        <span className="contact-info-row">{contact.website}</span>
                    </div>
                    <div className="contact-controls">
                        <Button
                            text="edit"
                            onClick={(e) => onEdit(e, contact)}
                        />
                        <Button
                            text="delete"
                            onClick={(e) => onDelete(e, contact)}
                        />
                    </div>
                </>
            ) : (
                <div className="contact-info">
                    <span className="contact-info-row">There is no matched entries</span>
                </div>
            )}
        </div>
    );

}