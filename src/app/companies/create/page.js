import Head from 'next/head'
import CrisisForm from '@/components/Forms/CrisisForm'
import AppLayout from '@/components/Layouts/AppLayout'
import Form from '@/components/Companies/Form'

function Create(){
    return <AppLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Create company
            </h2>
        }>

        <Head>
            <title>Create company</title>
        </Head>

        <Form requestType={'store'}/>

    </AppLayout>
}

export default Create
