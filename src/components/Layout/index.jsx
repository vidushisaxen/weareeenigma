// import { Cursor } from "../Cursor";
import Header from "../Header";
import { Media, MediaContextProvider } from "@/lib/media";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <MediaContextProvider>
            <main>
                {children}
            </main>
            </MediaContextProvider>
            <Footer />
            
        </>
    )
}

export default Layout;