import React, { Component } from "react"
import Link from 'next/link'
import Head from 'next/head'

// import Icon from "@/components/icon";
import Footer from "@/components/footer";
import MenuSingle from "@/components/header/single";

class Page404 extends React.Component {
    render() {
        return (
            <div className="page404">
                <Head>
                    <title>404</title>
                    <link rel="stylesheet" href="https://use.typekit.net/kqm1fcv.css"></link>
                </Head>
                <MenuSingle/>
                <div className="content404">
                    <div className="icon">
                        {/* <Icon></Icon> */}
                    </div>
                    <svg viewBox="0 0 598 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.429 165.366H100.017V203.527C100.068 205.037 100.69 206.471 101.758 207.54C102.827 208.608 104.261 209.23 105.771 209.281H130.909C132.419 209.231 133.854 208.608 134.922 207.54C135.991 206.472 136.613 205.037 136.664 203.527L136.364 164.76H160.593C161.349 164.76 162.097 164.612 162.795 164.323C163.494 164.034 164.128 163.61 164.663 163.076C165.197 162.541 165.621 161.907 165.91 161.208C166.199 160.51 166.347 159.762 166.347 159.006V140.228C166.341 139.488 166.186 138.757 165.891 138.078C165.596 137.399 165.167 136.787 164.63 136.278C164.093 135.769 163.458 135.373 162.765 135.115C162.071 134.857 161.332 134.742 160.593 134.776H136.364V5.754C136.364 4.99826 136.216 4.24986 135.927 3.55157C135.638 2.85329 135.214 2.2188 134.68 1.68442C134.145 1.15003 133.511 0.726219 132.812 0.437193C132.114 0.148167 131.366 -0.000396161 130.61 -1.82883e-06H114.255C113.415 -0.0137898 112.581 0.139763 111.801 0.451719C111.021 0.763676 110.311 1.2278 109.712 1.817L0.674988 134.473V159.613C0.674725 160.369 0.823388 161.117 1.11247 161.815C1.40156 162.513 1.8254 163.148 2.35977 163.682C2.89415 164.216 3.52859 164.64 4.22681 164.929C4.92503 165.218 5.67335 165.366 6.429 165.366ZM40.653 133.866L101.227 61.178V133.866H40.653ZM301.726 212.313C350.185 212.313 378.049 172.637 378.049 106.313C378.049 39.989 350.185 0.312986 301.726 0.312986C253.267 0.312986 225.403 39.989 225.403 106.313C225.403 172.637 253.267 212.313 301.726 212.313ZM301.726 176.575C278.405 176.575 265.079 151.437 265.079 106.31C265.079 61.486 278.405 36.045 301.726 36.045C325.047 36.045 338.373 61.486 338.373 106.31C338.373 151.434 325.047 176.572 301.726 176.572V176.575ZM437.411 165.366H530.997V203.527C531.048 205.037 531.67 206.471 532.738 207.54C533.807 208.608 535.241 209.23 536.751 209.281H561.889C563.399 209.231 564.834 208.608 565.902 207.54C566.971 206.472 567.593 205.037 567.644 203.527L567.344 164.76H591.573C592.329 164.76 593.077 164.612 593.775 164.323C594.474 164.034 595.108 163.61 595.643 163.076C596.177 162.541 596.601 161.907 596.89 161.208C597.179 160.51 597.327 159.762 597.327 159.006V140.228C597.321 139.488 597.166 138.757 596.871 138.078C596.576 137.399 596.147 136.787 595.61 136.278C595.073 135.769 594.438 135.373 593.745 135.115C593.051 134.857 592.312 134.742 591.573 134.776H567.341V5.754C567.341 4.99826 567.193 4.24986 566.904 3.55157C566.615 2.85329 566.191 2.2188 565.657 1.68442C565.122 1.15003 564.488 0.726219 563.789 0.437193C563.091 0.148167 562.343 -0.000396161 561.587 -1.82883e-06H545.232C544.392 -0.0137898 543.558 0.139763 542.778 0.451719C541.998 0.763676 541.288 1.2278 540.689 1.817L431.656 134.473V159.613C431.656 160.369 431.804 161.117 432.094 161.815C432.383 162.514 432.807 163.148 433.341 163.682C433.876 164.217 434.51 164.64 435.208 164.929C435.907 165.218 436.655 165.367 437.411 165.366ZM471.635 133.866L532.209 61.178V133.866H471.635Z" fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="299.001" y1="-0.000854492" x2="299.001" y2="212.313" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--baby-blue-two)"/>
                                <stop offset="1" stopColor="var(--pastel-blue)"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className="p">
                        Lo sentimos la pagina que buscabas
                        no puedo ser encontrada
                    </p>
                    <Link href="/">
                        <a className="btn">VOLVER AL INICIO</a>
                    </Link>
                    <span className="text">
                    Powered by <strong>AI</strong>
                    </span>
                </div>
                <div className="contentFooter">
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
export default Page404