import { useState } from "react"

export const Input = ({
  type,
  nam,
  className,
  content,
  placeholder,
  handleForm,
}) => {
  const [text, setText] = useState("")
  const [isActive, setIsActive] = useState(false)
  const handleChange = (e) => {
    setText(e.target.value)

    if (e.target.value !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  return (
    <div className="form-group">
      <input
        type={type}
        name={nam}
        className={className.join(" ")}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleForm(e)}
      />
      <label
        htmlFor={nam}
        className={isActive ? "animated-label Active" : "animated-label"}
      >
        {content}
      </label>
    </div>
  )
}
