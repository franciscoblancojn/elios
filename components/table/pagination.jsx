import React,{ useState } from "react"

const Pagination = ({page,pageT,changePage,nItems,changeNItems}) => {
    const [newPage,setNewPage] = useState(page)
    const [newNItems,setNewNItems] = useState(nItems)

    const onNext = () => {
        if (page < pageT) {
            page++
            changePage(page)
            setNewPage(page)
        }
    }
    const onPrev = () => {
        if(page > 0){
            page--
            changePage(page)
            setNewPage(page)
        }
    }
    const onInit = () => {
        if(page != 0){
            page = 0
            changePage(page)
            setNewPage(page)
        }
    }
    const onEnd = () => {
        if(page != pageT){
            page = pageT
            changePage(page)
            setNewPage(page)
        }
    }
    const changeNpage = (e) => {
        setNewPage(parseInt(e.target.value) -1 )
    }
    const changeNumItems = (e) => {
        const value = parseInt(e.target.value)
        setNewPage(0)
        setNewNItems(value)
        changeNItems(value)

    }
    const irPage = () => {
        if(page != newPage){
            changePage(newPage)
        }
    }
    return (
        <div className="pagination">
            <div className="Npage pages">
                <input type="number" value={newNItems} className="nItems npage" onChange={changeNumItems} />
            </div>
            <div className="pages">
                <div className="ir b" onClick={irPage}>Ir</div>
                Paginas
                <input type="number" min="1" value={newPage + 1} max={pageT + 1} className="npage" onChange={changeNpage} />
                - {pageT + 1}
            </div>
            <div className="init b" onClick={onInit} disabled={page==0}>init</div>
            <div className="prev b" onClick={onPrev} disabled={page==pageT}>prev</div>
            <div className="next b" onClick={onNext} disabled={page==0}>next</div>
            <div className="end b" onClick={onEnd} disabled={page==pageT}>end</div>
        </div>
    )
}

export default Pagination