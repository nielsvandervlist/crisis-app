import GetParticipants from '@/components/Participants/GetParticipants'

function TimelinePostsFooter({company_id})
{
    return <div className={'timeline-posts__footer'}>
        <div className={'timeline-posts-profiles'}>
            <GetParticipants company_id={company_id}/>
        </div>
        <div className={'timeline-posts-description'}>Text</div>
        <button className={'btn btn--primary'}>Save timeline</button>
    </div>
}

export default TimelinePostsFooter
