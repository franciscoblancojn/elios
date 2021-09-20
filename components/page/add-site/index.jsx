import Content from "@/components/content";
import TitelIcon from "@/components/title/titleIcon";
import ListIntegracion from "@/components/list/integracion";

const AddSite = ({lang}) => {
    return (
        <Content 
        lang={lang}
        title="AddSite"
        className="cMenu home"
        >
            <TitelIcon
            title={lang.addSite.title}
            subtitle={(
                <>
                    {lang.addSite.text1}
                    <br/>
                    {lang.addSite.text2}
                </>
            )}
            icon={(<img src="/img/elios.png" alt="Elios" />)}
            />
            <ListIntegracion
            title={lang.addSite.titleList}
            btn={lang.addSite.btn}
            />
        </Content>
    )
}
export default AddSite