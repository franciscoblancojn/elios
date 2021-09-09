import {getCookie} from "@/functions/index";

const UploadImg = ({img,site}) => {
    const changeImg = (e) => {
        const btn = document.getElementById('submitAddImg')
        const img = document.getElementById('addImg')
        const src = img.value
        if(src.endsWith("png") || src.endsWith("jpeg") || src.endsWith("jpg")){
            btn.click()
        }else{
            alert("Archivo Invalido")
        }
    }
    return (
        <div className="addImg">
            <form action={`https://pixeltracking.startscoinc.com/api/v2/upload`} method="post" encType="multipart/form-data">
                <input type="text" name="jwt" id="jwt" value={JSON.parse(getCookie()).token} />
                <input type="text" name="site" id="site" value={site} />
                <input type="text" name="return" id="return" value={window.location.href} />
                <label htmlFor="addImg">
                    {
                        img ?
                        <img src={`https://pixeltracking.startscoinc.com/upload/img/sites/${img}`} alt={site} />
                        :
                        <img src="/icons/addImgSite.svg"/>
                    }
                    <input id="addImg" type="file" accept="image/png, image/jpeg, image/jpg" name="photo" onChangeCapture={changeImg}/>
                </label>
                <input type="submit" value="upload" id="submitAddImg" />
            </form>
        </div>
    )
}
export default UploadImg