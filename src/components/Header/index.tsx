import { ActiveLink } from '../ActiveLink'

import { SinginButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ig.news' />
        <nav>
          <ActiveLink activeClassname={styles.active} href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassname={styles.active} href='/posts' prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SinginButton />
      </div>
    </header>
  )
}
