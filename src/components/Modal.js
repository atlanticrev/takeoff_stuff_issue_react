import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Overlay from "./Overlay";
import Button from "./Button";
import EditForm from "./EditForm";

export default function Modal (props) {

    const [contact, setContact] = useState({...props.contact});
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
        function handleEsc (e) {
            if (e.key === 'Escape') {
                props.onClose();
            }
        }
        document.body.addEventListener('keyup', handleEsc);
        return () => {
            document.body.removeEventListener('keyup', handleEsc);
        };
    }, [isOpen, props]);

    function onEdit (contact) {
        setContact(contact);
    }

    function onClick () {
        props.onConfirm({...contact, id: contact.id || Date.now()});
    }

    return (
        ReactDOM.createPortal(
            <>
                <div className={props.contact ? "modal show" : "modal confirm-modal show"}>
                    <h3 className="modal-text">{props.title}</h3>
                    {props.contact &&
                        <EditForm
                            contact={contact}
                            onEdit={onEdit}
                        />
                    }
                    <div className="modal-controls">
                        <Button
                            text={props.confirmText}
                            onClick={props.contact ? onClick : props.onConfirm}
                        />
                        <Button
                            text={props.cancelText}
                            onClick={props.onClose}
                        />
                    </div>
                </div>
                <Overlay />
            </>,
            document.body
        )
    );

}