import { InputText } from '../input-text/input-text'
import { InputEmail } from '../input-email/input-email'
import { InputNumber } from '../input-number/input-number'
import { InputImage } from '../input-image/input-image'
import { InputButton } from '../input-button/input-button'

export const InputColumn = (props) => {
    const inputFieldUpdateHandler = (value) => {
        props.setCardDetails({
            ...props.cardDetails,
            ...value
        })
    }

    return (
        <section className="input-column">
            <div className="input-column__header">
                <h1>hCard Builder</h1>
            </div>
            <div className="input-column__personal-details">
                <div className="input-column__section-header-wrapper">
                    <span className="input-column__section-header">PERSONAL DETAILS</span>
                </div>
                <div className="input-column__input-fields-wrapper">
                    <InputText label={'GIVEN NAME'} keyName={'givenName'} value={props.givenName} alphabetOnly updateValue={inputFieldUpdateHandler}/>
                    <InputText label={'SURNAME'} keyName={'surname'} value={props.surname} alphabetOnly updateValue={inputFieldUpdateHandler}/>
                    <InputEmail label={'EMAIL'} keyName={'email'} value={props.email} updateValue={inputFieldUpdateHandler}/>
                    <InputNumber label={'PHONE'} keyName={'phone'} value={props.phone} updateValue={inputFieldUpdateHandler}/>
                </div>
            </div>
            <div className="input-column__address">
                <div className="input-column__section-header-wrapper">
                    <span className="input-column__section-header">ADDRESS</span>
                </div>
                <div className="input-column__input-fields-wrapper">
                    <InputText label={'HOUSE NAME OR #'} keyName={'houseName'} value={props.houseName} updateValue={inputFieldUpdateHandler}/>
                    <InputText label={'STREET'} keyName={'street'} value={props.street} alphabetOnly updateValue={inputFieldUpdateHandler}/>
                    <InputText label={'SUBURB'} keyName={'suburb'} value={props.suburb} alphabetOnly updateValue={inputFieldUpdateHandler}/>
                    <InputText label={'STATE'} keyName={'state'} value={props.state} alphabetOnly updateValue={inputFieldUpdateHandler}/>
                    <InputNumber label={'POSTCODE'} keyName={'postcode'} value={props.postcode} updateValue={inputFieldUpdateHandler}/>
                    <InputText label={'COUNTRY'} keyName={'country'} value={props.country} alphabetOnly updateValue={inputFieldUpdateHandler}/>
                </div>
            </div>
            <div className="input-column__buttons">
                <InputImage keyName={'avatarURL'} updateValue={inputFieldUpdateHandler}/>
                <InputButton buttonType={'primary'} buttonLabel={'Create hCard'} buttonClickHandler={() => {console.log('clicked')}}/>
            </div>
        </section>
    )
}