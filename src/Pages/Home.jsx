import About from '../components/Home/About'
import Banner from '../components/Home/Banner'
import CaseStudies from '../components/Home/CaseStudies'
import Certification from '../components/Home/Certification'
import Contact from '../components/Home/Contact'
import Experience from '../components/Home/Experience'
import Services from '../components/Home/Services'
import Skills from '../components/Home/Skills'

const Home = () => {

  return (
    <div className=''>
      <Banner />
      <About />
      <Services />
      <Experience />
      <CaseStudies/>
      <Skills/>
      <Certification />
      <Contact />

    </div>
  )
}

export default Home