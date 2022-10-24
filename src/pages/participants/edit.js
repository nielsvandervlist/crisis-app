import Head from 'next/head'
import List from '@/components/Lists/List'
import AppLayout from '@/components/Layouts/AppLayout'
import PostForm from '@/components/Forms/PostForm'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import ParticipantForm from '@/components/Participants/ParticipantForm'

function Edit(){

    return (
        <div>
            <ParticipantForm requestType={'update'}/>
        </div>
    )
}

export default Edit
