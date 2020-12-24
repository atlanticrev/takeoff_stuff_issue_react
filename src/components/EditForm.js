import React from 'react';

export default function EditForm ({ contact, onEdit }) {

    const onChange = (e) => {
        onEdit({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form id="add-contact-form">
            <label>
                <input
                    type="text"
                    value={contact.name || ''}
                    onChange={onChange}
                    name="name"
                    placeholder="Name"
                    required
                />
            </label>
            <label>
                <input
                    type="text"
                    value={contact.email || ''}
                    onChange={onChange}
                    name="email"
                    placeholder="Email"
                    required
                />
            </label>
            <label>
                <input
                    type="text"
                    value={contact.phone || ''}
                    onChange={onChange}
                    name="phone"
                    placeholder="Phone"
                    required
                />
            </label>
            <label>
                <input
                    type="text"
                    value={contact.website || ''}
                    onChange={onChange}
                    name="website"
                    placeholder="Website"
                    required
                />
            </label>
        </form>
    );

}