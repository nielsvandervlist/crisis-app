import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SidebarExtra() {
    return <div className={'sidebar__extra'}>
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>
                        <a><FontAwesomeIcon icon="bell"/>Motifications</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <a><FontAwesomeIcon icon="comment"/>Chat</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default SidebarExtra
