import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Facebook(){
    return <div className={'facebook'}>
        <div className={'facebook__header'}>
            <div className={'flex'}>
                <img className={'rounded-full w-24 h-24'} src={'/'} alt={''}/>
                <div className={'facebook__header__info'}>
                    <span>Name of poster</span>
                    <span>5 mins . icon</span>
                </div>
            </div>
            <FontAwesomeIcon icon="down-to-dotted-line"/>
        </div>
        <h3>Ttitle</h3>
        <img src={'/'} alt={''}/>
        <div className={'facebook__body'}>
            <div className={'facebook__likes'}>
                <span>icon</span>
                <span> 15 people</span>
            </div>
            <div className={'facebook__comments'}>
                <div>Like</div>
                <div>Comment</div>
                <div>Share</div>
            </div>
            <div className={'facebook__add-comments'}>
                <img className={'rounded-full w-24 h-24'} src={'/'} alt={''}/>
                <div className={'facebook__write flex'}>
                    <div>Comment</div>
                    <div className={'options flex'}>
                        <span>emoiji</span>
                        <span>camera</span>
                        <span>gif</span>
                        <span>img</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Facebook
