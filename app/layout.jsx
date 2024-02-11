
"use client"

import axios from "axios"
import Navbar from "../component/header/navbar"
import { Provider } from "react-redux"
import { store } from "../redux/store"
// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   // const id = 9
//   // console.log(id);
//   // fetch data
//   // const product = await axios.get(`/${id}`).then((res) => res.data)

//   // optionally access and extend (rather than replace) parent metadata

//   return {
//     title: "Ganpati Technology",



//     openGraph: {
//       images: 'https://www.mypustak.com/_next/image?url=https%3A%2F%2Fd239pyg5al708u.cloudfront.net%2Fuploads%2Fhomebanner%2FHOME_1_1_82&w=1920&q=75',
//     },

//   }
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>

          <div>
            <Navbar />
            {children}

          </div>
        </Provider>

      </body>
    </html>
  )
}