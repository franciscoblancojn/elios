import Content from "@/components/content";
import Headers from "@/components/header/single";

const Politicas = ({lang}) => {
    return (
        <Content 
        lang={lang}
        title={lang.policy.title}
        className="privacy-policy"
        >
            <Headers></Headers>
            <div className="contentInfo">
                <h1>
                    {lang.policy.title}
                </h1>
                <p>
                    {lang.policy.text}
                </p>
            </div>
        </Content>
    )
}
export default Politicas