import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#E3E3DF' }}>
      <Header />
      <main style={{ flex: 1, backgroundColor: '#E3E3DF' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
