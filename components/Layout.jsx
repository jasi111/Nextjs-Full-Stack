import Navbar from "./Navbar"

function Layout({ children }) {
    // children means somebody can pass one component or as many component
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout