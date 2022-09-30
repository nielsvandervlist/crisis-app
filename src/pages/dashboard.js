import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import List from '@/components/Lists/List'
import {useAuth} from '@/hooks/auth'
import {Fetcher, useIndex} from 'ra-fetch'
import axios from '@/lib/axios'
import {useEffect, useState} from 'react'
import Sidebar from '@/components/Layouts/Sidebar/Sidebar'

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
            {crises && <List items={crises} setItems={setCrises} type={'crises'}/>}
            {posts && <List items={posts} setItems={setPosts} type={'posts'}/>}

        </AppLayout>
    )
}

export default Dashboard
