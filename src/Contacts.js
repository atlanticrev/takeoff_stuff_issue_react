import React, { useEffect, useState } from 'react';

import ContactList from './components/ContactList';
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";

export default function Contacts () {

    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    const [searchString, setSearchString] = useState('');

    const [modalsStates, setModalsStates] = useState({
        'ADD': false,
        'DELETE': false,
        'EDIT': false,
    });

    // Fetching data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch((err) => console.error('Fetch error', err));
    }, []);

    // Computed filtered contacts list
    useEffect(() => {
        setFilteredContacts(contacts.filter(contact =>
            contact.name.search(new RegExp(searchString, 'gi')) !== -1));
    }, [contacts, searchString]);

    function onAdd () {
        setModalsStates({...modalsStates, 'ADD': true});
    }

    function onAddConfirm (contact) {
        setModalsStates({...modalsStates, 'ADD': false});
        setContacts([contact, ...contacts]);
    }

    function onEdit (e, contact) {
        setModalsStates({...modalsStates, 'EDIT': true});
        setSelectedContact(contact);
    }

    function onEditConfirm (contact) {
        setModalsStates({...modalsStates, 'EDIT': false});
        const contactsCopy = [...contacts];
        contactsCopy[contacts.indexOf(selectedContact)] = contact;
        setContacts(contactsCopy);
    }

    function onDelete (e, contact) {
        setModalsStates({...modalsStates, 'DELETE': true});
        setSelectedContact(contact);
    }

    function onDeleteConfirm () {
        setModalsStates({...modalsStates, 'DELETE': false})
        setContacts(contacts.filter(contact => contact !== selectedContact));
    }

    function onClose () {
        setModalsStates({
            'ADD': false,
            'DELETE': false,
            'EDIT': false,
        });
    }

    function onSearchChange (string) {
        setSearchString(string);
    }

    return (
        <div className="contacts">
            <div className="contact-list-controls">
                <SearchBar
                    onChange={onSearchChange}
                />
                <Button
                    text="Add contact"
                    onClick={onAdd}
                />
            </div>
            <ContactList
                contacts={filteredContacts}
                onEdit={onEdit}
                onDelete={onDelete}
            />
            {modalsStates['DELETE'] &&
                <Modal
                    title="Are you sure?"
                    confirmText="confirm"
                    cancelText="cancel"
                    onConfirm={onDeleteConfirm}
                    onClose={onClose}
                />
            }
            {modalsStates['EDIT'] &&
                <Modal
                    title="Edit contact"
                    confirmText="edit"
                    cancelText="cancel"
                    onConfirm={onEditConfirm}
                    onClose={onClose}
                    contact={selectedContact}
                />
            }
            {modalsStates['ADD'] &&
                <Modal
                    title="Add new contact"
                    confirmText="add"
                    cancelText="cancel"
                    onConfirm={onAddConfirm}
                    onClose={onClose}
                    contact={{}}
                />
            }
        </div>
    );
}