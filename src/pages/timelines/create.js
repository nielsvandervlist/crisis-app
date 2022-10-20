import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Timeline from '@/components/Timeline/Timeline'

const Create = () => {

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

            <Timeline/>

        </AppLayout>
    )
}

export default Create
