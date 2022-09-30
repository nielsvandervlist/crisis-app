import Image from 'next/image'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SidebarMain from '@/components/Layouts/Sidebar/SidebarMain'
import SidebarExtra from '@/components/Layouts/Sidebar/SidebarExtra'

function Sidebar() {
    return <div className={'sidebar'}>
        <div className={'sidebar__logo'}>
            {/*<Image src={'/'} alt={'sidebar-logo'} layout={'fill'} />*/}
        </div>
        <SidebarMain/>
        <SidebarExtra/>
    </div>
}

export default Sidebar
