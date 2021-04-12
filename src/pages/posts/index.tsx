import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  )

  return {
    props: {},
  }
}
