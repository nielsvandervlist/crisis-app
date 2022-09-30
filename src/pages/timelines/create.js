import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import List from '@/components/Lists/List'
import TimelineForm from '@/components/Forms/TimelineForm'
import TimelinePosts from '@/components/Forms/TimelinePosts'

const Create = () => {

    const {user} = useAuth({middleware: 'auth'})

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

            <div className={'card col-span-12'}>
                Test
            </div>

            <TimelineForm/>
            <TimelinePosts/>

        </AppLayout>
    )
}

export default Create
