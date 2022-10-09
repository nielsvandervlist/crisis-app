function Messagebox({message, user}) {
    const formatDate = (value) => {
        if (!value) return ''
        return new Date(value).toLocaleTimeString()
    }

    return (
        <div className={`message ${message.user === user.name ? 'message--active' : ''}`}>
            <div className={'message__wrapper'}>
                <p className={'message__box'}>{message.message}</p>
                <p className={'message__time'}>{message.user} - {formatDate(message.createdAt)}</p>
            </div>
        </div>
    )
}

export default Messagebox
