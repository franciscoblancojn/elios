import Link from 'next/link'

import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import SvgInfo from "@/components/svg/info";

const Index = ({lang}) => {
    return (
        <Content 
        lang={lang}
        title="connectWordpress"
        className="connect wordpress cMenu"
        >
            <CardSimple>
                <h2>
                    {lang.connect.wordpress.title1}
                    <br/>
                    {lang.connect.wordpress.title2}
                </h2>
                <Points
                s={0}
                n={5}
                c={lang.connect.wordpress.list}
                u={["/connect/wordpress","/connect/wordpress/install","/connect/wordpress/active","/connect/wordpress/add-key","/connect/wordpress/confirmacion"]}
                l={true}
                r={true}
                />
                <p>
                    <strong>{lang.connect.wordpress.index.subtitle}</strong>
                    {lang.connect.wordpress.index.text1}
                    <br/>
                    {lang.connect.wordpress.index.text2}
                </p>
                <div className="info">
                    <SvgInfo/>
                    {lang.connect.wordpress.index.msj}
                </div>
                <div className="text-center">
                    <a 
                    className="btn"
                    href="https://gitlab.com/eliosapp/plugin-wordpress/-/archive/master/plugin-wordpress-master.zip"
                    target="blanck"
                    >{lang.connect.wordpress.index.btn1}</a>
                </div>
                <br/>
                <div className="text-center">
                    <Link href="/connect/wordpress/install">
                        <a className="btn">{lang.connect.wordpress.index.btn2}</a>
                    </Link>
                </div>
            </CardSimple>
        </Content>
    )
}
export default Index