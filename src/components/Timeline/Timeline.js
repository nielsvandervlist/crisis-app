import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'
import TimelineForm from '@/components/Forms/TimelineForm'
import TimelinePosts from '@/components/Forms/TimelinePosts'
import {useRouter} from 'next/router'

function Timeline({edit}) {

    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState('')
    const [crisis, setCrisis] = useState()
    const [company, setCompany] = useState()
    const {user} = useAuth({middleware: 'auth'})
    const [timeline, setTimeline] = useState()
    const router = useRouter()

    useEffect(() => {
        if(edit){
            setTitle(edit.data.title)
            setDuration(edit.data.duration)
            setTimeline(edit)
            setCompany(edit.data.company_id)
            setCrisis(edit.data.crisis_id)
        }
    }, [])

    if(!timeline){
        return <></>
    }

    return <>
        {
            router.pathname === '/timelines/create' || `'timelines/${timeline.id}` &&
            <TimelineForm
                setTimeline={setTimeline}
                title={title}
                setTitle={setTitle}
                duration={duration}
                setDuration={setDuration}
                company={company}
                setCompany={setCompany}
                setCrisis={setCrisis}
                crisis={crisis}
            />
        }
        {
            timeline && timeline.data.id &&
            <TimelinePosts
                title={title}
                timeline={timeline}
                duration={duration}
            />
        }
    </>
}

export default Timeline
