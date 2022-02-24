import { useState } from 'react'

export const Input = ({ type, nam, className, content, placeholder, handleForm }) => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="form-group">
            <input type={type}
                name={nam}
                className={className.join(" ")}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleForm(e)}
            />
            <label htmlFor={nam} className='animated-label'>{content}</label>
        </div>
    )
}
