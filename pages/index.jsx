import Head from 'next/head'
import CardWeather from './cardWeather/cardWeather'

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <Head>
        <title>Weather time - Rogerbatt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardWeather/>
    </div>
  )
}




