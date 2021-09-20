import Islogin from "@/components/checkLogin/isLogin";
import Lang from "@/components/lang/lang";
import Page from "@/components/page/connect/wordpress/confirmacion";

const Index = () => {
    return (
        <Islogin>
            <Lang>
                <Page/>
            </Lang>
        </Islogin>
    )
}
export default Index