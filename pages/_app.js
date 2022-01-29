/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black text-white">
      <nav className="border-b p-6 bg-black">
        <p className="text-4xl font-bold text-white">PolyPlace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500 hover:text-sky-400">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500 hover:text-sky-400">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500 hover:text-sky-400">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500 hover:text-sky-400">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp