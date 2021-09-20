const Sort = ({item,lang,sort,setSort=console.log}) => {
    return <div className="sort">
        {lang.table[item.id]}
        <div className="arrows">
            <span id={`${item.id}-up`} className={`arrow up ${sort[item.id] == 1 ? "active":""}`} onClick={()=>{setSort({[item.id]:1})}}></span>
            <span id={`${item.id}-dowm`} className={`arrow dowm ${sort[item.id] == -1 ? "active":""}`} onClick={()=>{setSort({[item.id]:-1})}}></span>
        </div>
    </div>
}
export default Sort