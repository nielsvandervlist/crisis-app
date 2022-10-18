import {useEffect, useRef, useState} from 'react'
import {Fetcher, useApi, useIndex} from 'ra-fetch'
import {useAuth} from '@/hooks/auth'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Modal from '@/components/Modal/Modal'
import TimelinePostForm from '@/components/Forms/TimelinePostForm'
import Line from '@/components/Timeline/Line'

function TimelinePosts({timelinePosts, posts, setPosts, startTime, endTime, title}) {

    const {user} = useAuth({middleware: 'auth'})
    const [open, setOpen] = useState(false)
    const [width, setWidth] = useState()
    const [dateString, setDateString] = useState()

    useEffect(() => {
        if (!(startTime instanceof Date)) {
            setDateString(new Date(startTime))
        }

        setDateString(startTime.toLocaleString('default', {day: 'numeric', month: 'long'}).split(' '))

        setWidth(document.querySelector('#line').offsetWidth)
    }, [startTime])

    return <div className={'card col-span-12 timeline-posts'}>
        <div className={'timeline-posts__header'}>
            <div className={'timeline-posts-date'}>
                {/*<span>{dateString[0]}</span>*/}
                {/*<span>{dateString[1]}</span>*/}
            </div>
            <h2>{title}</h2>
            <FontAwesomeIcon icon="ellipsis-vertical"/>
        </div>

        <div id={'line'} className={'w-full'}/>

        <Line
            timelinePosts={timelinePosts}
            setOpen={setOpen}
            startTime={startTime}
            endTime={endTime}
            width={width}
        />

        <div className={'timeline-posts__footer'}>
            <div className={'timeline-posts-profiles'}>
                <div className={'timeline-posts-profile'}>img</div>
            </div>
            <div className={'timeline-posts-description'}>Text</div>
            <button className={'btn btn--primary'}>Save timeline</button>
        </div>
        <Modal title={'Add posts to timeline'} open={open} setOpen={setOpen}>
            {/*<div className={'between mb-4'}>*/}
            {/*    <i>Post time must be between*/}
            {/*        <b>{startTime.split('T')[1]}</b>*/}
            {/*        and <b>{endTime.split('T')[1]}</b>*/}
            {/*        of <b>{startTime.split('T')[0]}</b>*/}
            {/*    </i>*/}
            {/*</div>*/}
            <TimelinePostForm
                startTime={startTime}
                endTime={endTime}
                posts={posts}
                user={user}
                timelineId={1}
                setPosts={setPosts}
            />
        </Modal>
    </div>
}

export default TimelinePosts
