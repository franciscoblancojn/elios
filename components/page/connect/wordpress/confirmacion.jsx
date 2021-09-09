import Link from 'next/link'

import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import Host from "@/components/msg/host";

const Confirmacion = ({lang,type="wordpress"}) => {
    return (
        <Content 
        lang={lang}
        title="connectWordpress"
        className="connect wordpress cMenu"
        >
            <CardSimple>
                <h2>
                    {lang.connect[type].title1}
                    <br/>
                    {lang.connect[type].title2}
                </h2>
                <Points
                s={4}
                n={5}
                c={lang.connect.wordpress.list}
                u={["/connect/wordpress","/connect/wordpress/install","/connect/wordpress/active","/connect/wordpress/add-key","/connect/wordpress/confirmacion"]}
                l={true}
                r={true}
                />
                <h2>
                    {lang.connect.wordpress.confirmacion.title}
                </h2>
                <Host></Host>
                <div className="text-center">
                    <Link href="/">
                        <a className="btn">{lang.connect.wordpress.confirmacion.btn}</a>
                    </Link>
                </div>
            </CardSimple>
        </Content>
    )
}
export default Confirmacion