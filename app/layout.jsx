
import axios from "axios"

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = 6
  // console.log(id);
  // fetch data
  const product = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.data)

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: product.name,

  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}