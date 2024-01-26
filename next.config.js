/** @type {import('next').NextConfig} */
const nextConfig = {
    // which domen allow to get the image and display in website
    images: {
        domains: ["rukminim2.flixcart.com"]
    },
    // below code use for redirection 
    redirects: async () => {
        return [
            {
                source: "/working", // kis url se redirect karna hai 
                destination: "/", // kaha  par redirect karna hai
                permanent: false, // true tab hoga jab page hamesha ke liye delete ho  gaya ho
            }, {
                source: "/user",
                destination: "/",
                permanent: false,
            }, {
                source: "/product/:id", // for dynamic page 
                destination: "/",
                permanent: false,
            }
        ]
    }


}

module.exports = nextConfig
