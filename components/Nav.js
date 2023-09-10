// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';
// 256639 55e 15000
// nav data
export const navData = [
    {name: 'My Name', path: '/', icon: <HiHome/>},
    {name: 'About Me', path: '/about', icon: <HiUser/>},
    {name: 'service', path: '/services', icon: <HiRectangleGroup/>},
    {name: 'work', path: '/work', icon: <HiViewColumns/>},
    {
        name: 'send',
        path: '/send',
        icon: <HiChatBubbleBottomCenterText/>,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope/>,
    },
];

import Link from 'next/link';
import {useRouter} from "next/router";

const Nav = () => {

    const router = useRouter();
    const pathname = router.pathname;

    return <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
    bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
        <div className="flex w-full xl:flex-col items-center justify-between
        xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-30 xl:h-max
        py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-3xl xl:rounded-full">
            {navData.map((link, index) => {
                return <Link
                    href={link.path}
                    className={`${link.path === pathname && 'text-accent'}
                    relative flex items-center hover:text-accent
                    transition-all duration-300 nav-item-link
                    `}
                    key={index}>
                    <div className='absolute pr-14 right-0 hide-show'>
                        <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                            <div className='text-[14px] leading-none font-semibold capitalize'>
                                {link.name}
                            </div>
                        </div>
                    </div>
                    <div>
                        {link.icon}
                    </div>
                </Link>
            })
            }
        </div>
    </nav>;
};

export default Nav;
