import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import useAuth from '@/hooks/auth'
import List from '@/components/Lists/List'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import Link from 'next/link'

const Timelines = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [timelines, setTimelines] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('timelines', {
                    user_id: user?.id,
                })
                .then(response => setTimelines(response))
        }
    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                </h2>
            }>

            <Head>
                <title>Laravel - Overview</title>
            </Head>

            <div className={'flex w-full col-span-12 mb-2'}>
                <button className={'btn btn--primary'}><Link href={`timelines/create`}>Create timeline</Link></button>
            </div>

            {timelines && <List items={timelines} setItems={setTimelines} type={'timelines'}/>}
        </AppLayout>
    )
}

export default Timelines
