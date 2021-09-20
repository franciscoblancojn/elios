const Img = ({src,alt}) => {
    return <img src={src} alt={alt}  onError={(e)=>{e.target.hidden=true}}/>
}
export default Img