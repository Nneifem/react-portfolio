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
        <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control"
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
            />
            <label className="form-label">Email</label>
            <input className="form-control"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
            />
            <label className="form-label">Message</label>
            <input className="form-control"
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
            />
            <button type="submit" class="btn btn-primary">Sumbit</button>
            </div>
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