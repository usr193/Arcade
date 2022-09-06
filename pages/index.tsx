import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='w-5/6 flex justify-center m-10'>
      <Head>
        <title className='p'>Arcade Coding Challenge</title>
        <meta name='description' content='Build something amazing with us' />
        <link
          rel='shortcut icon'
          type='image/png'
          href='https://cdn.arcade.software/images/button-logo-128.png'
        />
      </Head>

      <main className='text-base'>
        <h1>Welcome to the Arcade Coding Challenge!</h1>

        <div className='grid grid-cols-2 gap-4'>
          <a
            href='https://github.com/ArcadeHQ/coding-challenge/blob/main/README.md'
            className='card'
          >
            <h2>Documentation &rarr;</h2>
            <p>
              Get started by reading the <code>README.md</code>
            </p>
          </a>

          <a href='https://nextjs.org/learn' className='card'>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className='card'
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='card'
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
