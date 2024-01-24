import { useRouter } from 'next/router'
import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Info from '@/components/Rapports/Info'

const Post = () => {

    const router = useRouter()
    const { pid } = router.query
    const [rapport, setRapport] = useState()

    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        if(user?.id)
            Fetcher.api('backend')
                .show('rapports', {
                    id: pid,
                    info: true,
                })
                .then(response => setRapport(response))

    }, [user?.id])

    if(!rapport){
        return <></>
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Rapport</title>
            </Head>
            <div className={'card col-span-12'}>
                <Info rapport={rapport}/>
            </div>
        </AppLayout>
    )
}

export default Post
