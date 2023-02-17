import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail';

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

        if (inputName === 'name') {
            setName(inputValue);
        } else if (inputName === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const checkInputChange = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'name') {
            setName(inputValue);
            if (!inputValue) {
                setErrorMessage('Name required');
            } else {
                setErrorMessage('');
            }
        } else if (inputName === 'email') {
            setEmail(inputValue);
            if (!inputValue) {
                setErrorMessage('Email required');
            } else {
                setErrorMessage('');
            }
        } else {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        console.log(name, email, message);

        e.preventDefault();
    
        if (!validateEmail(email)) {
            setErrorMessage('Your email is invalid');
            return;
        }
        if (!name) {
            setErrorMessage('A name is required');
            return;
        }
        if (!message) {
            setErrorMessage('A message is required');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('Submission complete!');
      };

    return (
        <div>
            {/* contact form */}
            <form id='contact-form'>
                {/* name input */}
                <input id='name-input' className='name-and-email-input' value={name} name='name' onChange={handleInputChange} type="text" placeholder="Name" onBlur={handleInputChange} />
                {/* email input */}
                <input id='email-input' className='name-email-input' value={email} name='email' onChange={handleInputChange} type='text' placeholder='Email' onBlur={checkInputChange} />
                {/* message input */}
                <input id='message-input' value={message} name='message' onChange={handleInputChange} type='text' placeholder='Type your message here' onBlur={checkInputChange} />
                {/* submit button */}
                <button className="contact-submit-button" type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
             {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
};

export default Contact;