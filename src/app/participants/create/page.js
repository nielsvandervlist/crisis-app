import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import ParticipantForm from '@/components/Participants/ParticipantForm'
import Link from 'next/link'

function Create(){
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Creating participants
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className={'card col-span-6'}>
                <h3 className={'mb-4'}>Creating a new participant</h3>
                <p className={'mb-4'}>Participants can join a online crises that you setup. Make sure that you have a <Link href={'/create/company'}>
                    <span className={'underline'}>
                        company
                    </span>
                </Link> created before creating a participant</p>
                <p>The participant receives an <b>email</b> with the login information once created!</p>
            </div>

            <ParticipantForm requestType={'store'}/>

        </AppLayout>
)
}

export default Create
