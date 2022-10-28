import SidebarMain from '@/components/Layouts/Sidebar/SidebarMain'
import SidebarExtra from '@/components/Layouts/Sidebar/SidebarExtra'

function Sidebar({user}) {

    return <div className={'sidebar'}>
        <div className={'sidebar__logo'}>
            {/*<Image src={'/'} alt={'sidebar-logo'} layout={'fill'} />*/}
        </div>
        <SidebarMain user={user}/>
        <SidebarExtra />
    </div>
}

export default Sidebar
