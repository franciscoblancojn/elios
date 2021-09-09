import {getCookie} from "@/functions/index";

const UploadImg = ({img,site}) => {
    const changeImg = (e) => {
        const btn = document.getElementById('submitAddImg')
        btn.click()
    }
    return (
        <div className="addImg">
            <form action="http://localhost:3001/api/v2/upload" method="post" encType="multipart/form-data">
                <input type="hidden" name="jwt" id="jwt" value={JSON.parse(getCookie()).token} />
                <input type="hidden" name="site" id="site" value={site} />
                <input type="hidden" name="return" id="return" value={window.location.href} />
                <label htmlFor="addImg">
                    {
                        img ?
                        <img src={img}/>
                        :
                        <img src="/icons/addImgSite.svg"/>
                    }
                    <input id="addImg" type="file" accept="image/*" name="photo" onChangeCapture={changeImg}/>
                </label>
                <input type="submit" value="upload" id="submitAddImg" />
            </form>
        </div>
    )
}
export default UploadImg