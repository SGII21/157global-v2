import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Philosophy from './pages/Philosophy'
import Capabilities from './pages/Capabilities'
import Situations from './pages/Situations'
import Industries from './pages/Industries'
import LegalOperationalRealities from './pages/LegalOperationalRealities'
import RepresentativeWork from './pages/RepresentativeWork'
import Purpose from './pages/Purpose'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="situations" element={<Situations />} />
        <Route path="industries" element={<Industries />} />
        <Route
          path="legal-operational-realities"
          element={<LegalOperationalRealities />}
        />
        <Route path="representative-work" element={<RepresentativeWork />} />
        <Route path="purpose" element={<Purpose />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
