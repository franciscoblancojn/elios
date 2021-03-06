import Link from 'next/link'

import Content from "@/components/content";
import CardSimple from "@/components/card/simple";
import Points from "@/components/points";

import ListNumber from "@/components/list/listNumber";
import Key from "@/components/msg/key";

const AddKey = ({lang,type="wordpress"}) => {
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
                s={3}
                n={5}
                c={lang.connect.wordpress.list}
                u={["/connect/wordpress","/connect/wordpress/install","/connect/wordpress/active","/connect/wordpress/add-key","/connect/wordpress/confirmacion"]}
                l={true}
                r={true}
                />
                <Key text={lang.connect.wordpress.addkey.key}></Key>
                <br/>
                <img src="/img/add-key.png" alt="add-key" className="radius"/>
                <ListNumber list={lang.connect.wordpress.addkey.list}></ListNumber>
                <div className="text-center">
                    <Link href={`/connect/${type}/confirmacion`}>
                        <a className="btn">{lang.connect.wordpress.btn}</a>
                    </Link>
                </div>
            </CardSimple>
        </Content>
    )
}
export default AddKey