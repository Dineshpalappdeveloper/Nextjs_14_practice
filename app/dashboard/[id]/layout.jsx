

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id
    // const id = 8
    console.log(id);
    // fetch data
    const product = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata

    return {
        title: product.name,

    }
}

export default function Layout({ children }) {
    return (
        <h1>
            {children}
        </h1>
    )
}