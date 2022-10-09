import {useEffect, useState} from 'react'
import {Fetcher, useApi, useIndex} from 'ra-fetch'
import {useAuth} from '@/hooks/auth'

function TimelinePostForm({user, timelineId, posts, setPosts, startTime, endTime}) {

    const [time, setTime] = useState('')
    const [postId, setPostId] = useState('')
    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()

    //Update posts on timeline
    function addPost(){
        //TODO Finish this
        posts.data.push({
            id: postId,
        })

        setPosts({
            loading: false,
            data: {...posts.data, title: 'yes'}
        })
    }

    function submit(e) {
        e.preventDefault()
        Fetcher.api('backend').store('timeline_posts', {
            time: time,
            post_id: postId,
            timeline_id: timelineId,
        })
            .then(response => setResponse(response))
            .catch(errors => setErrors(errors))
    }

    return <form className={'col-span-12 form'}>
        <fieldset>
            <div className={'form__block'}>
                <label>Time</label>
                <input
                    type={'datetime-local'}
                    value={time}
                    placeholder={'Title'}
                    onChange={event => setTime(event.target.value)}
                    id={'time'}
                    name={'time'}
                />
            </div>
            {!posts.loading && <div className={'form__block'}>
                <label>Post</label>
                <select
                    value={postId}
                    onChange={event => setPostId(event.target.value)}
                >
                    <option>Select a option</option>
                    {
                        posts.data.map((post, index) => {
                            return <option key={index} value={post.id}>{post.title}</option>
                        })
                    }
                </select>
            </div>}
        </fieldset>
        <div className={'flex items-center'}>
            {response && <div className={'btn btn--success'}>Timeline created</div>}
            {errors && <div className={'btn btn--error'}>{errors.errors[0]}</div>}
            <button className={'btn btn--primary ml-auto mt-4'} onClick={(e) => submit(e)}>Submit</button>
        </div>
    </form>
}

export default TimelinePostForm
