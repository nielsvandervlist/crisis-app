import '../../src/routes'
import 'tailwindcss/tailwind.css'
import '../styles/style.scss'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faUser,
    faFire,
    faClock,
    faBuilding,
    faEnvelope,
    faComment,
    faBell,
    faCircleDot,
    faAngleDown,
    faPenToSquare,
    faTrashCan,
    faEllipsisVertical,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

library.add(faUser,
    faFire,
    faClock,
    faBuilding,
    faEnvelope,
    faComment,
    faBell,
    faCircleDot,
    faAngleDown,
    faPenToSquare,
    faTrashCan,
    faEllipsisVertical,
    faCircleXmark
)

const App = ({Component, pageProps}) => <Component {...pageProps} />

export default App
