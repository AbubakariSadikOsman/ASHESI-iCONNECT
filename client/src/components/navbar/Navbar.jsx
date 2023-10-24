/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import arrowDown from '../../assets/arrowDown.svg'
import Bell from '../../assets/notificationBell.svg'
import profile from '../../assets/profile.png'


const NavBar = ({ selectedLink, setSelectedLink, setInbox, setAddImage }) => {

    const handleLinkClick = (link) => {
    setSelectedLink(link);
    };

    return (
        <nav className="bg-white dark:bg-[#2D2D2D] text-zinc-700 dark:text-[#ffffffc2] fixed top-0 z-0 font-[Inter] h-[70px] w-full flex flex-row items-center px-8 hr" onClick={() => setAddImage(false)}>
            <div className="text-[24px] font-bold mr-10">
                Ashesi&nbsp;iConnect
            </div>
            <div className="navlinks font-medium text-[20px] ml-10">
                <ul className='flex flex-row items-center'>
                    <li className='hover:text-zinc-500 transition-colors'>
                        <Link to="/" className={selectedLink === 'home' ? 'selected' : ''} onClick={() => handleLinkClick('home')}>
                            Home
                        </Link>
                    </li>
                    <li className='hover:text-zinc-500 transition-colors'>
                        <Link to="/about" className={selectedLink === 'about' ? 'selected' : ''} onClick={() => handleLinkClick('about')}>
                            About
                        </Link>
                    </li>
                    <li className='hover:text-zinc-500 transition-colors'>
                        <Link to="/complaints" className={`flex flex-row items-center ${selectedLink === 'complaints' ? 'selected' : ''}`} onClick={() => handleLinkClick('complaints')}>
                            My&nbsp;Complaints&nbsp;<img src={arrowDown} className='h-[24px] w-[24px] arrowDown mt-2 '/>
                        </Link>
                    </li>
                    <li className='hover:text-zinc-500 transition-colors'>
                        <Link to="/submit-complaint" className={selectedLink === 'submit-complaint' ? 'selected' : ''} onClick={() => handleLinkClick('submit-complaint')}>
                            Submit&nbsp;Complaint
                        </Link>
                    </li>
                    <li className='hover:text-zinc-500 transition-colors'>
                        <div className={`absolute -mt-3 cursor-pointer`} onClick={() => {
                            handleLinkClick('notifications');
                            setInbox((prev) => !prev)}}>
                            <div className={`w-[7px] h-[7px] rounded-full absolute top-[1px] right-[4px] bg-[#800000]`}></div>
                            <img src={Bell} alt="notification bell" className='h-[24px] w-[24px]' />
                        </div>
                    </li>
                    <li className='flex flex-row items-center hover:text-zinc-500 transition-colors'>
                        <div className="bg-[#D9D9D9] w-[2px] h-[40px] mr-5"></div>
                        <Link to="/profile" className={`flex flex-row items-center dark:text-[#d9d9d9c7] ${selectedLink === 'profile' ? 'selected' : ''}`} onClick={() => handleLinkClick('profile')}>
                            <img src={profile} alt="profile" height={34} width={34} />
                            <div className='ml-4'>
                                42112024
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
