import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Philosophy from './pages/Philosophy'
import Situations from './pages/Situations'
import OperationalLegal from './pages/OperationalLegal'
import IndividualsInstitutions from './pages/IndividualsInstitutions'
import RepresentativeWork from './pages/RepresentativeWork'
import Founder from './pages/Founder'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="situations" element={<Situations />} />
        <Route path="operational-legal-reality" element={<OperationalLegal />} />
        <Route path="individuals-institutions" element={<IndividualsInstitutions />} />
        <Route path="representative-work" element={<RepresentativeWork />} />
        <Route path="founder" element={<Founder />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
