import Head from 'next/head'

import Footer from '@/components/footer'
import MenuLeft from "@/components/header/left";
import MenuDropDown from "@/components/header/dropDown";

const Content = ({className,children,footer,title,lang}) => {
    return (
        <div className="content">
            <Head>
                <title>{lang.titlePage[title] || title}</title>
                <link rel="stylesheet" href="https://use.typekit.net/kqm1fcv.css"></link>
            </Head>
            <div id="page" className={`page ${className || ""}`}>
                {
                    className.indexOf('cMenu') > -1 &&
                    <>
                        <MenuLeft/>
                        <MenuDropDown title={lang.titlePage[title] || title} lang={lang} />
                    </>
                }
                {
                    children
                }
                {
                    footer === undefined && <Footer></Footer>
                }
            </div>
        </div>
    )
}
export default Content