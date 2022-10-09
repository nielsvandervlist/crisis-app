import {useEffect, useRef, useState} from 'react'
import EditBox from '@/components/Timeline/EditBox'

function Line({setOpen, startTime, endTime, timelinePosts, width}) {

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

        timelinePosts.data.forEach((post, index) => {

            const postDate = new Date(post.time)
            const minute = (Math.abs(endDate - postDate) / 1000) / 60
            const postMinute = (width / 100) * minute

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
    }, [startTime, endTime])


    return <div className={'timeline__line'}>
        <div className={'timeline-posts__wrapper'}>
            <div className={'timeline-posts__edit-wrapper'}>
                {
                    line.posts.map((post, index) => {
                        return <EditBox
                            index={index}
                            id={post.id}
                            post={post}

                        />
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
