import React from 'react';
import { Input } from '../Home/JSX/Register/Input';
import {useState} from 'react';
import axios from 'axios'

export const Right_login = () => {

    const [formData, setFormData] = useState({});

    const handleForm = (e) => {
        let {name} = e.target;
        setFormData({...formData, [name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post("https://ikeaserver.herokuapp.com/login", formData).then(({data}) => console.log(data.token))
    }

    return (
        <>
            <div className='login-right-div'>
                <div className="login-right-inner-div">
                    <div className="login-form-div">
                        <form action="#" className="login-form" onSubmit={handleSubmit}>
                            <Input type={"email"} nam={"email"} className={["form-input", "full"]} content={"Email (username)"} handleForm={handleForm}/>
                            <p className="login-below-input-text">Login <u>with an OTP</u></p>

                            <Input type={"password"} nam={"password"} className={["form-input", "half"]} content={"Password"} handleForm={handleForm}/>
                            <p className="login-below-input-text"><u>Forgot your password?</u></p>

                            <input type="submit" value="Continue" className="login-submit-btn" />
                        </form>

                        <p className='below-sub-text'>Do not have an IKEA account? Create one now:</p>

                        <button className="login-btn"><span>I'm buying for my home</span></button>

                        <button className="login-btn"><span>I'm buying for my company</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
