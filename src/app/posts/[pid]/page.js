import { useRouter } from 'next/router'
import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import useAuth from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import List from '@/components/Lists/List'
import PostForm from '@/components/Forms/PostForm'

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

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Edit Post</title>
            </Head>

            <div className={'card col-span-12'}>
                {post && <h1>Edit {post.data.title}</h1>}
            </div>

            {post && <PostForm requestType={'update'} id={pid} post={post}/>}

        </AppLayout>
    )
}

export default Post
