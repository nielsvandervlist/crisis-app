import { useRouter } from 'next/router'
import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import useAuth from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Form from '@/components/Companies/Form'

const Crisis = () => {

    const router = useRouter()
    const { pid } = router.query
    const [company, setCompany] = useState()

    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        if(user?.id)
            Fetcher.api('backend')
                .show('companies', {
                    id: pid,
                })
                .then(response => setCompany(response))

    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Company
                </h2>
            }>

            <Head>
                <title>Edit Company</title>
            </Head>

            {company && <Form requestType={'update'} id={pid} company={company}/>}

        </AppLayout>
    )
}

export default Crisis
