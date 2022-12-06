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
    faShare,
    faThumbsUp,
    faShareAlt,
    faUsers,
    faHeart,
    faArrowLeft,
    faSearch,
} from '@fortawesome/free-solid-svg-icons'

import {
    faTwitter,
    faFacebook,
    faYoutube,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faLinkedin,
    faYoutube,
    faTwitter,
    faFacebook,
    faHeart,
    faUser,
    faUsers,
    faShareAlt,
    faThumbsUp,
    faShare,
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
    faArrowLeft,
    faSearch,
)

const App = ({Component, pageProps}) => <Component {...pageProps} />

export default App
