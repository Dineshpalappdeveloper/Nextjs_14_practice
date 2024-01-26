
export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: "Dynamic Data"

    }
}

export default function Layout({ children }) {
    return (
        <div>
            {children}

        </div>
    )
}