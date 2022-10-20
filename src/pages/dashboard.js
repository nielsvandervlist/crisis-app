import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import List from '@/components/Lists/List'
import {useAuth} from '@/hooks/auth'
import {Fetcher, useIndex} from 'ra-fetch'
import {useEffect, useState} from 'react'
import Twitter from '@/components/PostTypes/Twitter'
import Facebook from '@/components/PostTypes/Facebook'
import Youtube from '@/components/PostTypes/Youtube'
import Timeline from '@/components/Timeline/Timeline'

const Dashboard = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [posts, setPosts] = useState()
    const [crises, setCrises] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('posts', {
                    user_id: user?.id,
                })
                .then(response => setPosts(response))

            Fetcher.api('backend')
                .index('crises', {
                    user_id: user?.id,
                })
                .then(response => setCrises(response))
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

            <div className={'title card col-span-8'}>
                <h1>Dashboard overview</h1>
            </div>
            <div className={'create-crisis card col-span-4 flex'}>
                <div>
                    <h2><span className={'bg-danger h-4 w-4 inline-block rounded-full mr-2'}/>Online Crisis name</h2>
                    <p>Company name</p>
                </div>
                <button className={'btn btn--primary ml-auto'}>Stop crisis</button>
            </div>

            <div className={'online-timeline col-span-12'}>
                <Timeline/>
            </div>

            <div className={'social-posts col-span-12 card'}>
                <Facebook/>
                <Twitter/>
                <Youtube embedId={'AOLal6z6nig'}/>
            </div>

            {crises && <List items={crises} setItems={setCrises} type={'crises'}/>}
            {posts && <List items={posts} setItems={setPosts} type={'posts'}/>}

        </AppLayout>
    )
}

export default Dashboard
