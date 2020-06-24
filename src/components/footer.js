import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter,  faGithub } from '@fortawesome/free-brands-svg-icons'
import Img from 'gatsby-image'

library.add(faTwitter, faGithub);

export default ({ data }) => (
    <footer>
      <div className={styles.footerContainer}>
        <div>
          <Link to="/">
            <h4>Anonymous Blog</h4>
          </Link>
        </div>
        <div className={styles.copyright}>
          <p>copyright anonymous system integrator all rights reserved.</p>
        </div >
        <div className={styles.icons}>
          <Link to="https://twitter.com/Sai_no_kawara">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </Link>
          <Link to="https://github.com/Watanabe-Ryo">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </Link>
        </div>
      </div>
    </footer>
)
