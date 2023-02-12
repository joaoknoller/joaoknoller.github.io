import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contato</h2>
      <div className='section__links'>
        <a
          href={`mailto:${contact.email}`}
          target="_blank"
          rel="noreferrer"
        >
          <span type='button' className='btn btn--outline'>
            Email
          </span>
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <span type='button' className='btn btn--outline'>
            LinkedIn
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
