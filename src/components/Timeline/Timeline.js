import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'
import {Fetcher} from 'ra-fetch'
import TimelineForm from '@/components/Forms/TimelineForm'
import TimelinePosts from '@/components/Forms/TimelinePosts'
import {useRouter} from 'next/router'

function Timeline({}) {
    const [startTime, setStartTime] = useState(new Date())
    const [title, setTitle] = useState('')
    const [endTime, setEndTime] = useState('')
    const {user} = useAuth({middleware: 'auth'})
    const [timeline, setTimeline] = useState()

    const router = useRouter()

    return <>
        {
            router.pathname === '/timelines/create' &&
            <TimelineForm
                setTimeline={setTimeline}
                title={title}
                setTitle={setTitle}
                startTime={startTime}
                endTime={endTime}
                setEndTime={setEndTime}
                setStartTime={setStartTime}
            />
        }
        {
            timeline && timeline.data.id &&
            <TimelinePosts
                title={title}
                timeline={timeline}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
            />
        }
    </>
}

export default Timeline
