import Footer from "@/PageComponent/Footer";
import { LayoutProps } from "@/utils/type-pagecomponent";

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;