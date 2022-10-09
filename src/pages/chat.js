import React, {useState, useEffect} from 'react'
import axios from 'lib/axios'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import Head from 'next/head'
import Messagebox from '@/components/Chat/MessageBox'
import AppLayout from '@/components/Layouts/AppLayout'
import {useAuth} from '@/hooks/auth'

function Chat() {

    const {user} = useAuth({middleware: 'auth'})
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const echo = new Echo({
            broadcaster: 'pusher',
            key: process.env.NEXT_PUBLIC_MIX_ABLY_PUBLIC_KEY,
            wsHost: 'realtime-pusher.ably.io',
            wsPort: 443,
            disableStats: true,
            encrypted: true,
        })

        echo
            .channel('public.room')
            .subscribed(() => {
                console.log('You are subscribed')
            })
            .listen('.message.new', (data) => {
                setMessages((oldMessages) => [...oldMessages, data])
                setMessage('')
            })
    }, [])

    async function handleSendMessage(e) {
        e.preventDefault()
        if (!user) {
            alert('Please add your username')
            return
        }
        if (!message) {
            alert('Please add a message')
            return
        }
        try {
            await axios.post(`/api/messages`, {
                user: user.name,
                message: message,
            })
        } catch (error) {
            console.error(error)
        }
    }

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
            <div className={'col-span-12 chat card'}>
                <div className={'chat__wrapper grid-cols-12 grid-rows-6 grid gap-4'}>
                    <div className={'chat__channels col-span-4 row-span-6'}>

                    </div>
                    <div className={'chat__active col-span-8 row-span-6'}>
                        <div className={'chat__header mb-4'}>
                            <h1>Public Space</h1>
                            <p>Post your random thoughts for the world to see</p>
                        </div>
                        <div className={'chat__messages mb-4'}>
                            {messages.map((message) => (
                                <Messagebox key={message.id} message={message} user={user}/>
                            ))}
                        </div>
                        <div className={'chat__form'}>
                            <form onSubmit={(e) => handleSendMessage(e)}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        value={message}
                                        className={'mb-4'}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                    <button className={'btn btn--primary'} onClick={(e) => handleSendMessage(e)}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Chat
