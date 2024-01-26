
import axios from "axios"
import Navbar from "../component/header/navbar"

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = 9
  // console.log(id);
  // fetch data
  // const product = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.data)

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: "Ganpati Technology"

  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>

      <body>
        <div>
          <Navbar />
          {children}

        </div>
      </body>
    </html>
  )
}