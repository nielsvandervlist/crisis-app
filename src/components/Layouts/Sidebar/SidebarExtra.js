import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'

function SidebarExtra() {

    const {user} = useAuth({middleware: 'auth'})
    const [crises, setCrises] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('crises', {
                    user_id: user?.id,
                })
                .then(response => setCrises(response))
        }
    }, [user?.id])

    return <div className={'sidebar__extra'}>
        <nav>
            <ul>
                <li>
                    <Link href={'/notifications'}>
                        <a><FontAwesomeIcon icon="bell"/>Motifications</a>
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
