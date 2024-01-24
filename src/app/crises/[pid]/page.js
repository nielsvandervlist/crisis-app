import {useRouter} from 'next/navigation'
import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import useAuth from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CrisisForm from '@/components/Forms/CrisisForm'

const Crisis = () => {

    const router = useRouter()
    const {pid} = router.query
    const [crisis, setCrisis] = useState()
    const [documents, setDocuments] = useState()

    const {user} = useAuth({middleware: 'auth'})

    useEffect(() => {
            if (user?.id)
                Fetcher.api('backend')
                    .show('crises', {
                        id: pid,
                        company: true,
                    })
                    .then(response => setCrisis(response))

            Fetcher.api('backend').index('documents', {
                'crisis_id': pid,
            }).then(response => {
                if (response.data.length > 0) {
                    setDocuments(response)
                }
            })

        }, [user?.id],
    )

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

            {crisis && <CrisisForm requestType={'update'} id={pid} crisis={crisis} documents={documents}/>}

        </AppLayout>
    )
}

export default Crisis
