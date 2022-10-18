import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SidebarMain(){
    return <div className={'sidebar__main'}>
        <nav>
            <ul>
                <li>
                    <Link href={'/dashboard'}>
                        <a><FontAwesomeIcon icon="circle-dot"/>Overview</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/crises'}>
                        <a><FontAwesomeIcon icon="fire"/>Crises</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/posts'}>
                        <a><FontAwesomeIcon icon="envelope"/>Posts</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/companies'}>
                        <a><FontAwesomeIcon icon="building"/>Companies</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/participants'}>
                        <a><FontAwesomeIcon icon="user"/>Participants</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/timelines'}>
                        <a><FontAwesomeIcon icon="clock"/>Timelines</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/rapports'}>
                        <a><FontAwesomeIcon icon="clock"/>Rapports</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default SidebarMain
