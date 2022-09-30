import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import List from '@/components/Lists/List'

const Posts = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [posts, setPosts] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('posts', {
                    user_id: user?.id,
                })
                .then(response => setPosts(response))
        }
    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>
            {posts && <List items={posts} setItems={setPosts} type={'posts'}/>}

        </AppLayout>
    )
}

export default Posts
