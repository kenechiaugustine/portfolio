import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a
        href={`mailto:${contact.email}?subject='Request for collaboration'&body='Hello Kene, Your resume is very enticing, and I would like to propose a collaboration with you on a project.'`}
      >
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
