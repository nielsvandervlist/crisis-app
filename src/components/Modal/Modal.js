function Modal({open, children})
{
    if(!open){
        return <></>
    }

    return <div className={'modal'}>
        <div className={'modal__bg'}/>
        <div className={'modal__content card'}>
            {children}
        </div>
        <div className={'modal__footer'}>

        </div>
    </div>
}
