import {useEffect, useState} from 'react'
import {Fetcher, useApi, useIndex} from 'ra-fetch'
import {useAuth} from '@/hooks/auth'

function TimelinePostForm({timelineId, posts, startTime, endTime, timelinePosts, setTimelinePosts, setOpen, edit}) {

    const [time, setTime] = useState('')
    const [postId, setPostId] = useState('')
    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()

    //Update posts on timeline
    function addTimelinePost(response){
        let newTimelinePosts = timelinePosts.data.clone()
        newTimelinePosts.save(response)
        setTimelinePosts({data: newTimelinePosts})
        setOpen(false)
    }

    useEffect(() => {
        if(edit) {
            const filter = timelinePosts.data.filter((item) => item.id === edit)
            setTime(filter[0].time)
            setPostId(filter[0].post_id)
        }
    }, [edit])

    let params = {
        time: time,
        post_id: postId,
        timeline_id: timelineId
    }

    if(edit){
        params.id = edit
    }

    function submit(e) {
        e.preventDefault()

        if(!edit) {
            Fetcher.api('backend').store('timeline_posts', params)
                .then(response => addTimelinePost(response.data))
                .catch(errors => setErrors(errors))
        } else {
            Fetcher.api('backend').update('timeline_posts', params)
                .then(response => addTimelinePost(response.data))
                .catch(errors => setErrors(errors))
        }
    }

    return <form className={'col-span-12 form'}>
        <div className={'between mb-4'}>
            <i>Post time must be between
                <b>{startTime.split('T')[1]}</b>
                and <b>{endTime.split('T')[1]}</b>
                of <b>{startTime.split('T')[0]}</b>
            </i>
        </div>
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
            {/*{errors && <div className={'btn btn--error'}>{errors.errors[0]}</div>}*/}
            <button className={'btn btn--primary ml-auto mt-4'} onClick={submit}>Submit</button>
        </div>
    </form>
}

export default TimelinePostForm
