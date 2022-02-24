import React from 'react';
import '../../CSS/Register/Signup.css'
import { Dropdown } from './Dropdown';
import { Input } from './Input';
import { useState } from 'react';

export const Right_signup = () => {

    const [formData, setFormData] = useState({});

    const handleForm = (e) => {
        let {name} = e.target;
        setFormData({...formData, [name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    return (
        <div className='right-div'>

            <form action="#" className='custom-form' onSubmit={handleSubmit}>

                <div className="form-group family">

                    <p className="bold">Become a member of IKEA Family today. Did we mention it's free to join?</p>

                    <div className="radio-div">
                        <label className="radio-label-container">Yes, I want to enjoy rewards, discounts and a lot more!<u style={{ color: "#555" }}>Get the details</u>
                            <input type="radio" name="isFamily" value="true" onChange={handleForm}/>
                            <span className="large-circle"></span>
                            <span className="small-circle">
                            </span>
                        </label>
                    </div>

                    <div className="radio-div">
                        <label className="radio-label-container">No thanks, I just want to create an IKEA account today. Maybe another day.<u style={{ color: "#555" }}>Get the details</u>
                            <input type="radio" name="isFamily" value="false" onChange={handleForm}/>
                            <span className="large-circle"></span>
                            <span className="small-circle">
                            </span>
                        </label>
                    </div>

                </div>


                <Input type={"text"} nam={"first_name"} className={["form-input", "full"]} content={"First name"}  handleForm={handleForm}/>

                <Input type={"text"} nam={"Surname"} className={["form-input", "full"]} content={"Surname"} handleForm={handleForm}/>

                <Input type={"Number"} nam={"Mobile"} className={["form-input", "full"]} content={"Mobile"} handleForm={handleForm}/>

                <Input type={"text"} nam={"Birthdate"} className={["form-input", "full"]} content={"Birthdate"} placeholder={'DD-MM-YYYY'}handleForm={handleForm} />

                <Dropdown
                    nam={"genderCode"}
                    values={
                        [["M", "Male"],
                        ["F", "Female"],
                        ["O", "Other"]]
                    }
                    content={"Gender"}
                    handleForm={handleForm}
                />

                <Input type={"Number"} nam={"post-code"} className={["form-input", "half"]} content={"Post code"} handleForm={handleForm}/>

                <Dropdown
                    nam={"storeCode"}
                    values={
                        [["H", "Hyderabad store"],
                        ["N", "Navi Mumbai store"],
                        ["OS", "Online Store"],
                        ["W", "Worli"]]
                    }
                    content={"Preferred store"}
                    handleForm={handleForm}
                />


                <Input type={"email"} nam={"Email"} className={["form-input", "full"]} content={"Email (username)"} handleForm={handleForm}/>

                <Input type={"password"} nam={"password"} className={["form-input", "half"]} content={"Password"} handleForm={handleForm} />

                <div className="form-group">
                    <input type="checkbox" name="agreed" className="checkbox"  handleForm={handleForm}/>
                    <label htmlFor="agreed" className='checkbox-label'>
                        I have read and understood the <u>Terms & Conditions</u> and <u>Privacy Policy</u>.
                    </label>
                </div>

                <div className="form-group">
                    <input type="checkbox" name="agreed" className="checkbox shifted"  handleForm={handleForm}/>
                    <label htmlFor="agreed" className='checkbox-label'>
                    Via Email
                    </label>
                </div>

                <div className="form-group">
                    <input type="checkbox" name="agreed" className="checkbox shifted"  handleForm={handleForm}/>
                    <label htmlFor="agreed" className='checkbox-label'>
                    Via SMS
                    </label>
                </div>

                <div className="form-group">
                    <input type="checkbox" name="agreed" className="checkbox shifted"  handleForm={handleForm}/>
                    <label htmlFor="agreed" className='checkbox-label'>
                    Via direct mail
                    </label>
                </div>

                <div className="form-group">
                    <input type="checkbox" name="agreed" className="checkbox"  handleForm={handleForm}/>
                    <label htmlFor="agreed" className='checkbox-label'>
                        I would like to receive news, tips and marketing offers from IKEA.
                    </label>
                </div>


                <input type="submit" value="Create profile" className="submit-btn" />

            </form>
        </div>
    )
}
