import { useRouter } from 'next/router'
import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'

const Post = () => {

    const router = useRouter()
    const { pid } = router.query
    const [post, setPost] = useState()

    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        if(user?.id)
            Fetcher.api('backend')
                .show('posts', {
                    id: pid,
                })
                .then(response => setPost(response))

    }, [user?.id])

    return <h1>Post: {pid}</h1>
}

export default Post
