import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout