import avatarPlaceholder from '../../images/avatar-placeholder.png'

export const PreviewCard = (props) => {
    return (
        <section className='preview-card'>
            <div className='preview-card__container'>
                <h2 className='preview-card__top-header'>HCARD PREVIEW</h2>
                <div className='preview-card__card'>
                    <div className='preview-card__card--upper'>
                        <span className='preview-card__name'>{`${props.cardDetails.givenName} ${props.cardDetails.surname}`}</span>
                        <img src={props.cardDetails.avatarURL ? props.cardDetails.avatarURL : avatarPlaceholder} className="preview-card__avatar" alt="preview card avatar"/>
                    </div>
                    <div className='preview-card__card--lower'>
                        <div className='preview-card__info-details-row'>
                            <span className='preview-card__info-name'>
                                EMAIL
                            </span>
                            <span className='preview-card__info-value'>
                                {props.cardDetails.email}
                            </span>
                        </div>
                        <div className='preview-card__info-details-row'>
                            <span className='preview-card__info-name'>
                                PHONE
                            </span>
                            <span className='preview-card__info-value'>
                                {props.cardDetails.phone.substring(0, 2) === '04' ? 
                                props.cardDetails.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
                                :
                                props.cardDetails.phone.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3')}
                            </span>
                        </div>
                        <div className='preview-card__info-details-row'>
                            <span className='preview-card__info-name'>
                                ADDRESS
                            </span>
                            <span className='preview-card__info-value'>
                                {`${props.cardDetails.houseName} ${props.cardDetails.street}`}
                            </span>
                        </div>
                        <div className='preview-card__info-details-row'>
                            <span className='preview-card__info-name'>
                                
                            </span>
                            <span className='preview-card__info-value'>
                                {(props.cardDetails.suburb || props.cardDetails.state) &&

                                `${props.cardDetails.suburb}, ${props.cardDetails.state}`
                                }
                            </span>
                        </div>
                        <div className='preview-card__info-details-row preview-card__info-details-row--two-cols'>
                            <div className='preview-card__info-details-row'>
                                <span className='preview-card__info-name'>
                                    POSTCODE
                                </span>
                                <span className='preview-card__info-value'>
                                    {props.cardDetails.postcode}
                                </span>
                            </div>
                            <div className='preview-card__info-details-row'>
                                <span className='preview-card__info-name'>
                                    COUNTRY
                                </span>
                                <span className='preview-card__info-value'>
                                    {props.cardDetails.country}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}