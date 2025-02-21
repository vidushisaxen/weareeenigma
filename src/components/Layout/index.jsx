// import { Cursor } from "../Cursor";
import Header from "../Header";
import { Media, MediaContextProvider } from "@/lib/media";
import Footer from "../Footer";
import { ReactLenis } from "lenis/react";
import { Cursor } from "../Cursor";
import { ImageObjectJsonLd, NavigationListJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";;

const Layout = ({ children }) => {
    return (
        <>
         {/* <Cursor isGelly={true} cursorSize={15.0} magneticAnimationDuration={0.5} animationDuration={1.0}/> */}
         <OrganizationJsonLd />
      <WebsiteJsonLd />
      <NavigationListJsonLd />
      <ImageObjectJsonLd />
        <ReactLenis root option={{lerp:0.5}}>
            <Header />
            <MediaContextProvider>
            <main>
                {children}
            </main>
            </MediaContextProvider>
            <Footer />
        </ReactLenis>
            
        </>
    )
}

export default Layout;