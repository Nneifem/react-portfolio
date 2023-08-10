import { useState } from 'react';
import { validateEmail, validateMessage, validateName } from '../utils/helpers';

function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name'){
            setName(inputValue);
        } else if (inputType === 'email'){
            setEmail(inputValue);
        } else if (inputType === 'message'){
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateName(name)){
            setErrorMessage('Name is required');
            return;
        }
        if(!validateEmail(email)){
            setErrorMessage('Email is not valid');
            return;
        }
        if(!validateMessage(message)){
            setErrorMessage('Message required');
            return;
        }
    };

    return(
        <>
        <form className="form" onSubmit={handleFormSubmit}>
            <h4>Name</h4>
            <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
            />
            <h4>Email</h4>
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
            />
            <h4>Message</h4>
            <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
            />
            <button type="submit">Sumbit</button>
        </form>
        {errorMessage && (
            <div className='error'>
                <p className='error-message'>{errorMessage}</p>
            </div>
        )}
        </>
    );
}

export default Form;