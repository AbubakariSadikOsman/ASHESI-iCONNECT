import logo from '../../assets/logo.png'
import logout from '../../assets/logout.png'
import departments from '../../assets/departments.png'
import activities from '../../assets/activity.png'
import feedback from '../../assets/feedback.png'
import settings from '../../assets/settings.png'
import darkMode from '../../assets/darkMode.png'
// import lightMode from '../../assets/lightMode.png'

const SideBar = () => {
  const sidebarLinks = [
    { id: 1, label: "Departments", img_path: departments, width: 20, height: 20, alt: "departments" },
    { id: 2, label: "Activities", img_path: activities, width: 20, height: 20, alt: "activities" },
    { id: 3, label: "Feedback", img_path: feedback, width: 20, height: 20, alt: "feedback" },
    { id: 4, label: "Settings", img_path: settings, width: 20, height: 20, alt: "settings" },
    { id: 5, label: "Dark Mode", img_path: darkMode, width: 20, height: 20, alt: "mode" },
    { id: 6, label: "Log out", img_path: logout, width: 18, height: 18, alt: "logout" }
];

  return (
    <div className="w-[220px] bg-white dark:bg-[#2D2D2D] pl-10 vr fixed left-0 mt-[4.36rem]">
      <img src={logo} alt="logo" height={150} width={140} className='py-8' />
      <div className="sidebar mt-2 text-zinc-500 dark:text-[#ffffffc2]">
        <ul>
          { sidebarLinks.map(
            link => 
              <li key={link.id} className='flex'>
                  <img src={link.img_path} alt={link.alt} width={link.width} height={link.height} />&nbsp;{link.label}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar
