import {useEffect, useRef, useState} from 'react'
import {Fetcher, useApi, useIndex} from 'ra-fetch'
import {useAuth} from '@/hooks/auth'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Modal from '@/components/Modal/Modal'
import TimelinePostForm from '@/components/Forms/TimelinePostForm'
import Line from '@/components/Timeline/Line'
import GetParticipants from '@/components/Participants/GetParticipants'
import TimelinePostsHeader from '@/components/Timeline/TimelinePostsHeader'
import TimelinePostsFooter from '@/components/Timeline/TimelinePostsFooter'

function TimelinePosts({startTime, endTime, title, timeline}) {

    const {user} = useAuth({middleware: 'auth'})
    const [open, setOpen] = useState(false)
    const [posts, setPosts] = useState('')
    const [timelinePosts, setTimelinePosts] = useState([])
    const [dateString, setDateString] = useState()
    const [edit, setEdit] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend').index('posts', {
                user_id: user?.id,
            }).then(res => setPosts(res))

            Fetcher.api('backend').index('timeline_posts', {
                timeline_id: timeline.data.id,
            }).then(res => setTimelinePosts(res))
                .catch(err => console.log(err))
        }
    }, [user?.id])

    useEffect(() => {
        if (!(startTime instanceof Date)) {
            setDateString(new Date(startTime))
        }

        setDateString(startTime.toLocaleString('default', {day: 'numeric', month: 'long'}).split(' '))

    }, [startTime])

    if (timelinePosts.loading || timelinePosts.length < 1) {
        return <></>
    }

    return <div className={'card col-span-12 timeline-posts'}>
        <TimelinePostsHeader title={title}/>

        <div id={'line'} className={'w-full'}/>

        <Line
            setTimelinePosts={setTimelinePosts}
            timeline={timeline}
            timelinePosts={timelinePosts}
            setOpen={setOpen}
            startTime={startTime}
            endTime={endTime}
            open={open}
            edit={edit}
            setEdit={setEdit}
        />

        <TimelinePostsFooter company_id={timeline.data.company_id}/>

        <Modal title={'Add posts to timeline'} open={open} setOpen={setOpen}>
            <TimelinePostForm
                timelinePosts={timelinePosts}
                setTimelinePosts={setTimelinePosts}
                startTime={startTime}
                endTime={endTime}
                posts={posts}
                user={user}
                timelineId={timeline.data.id}
                setPosts={setPosts}
                setOpen={setOpen}
                edit={edit}
            />
        </Modal>
    </div>
}

export default TimelinePosts
