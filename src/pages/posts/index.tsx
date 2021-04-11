import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de Março de 3389</time>
            <strong>Titulo lindão de um post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel
              debitis provident nemo, facilis perspiciatis dolorem quisqua
            </p>
          </a>
          <a href='#'>
            <time>12 de Março de 3389</time>
            <strong>Titulo lindão de um post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel
              debitis provident nemo, facilis perspiciatis dolorem quisqua
            </p>
          </a>
          <a href='#'>
            <time>12 de Março de 3389</time>
            <strong>Titulo lindão de um post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel
              debitis provident nemo, facilis perspiciatis dolorem quisqua
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
