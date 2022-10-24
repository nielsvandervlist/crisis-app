import {useEffect, useRef, useState} from 'react'
import EditBox from '@/components/Timeline/EditBox'

function Line({setOpen, open, startTime, endTime, timelinePosts, setTimelinePosts, timeline, edit, setEdit}) {

    const [line, setLine] = useState({
        blocks: [],
        minutes: '',
        date: [],
        posts: [],
    })

    useEffect(() => {

        //For spots
        const startDate = new Date(startTime)
        const endDate = new Date(endTime)
        const minutes = (Math.abs(startDate - endDate) / 1000) / 60
        let timeBlock = []
        let placement = []

        timelinePosts.data.forEach((post) => {

            const postDate = new Date(post.time)
            const minute = (Math.abs(startDate - postDate) / 1000) / minutes

            const width = document.querySelector('#line').offsetWidth

            const postMinute = (width / minutes) * minute

            placement.push({
                post_id: post.id,
                title: post.title,
                pixels: Math.round(postMinute),
            })
        })

        for (let i = 0; i <= minutes; i = i + 5) {
            timeBlock.push(i + ':00')
        }

        setLine({
            blocks: timeBlock,
            minutes: minutes,
            posts: placement,
        })
    }, [startTime, endTime, timelinePosts])

    return <div className={'timeline__line'}>
        <div className={'timeline-posts__wrapper'}>
            <div className={'timeline-posts__edit-wrapper relative'}>
                {
                    line.posts.map((post, index) => {
                        return <div className={'absolute'} key={index} style={{left: post.pixels}}>
                            <EditBox
                                setOpen={setOpen}
                                open={open}
                                index={index}
                                post={post}
                                edit={edit}
                                setEdit={setEdit}
                            />
                        </div>
                    })
                }
            </div>
            <div className={'timeline-posts__line cursor-pointer'} onClick={() => setOpen(true)}>
                <div className={'timeline-posts-post timeline-posts-post__add'}/>
                <div className={'timeline-posts-done'}/>
            </div>
            <div className={'timeline-posts-time flex justify-between'}>
                {
                    line.blocks.map((block, index) => {
                        return <span key={index}>{block}</span>
                    })
                }
            </div>
        </div>
    </div>
}

export default Line
