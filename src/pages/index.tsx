import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HopeProps {
  product: {
    priceid: string
    amount: number
  }
}

export default function Home({ product }: HopeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceid} />
        </section>
        <img src='/images/avatar.svg' alt='Girl Coding' />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const STRIPE_PRICE_ID = 'price_1IcCnWGBbbW9tdT7u0veuH2I'
  const price = await stripe.prices.retrieve(STRIPE_PRICE_ID)

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
  }
}
