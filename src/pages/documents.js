import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import Link from 'next/link'
import DownloadList from '@/components/Lists/DownloadList'

const Crises = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [documents, setDocuments] = useState()
    const [activeCrisis, setActiveCrisis] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('documents', {
                    user_id: user?.id,
                })
                .then((res) => setDocuments(res))
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

            <div className={'flex w-full col-span-12 mb-2'}>
                <button className={'btn btn--primary'}><Link href={`documents/create`}><a>Create document</a></Link></button>
            </div>

            {documents && <DownloadList items={documents} setItems={setDocuments} type={'documents'}/>}

        </AppLayout>
    )
}

export default Crises
