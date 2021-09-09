import Link from 'next/link'

import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import ListNumber from "@/components/list/listNumber";

const Install = ({lang,type="wordpress"}) => {
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
                s={1}
                n={5}
                c={lang.connect.wordpress.list}
                u={["/connect/wordpress","/connect/wordpress/install","/connect/wordpress/active","/connect/wordpress/add-key","/connect/wordpress/confirmacion"]}
                l={true}
                r={true}
                />
                <img src="/img/install1.png" alt="install" className="radius"/>
                <ListNumber list={lang.connect.wordpress.install.list}></ListNumber>
                <div className="text-center">
                    <Link href={`/connect/${type}/active`}>
                        <a className="btn">{lang.connect.wordpress.btn}</a>
                    </Link>
                </div>
            </CardSimple>
        </Content>
    )
}
export default Install