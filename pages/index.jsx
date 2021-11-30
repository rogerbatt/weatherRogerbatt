import Head from 'next/head'
import CardWeather from './cardWeather/cardWeather'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-purple-100 to-yellow-100">
      <Head>
        <title>Weather time - Rogerbatt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardWeather/>
    </div>
  )
}




