import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'
import {Fetcher} from 'ra-fetch'
import TimelineForm from '@/components/Forms/TimelineForm'
import TimelinePosts from '@/components/Forms/TimelinePosts'
import {useRouter} from 'next/router'

function Timeline({}) {
    const [posts, setPosts] = useState('')
    const [startTime, setStartTime] = useState(new Date())
    const [title, setTitle] = useState('')
    const [endTime, setEndTime] = useState('')
    const [timelinePosts, setTimelinePosts] = useState([])
    const {user} = useAuth({middleware: 'auth'})

    const router = useRouter()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend').index('posts', {
                user_id: user?.id,
            }).then(res => setPosts(res))

            Fetcher.api('backend').index('timeline_posts', {
                timeline_id: 1,
            }).then(res => setTimelinePosts(res))
                .catch(err => console.log(err))
        }
    }, [user?.id])

    if (timelinePosts.loading || timelinePosts.length < 1) {
        return <></>
    }

    return <>
        {
            router.pathname === '/timelines/create' &&
            <TimelineForm
                title={title}
                setTitle={setTitle}
                startTime={startTime}
                endTime={endTime}
                setEndTime={setEndTime}
                setStartTime={setStartTime}
            />
        }
        {/*{!posts.loading && endTime !== '' &&*/}
        <TimelinePosts
            title={title}
            timelinePosts={timelinePosts}
            posts={posts}
            setPosts={setPosts}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
        />
    </>
}

export default Timeline
