import React from 'react';
import { InputButton } from '../input-button/input-button';

export const InputImage = (props) => {
    const imageUpload = React.useRef(null);

    const buttonClickHandler = () => {
        imageUpload.current.click()
    }

    return (
        <div className="input-field input-image">
            <input 
                ref={imageUpload}
                type="file"
                accept="image/*"
                style={{display: 'none'}}
                onChange={e => props.updateValue({[props.keyName]: URL.createObjectURL(e.target.files[0])})} />
            <InputButton buttonType={'secondary'} buttonLabel={'Upload Avatar'} buttonClickHandler={buttonClickHandler}/>
        </div>
    )
}