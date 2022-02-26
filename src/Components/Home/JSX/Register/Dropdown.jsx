import React, { useState } from 'react'

export const Dropdown = ({ nam, content, values, handleForm}) => {
    const [isActive, setIsActive] = useState(false);
    const handleLabel = (e) => {
        if(e.target.value !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
    return (
        <div className="form-group">
            <select className="dropdowns" name={nam} onChange={(e)=>handleLabel(e)} onBlur={handleForm}>
                <option style={{ display: "none" }}></option>
                {values.map((e) => {
                    return (
                        <option key={e[0]} value={e[0]}>{e[1]}</option>
                    )
                })}
            </select>
            <label htmlFor="dropdowns" className={ isActive ? "select-label Active" : "select-label"}>{content}</label>
            {nam === "genderCode" &&
                <p className='font-small'>
                    We require this field in order to best personalize communication & marketing material and understand our users better
                </p>
            }
        </div>
    )
}
