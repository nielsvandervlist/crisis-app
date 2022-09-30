import {useState} from 'react'
import {Fetcher, useApi} from 'ra-fetch'
import {useAuth} from '@/hooks/auth'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function TimelinePosts() {

    const {user} = useAuth({middleware: 'auth'})

    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()

    const postTypes = useApi('backend').index('post_types')

    function submit(e) {
        e.preventDefault()
        Fetcher.api('backend').store('posts', {})
            .then(response => setResponse(response))
            .catch(errors => setErrors(errors))
    }

    return <div className={'card col-span-12 timeline-posts'}>
        <div className={'timeline-posts__header'}>
            <div className={'timeline-posts-date'}>
                <span>14</span>
                <span>NOV</span>
            </div>
            <h2>Company name</h2>
            <FontAwesomeIcon icon="ellipsis-vertical"/>
        </div>
        <div className={'timeline-posts__wrapper'}>
            <div className={'timeline-posts__line'}>
                <div className={'timeline-posts-post'}/>
                <div className={'timeline-posts-add'}/>
                <div className={'timeline-posts-done'}/>
            </div>
            <div className={'timeline-posts-time'}>
                <span>0:00</span>
            </div>
        </div>
        <div className={'timeline-posts__footer'}>
            <div className={'timeline-posts-profiles'}>
                <div className={'timeline-posts-profile'}>img</div>
            </div>
            <div className={'timeline-posts-description'}>Text</div>
            <button className={'btn btn--primary'}>Save timeline</button>
        </div>
    </div>
}

export default TimelinePosts
