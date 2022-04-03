import React from 'react';

export const InputText = (props) => {

    const [text, setText] = React.useState('');

    const inputUpdateHandler = (value) => {
        if(props.alphabetOnly) {
            const regex = /^[A-Za-z]+$/;

            if (value === "" || regex.test(value)) {
                props.updateValue({[props.keyName]: value})
                setText(value)
            }
        } else {
            props.updateValue({[props.keyName]: value})
            setText(value)
        }
    }

    return (
        <div className="input-field input-text">
            <label htmlFor={props.keyName}>
                {props.label}
            </label>
            <input 
                type="text" 
                id={props.keyName} 
                value={text} 
                onChange={e => inputUpdateHandler(e.target.value)} />
        </div>
    )
}