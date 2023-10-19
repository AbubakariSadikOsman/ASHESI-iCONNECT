import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Complaints, EditComplaint, Notifications, Profile, Login, SubmitComplaint} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/complaints' element={<Complaints />} />
        <Route path='/edit-complaint' element={<EditComplaint />} />
        <Route path='/submit-complaint' element={<SubmitComplaint />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
