import SitesList from "@/components/sites/list";
import TitelIcon from "@/components/title/titleIcon";

const Index = ({lang}) => {
    return <>
        <TitelIcon
            title={lang.inicion.title}
            icon={(<img src="/img/elios.png" alt="Elios" />)}
        />
        <SitesList lang={lang}/>
    </>
}
export default Index