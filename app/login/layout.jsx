
// export const getSeoData = async () => {
//   let id = useParams()

//   const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//   return data.data
// }
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}