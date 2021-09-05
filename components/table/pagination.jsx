import React,{ useState } from "react"

const Pagination = ({page,setNpage,npage,setPage,countItems}) => {
    const pageT = Math.ceil(countItems / npage)
    const onNext = () => {
        if (page < pageT) {
            page++
            setPage(page)
        }
    }
    const onPrev = () => {
        if(page > 1){
            page--
            setPage(page)
        }
    }
    const onInit = () => {
        if(page != 1){
            page = 1
            setPage(page)
        }
    }
    const onEnd = () => {
        if(page != pageT){
            page = pageT
            setPage(page)
        }
    }
    const changeNpage = (e) => {
        setNpage(parseInt(e.target.value))
        setPage(1)
    }
    const changePage = (e) => {
        setPage(parseInt(e.target.value))
    }
    return (
        <div className="pagination">
            <div className="Npage pages">
                Items
                <input type="number" value={npage} className="nItems npage" onChange={changeNpage} />
            </div>
            <div className="pages">
                Paginas
                <input type="number" min="1" value={page} max={pageT} className="npage" onChange={changePage} />
                - {pageT}
            </div>
            <div className="init b" onClick={onInit} disabled={page==0}>init</div>
            <div className="prev b" onClick={onPrev} disabled={page==pageT}>prev</div>
            <div className="next b" onClick={onNext} disabled={page==0}>next</div>
            <div className="end b" onClick={onEnd} disabled={page==pageT}>end</div>
        </div>
    )
}

export default Pagination