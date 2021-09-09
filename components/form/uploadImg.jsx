import { useState, useEffect } from "react"

const UploadImg = ({img}) => {
    const changeImg = (e) => {
        const btn = document.getElementById('submitAddImg')
        btn.click()
    }
    return (
        <div className="addImg">
            <form action={`https://pixeltracking.startscoinc.com/site/upload?return=${window.location.href}`} method="post" encType="multipart/form-data">
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