import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import Link from 'next/link'
import RapportForm from '@/components/Rapports/RapportForm'

function Create(){
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Creating Rapports
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>
            <RapportForm requestType={'store'}/>
        </AppLayout>
    )
}

export default Create
