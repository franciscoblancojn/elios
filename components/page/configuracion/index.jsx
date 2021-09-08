import Content from "@/components/content";
import Card from "@/components/card/card";
import MsgTop from "@/components/msg/top";

import SvgUser from "@/components/svg/user";
import SvgInfo from "@/components/svg/info";

const Configuracion = ({lang}) => {
    return (
        <Content 
        lang={lang}
        title={lang.configuraciones.title}
        className="cMenu page-configuracion"
        >
            <div className="content-info-page">
                <h1>
                    {lang.configuraciones.subtitle}
                </h1>
                <div className="row">
                    {
                        lang.configuraciones.config.map((e)=>(
                            <Card
                            key={e.id}
                            title={e.title}
                            icon={<SvgUser/>}
                            link={`/configuracion/${e.id}`}
                            >
                                {e.text}
                            </Card>))
                    }
                </div>
            </div>
        </Content>
    )
}
export default Configuracion