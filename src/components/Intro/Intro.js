import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { intro } from '../../portfolio'
import './Intro.css'

const Intro = () => {
  const { name, role, description, resume, social } = intro

  return (
    <div className='intro center'>
      {name && (
        <h1>
          Sou o <span className='intro__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='intro__role'>{role}.</h2>}
      <p className='intro__desc'>{description && description}</p>

      <div className='intro__contact center'>
        {resume && (
          <a
            href={resume}
            download
          >
            <span type='button' className='btn btn--outline'>
              Currículo
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Intro
