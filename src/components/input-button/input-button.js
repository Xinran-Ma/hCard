export const InputButton = (props) => {
    return (
        <div className="input-field input-button">
            <button className={`btn ${props.buttonType === 'primary' ? 'btn-primary' : 'btn-secondary'}`} onClick={props.buttonClickHandler}>{props.buttonLabel}</button>
        </div>
    )
}