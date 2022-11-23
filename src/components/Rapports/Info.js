import GetParticipants from '@/components/Participants/GetParticipants'

function Info({rapport}){
    return <div className={'rapport-info'}>
        <div className={'rapport-info__head'}>
            <h1>Crisis name</h1>
            <h3>Company name</h3>
            <span>Date</span>
        </div>
        <div className={'rapport-info__participants'}>
            <h3>Participants</h3>
            <GetParticipants company_id={1}/>
        </div>
        <div className={'rapport-info__stats'}>
            <h3>Number of posts</h3>
            <span>Number of reactions</span>
        </div>
    </div>
}

export default Info
