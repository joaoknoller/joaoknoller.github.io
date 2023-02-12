import { about } from '../../portfolio'
import './About.css'

const { description } = about;

const Contact = () => {
  if (!description) return null

  return (
    <section className='section about center' id='about'>
      <h2 className='section__title'>Sobre</h2>
      <p className='about__desc'>{description && description}</p>
    </section>
  )
}

export default Contact
