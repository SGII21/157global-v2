import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <Outlet />
    </div>
  )
}
