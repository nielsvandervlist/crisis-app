import { useRouter } from 'next/router'
import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CrisisForm from '@/components/Forms/CrisisForm'

const Crisis = () => {

    const router = useRouter()
    const { pid } = router.query
    const [crisis, setCrisis] = useState()

    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        if(user?.id)
            Fetcher.api('backend')
                .show('crisiss', {
                    id: pid,
                })
                .then(response => setCrisis(response))

    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Edit Crisis</title>
            </Head>

            <div className={'card col-span-12'}>
                {crisis && <h1>Edit {crisis.data.title}</h1>}
            </div>

            {crisis && <CrisisForm requestType={'update'} id={pid} crisis={crisis}/>}

        </AppLayout>
    )
}

export default Crisis
