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
    faFile,
    faDownload,
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
    faFile,
    faDownload,
)

export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <div className="font-sans text-gray-900 antialiased">
                {children}
                </div>
            </body>
        </html>
    )
}
