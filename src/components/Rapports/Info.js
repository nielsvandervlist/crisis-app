function Info({rapport}) {
    return <div className={'rapport-info'}>
        <div className={'rapport-info__head mb-4'}>
            <h1>Crisis title: {rapport.data.crisis.title}</h1>
            <h3>Company name: {rapport.data.company.name}</h3>
            <span>Date: {rapport.data.created_at}</span>
        </div>
        <div className={'rapport-info__participants mb-8'}>
            <h3 className={'mb-4'}>Participants</h3>
            <div className={'flex'}>
                {
                    rapport.data.participants.map((participant, index) => {
                        return <div className={'rounded-md bg-gray-100 p-4'} key={index}>
                            <div className={'font-semibold'}>{participant.name}</div>
                            <div className={''}>{participant.email}</div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className={'rapport-info__stats mb-4'}>
            <h3>Number of posts: {rapport.data.posts}</h3>
            <span>Number of reactions</span>
        </div>
        <div className={'rapport-info__scores'}>
            <h3 className={'block mb-2'}>Scores</h3>
            <div className={'flex'}>
                <div className={'rapport-info__score text-center'}>
                    <p className={'flex mb-2'}><span
                        className={'block btn btn--label-small mr-2'}>{rapport.data.reaction_score}/10</span>Reaction
                        score</p>
                    <p className={'flex mb-2'}><span
                        className={'block btn btn--label-small mr-2'}>{rapport.data.sharing_score}/10</span>Sharing
                        score</p>
                    <p className={'flex mb-2'}><span
                        className={'block btn btn--label-small mr-2'}>{rapport.data.content_score}/10</span>Content
                        score</p>
                </div>
            </div>
        </div>
    </div>
}

export default Info
