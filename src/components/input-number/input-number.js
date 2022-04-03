export const InputNumber = (props) => {
    return (
        <div className="input-field input-number">
            <label htmlFor={props.keyName}>
                {props.label}
            </label>
            <input 
                type="number" 
                id={props.keyName} 
                value={props.value} 
                onWheel={(e) => e.target.blur()}
                onChange={e => props.updateValue({[props.keyName]: e.target.value})} />
        </div>
    )
}