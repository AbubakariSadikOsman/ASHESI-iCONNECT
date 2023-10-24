import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { About, Home, Complaints, EditComplaint, Notifications, Profile, SubmitComplaint} from './pages'
import Header from './components/header/Header'
import SideBar from './components/sidebar/SideBar'

const App = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [inbox, setInbox] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeQuery.addEventListener('change', handleDarkModeChange);
    setIsDarkMode(darkModeQuery.matches); // Set initial value

    return () => {
      darkModeQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-[#2D2D2D] dark:text-[#fff]">
        <Header selectedLink={selectedLink} setSelectedLink={setSelectedLink} inbox={inbox} setInbox={setInbox} />
        <div className='flex flex-row' onClick={()=>setInbox(false)}>
          <SideBar />
          <div className="ml-[340px] mt-[6rem] mb-10">
            {inbox ? <Notifications setInbox={setInbox} /> : null}
            <Routes>
              <Route path='/' element={<Home setSelectedLink = {setSelectedLink} />} />
              <Route path='/about' element={<About />} />
              <Route path='/complaints' element={<Complaints />} />
              <Route path='/edit-complaint' element={<EditComplaint />} />
              <Route path='/submit-complaint' element={<SubmitComplaint isDarkMode={isDarkMode} />} />
              <Route path='/notifications' element={<Notifications />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
