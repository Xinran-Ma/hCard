import React from "react"

export const InputEmail = (props) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [emailFormat, setEmailFormat] = React.useState(true);

    const emailValidation = (value) => {
        console.log("checked")
        if(regex.test(value) === false) {
            setEmailFormat(false)
        } else {
            setEmailFormat(true)
        }
    }

    return (
        <div className="input-field input-email">
            <label htmlFor={props.keyName}>
                {props.label}
            </label>
            <input 
                type="email" 
                id={props.keyName}
                value={props.value} 
                onChange={e => props.updateValue({[props.keyName]: e.target.value})}
                onBlur={e => emailValidation(e.target.value)} 
                />
            {!emailFormat && 
                <span className="input-field__has-error">Invalid email</span>
            }
            
        </div>
    )
}