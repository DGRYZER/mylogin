import './signup.css'
import React, { useState } from 'react'
import formservice from '../../Services/service'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const nameData = (e) => {
        setName(e.target.value)
    }

    const emailData = (e) => {
        setEmail(e.target.value);
    }

    const phoneData = (e) => {
        setPhone(e.target.value);
    }

    const passData = (e) => {
        setPassword(e.target.value);
    }

    const validEmail = email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

    const signupbtn = async () => {
        const payload = { name, email, phone, password }
        
        if (!validEmail) {
            alert("Enter a valid email");
            return; // Exit early if email is not valid
        }else if(password.length<8){
            alert('Please enter 8 characters for your password')
           return 
        }

        try {
            const res = await formservice.signup(payload);

            if (res.status === 200) {
                alert(res.message)
            } else if (res.status === 409) {
                alert(res.message)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id='signup'>
            <input type="text" placeholder='Enter Your Name...' value={name} onChange={nameData} />
            <input type="email" placeholder='Enter Your Email...' value={email} onChange={emailData} />
            <input type="text" placeholder='Enter Your Phone Number...' value={phone} onChange={phoneData} />
            <input type="password" placeholder='Enter Your Password...' value={password} onChange={passData} />
            <button onClick={signupbtn}>Sign Up</button>
        </div>
    )
}

export default Signup
