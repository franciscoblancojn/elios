import Islogin from "@/components/checkLogin/isLogin";
import Lang from "@/components/lang/lang";
import Page from "@/components/page/404"

const Page404 = () => {
    return (
        <Islogin>
            <Lang>
                <Page/>
            </Lang>
        </Islogin>
    )
}
export default Page404