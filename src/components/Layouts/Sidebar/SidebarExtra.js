import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import Echo from 'laravel-echo'
import axios from '@/lib/axios'
import {data} from 'autoprefixer'

function SidebarExtra() {

    const {user} = useAuth({middleware: 'auth'})
    const [notifications, setNotifications] = useState([])

    function test(data) {

    }

    useEffect(() => {
        if (user?.id) {
            const echo = new Echo({
                authEndpoint: '/broadcasting/auth',
                broadcaster: 'pusher',
                key: 'ec406300773b41b56bc0',
                cluster: 'eu',
                wsPort: 443,
                disableStats: true,
                encrypted: true,
                authorizer: (channel, options) => {
                    return {
                        authorize: (socketId, callback) => {
                            axios.post('/broadcasting/auth', {
                                socket_id: socketId,
                                channel_name: channel.name,
                            })
                                .then(response => {
                                    callback(null, response.data)
                                })
                                .catch(error => {
                                    callback(error)
                                })
                        },
                    }
                },
            })

            echo
                .private('App.Models.User.' + user?.id)
                .listen('.user.reaction', (data) => {

                    console.log(data)

                    // setNotifications((oldNotifications) => [...oldNotifications, data])
                })
        }
    }, [])

    return <div className={'sidebar__extra'}>
        <nav>
            <ul>
                <li>
                    <Link href={'/notifications'}>
                        <a><FontAwesomeIcon icon="bell"/>Motifications
                            {notifications && <span>{notifications.length}</span>}
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/chat'}>
                        <a><FontAwesomeIcon icon="comment"/>Chat</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default SidebarExtra
