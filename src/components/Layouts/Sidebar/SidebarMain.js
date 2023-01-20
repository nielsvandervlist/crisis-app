import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useRouter} from 'next/router'

function SidebarMain({user}){

    const router = useRouter();

    return <div className={'sidebar__main'}>
        <nav>
            {
                (user?.role[0] === 'admin' || user?.role[0] === 'editor') &&
                <ul>
                    <li className={router.pathname.includes("/dashboard")  ? "active" : ""}>
                        <Link href={'/dashboard'}>
                            <a><FontAwesomeIcon icon="circle-dot"/>Overview</a>
                        </Link>
                    </li>
                    <li className={router.pathname.includes("/crises")  ? "active" : ""}>
                        <Link href={'/crises'}>
                            <a><FontAwesomeIcon icon="fire"/>Crises</a>
                        </Link>
                    </li>
                    <li className={router.pathname.includes('/posts') ? "active" : ""}>
                        <Link href={'/posts'}>
                            <a><FontAwesomeIcon icon="envelope"/>Posts</a>
                        </Link>
                    </li>
                    <li className={router.pathname.includes("/companies")  ? "active" : ""}>
                        <Link href={'/companies'}>
                            <a><FontAwesomeIcon icon="building"/>Companies</a>
                        </Link>
                    </li>
                    <li className={router.pathname.includes("/participants")  ? "active" : ""}>
                        <Link href={'/participants'}>
                            <a><FontAwesomeIcon icon="user"/>Participants</a>
                        </Link>
                    </li>
                    <li className={router.pathname.includes("/timelines")  ? "active" : ""}>
                        <Link href={'/timelines'}>
                            <a><FontAwesomeIcon icon="clock"/>Timelines</a>
                        </Link>
                    </li>
                    <li className={router.pathname.includes("/rapports")  ? "active" : ""}>
                        <Link href={'/rapports'}>
                            <a><FontAwesomeIcon icon="clock"/>Rapports</a>
                        </Link>
                    </li>
                    <li className={router.pathname.includes("/documents")  ? "active" : ""}>
                        <Link href={'/documents'}>
                            <a><FontAwesomeIcon icon="file"/>Documents</a>
                        </Link>
                    </li>
                </ul>
            }
        </nav>
    </div>
}

export default SidebarMain
