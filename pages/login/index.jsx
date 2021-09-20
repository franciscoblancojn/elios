import IsNotlogin from "@/components/checkLogin/isNotLogin";
import Lang from "@/components/lang/lang";

import Page from "@/components/page/login";

const Login = () => {
    return (
        <IsNotlogin>
            <Lang>
                <Page/>
            </Lang>
        </IsNotlogin>
    )
}
export default Login