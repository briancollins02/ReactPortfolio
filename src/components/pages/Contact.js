import React, { useState } from 'react';
// import { validateEmail } from '../utils/helpers';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // define target object and it's properties
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;

        switch (inputName) {
            case 'name':
                setName(inputValue)
                setErrorMessage('Name is a required field');
            case 'email':
                setName(inputValue)
                setErrorMessage('Email is a required field');
            default: setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // if(!validateEmail(email))
    }

    return (
        <div>
            <h1>Contact</h1>
            <img></img>
            <p>
                contact Info
            </p>
        </div>
    )
}

export default Contact;