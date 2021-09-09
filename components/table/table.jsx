import { useState, useEffect } from "react"
import Link from 'next/link'

import Pagination from "@/components/table/pagination"
import Filter from "@/components/table/filter"
import Item from "@/components/table/item"

import SvgView from "../svg/view"
import SvgReload from "../svg/reload"

const Table = ({rows=[],countItems,keys,page,setNpage,npage,setPage,setFilter,url="",selects={},lang}) => {
    const [styleOverflow, setStyleOverflow] = useState({})
    const getOffsetTop = ( elem ) => {
        var offsetTop = 0;
        while(elem){
            offsetTop += elem.offsetTop
            elem = elem.parentElement
        }
        return offsetTop;
    }
    useEffect(() => {
        const tbody = document.querySelector('.tbody')
        const maxHeight = window.outerHeight - getOffsetTop(tbody) + 120
        setStyleOverflow({maxHeight})
    }, [])
    return  (
        rows.length == 0 ?
        <div className="content-table">
            <h1>
                {lang.table.no_items}
            </h1>
        </div>
        :
        <div className="content-table">
            <div className="top-table">
                <Pagination page={page} setPage={setPage} npage={npage} setNpage={setNpage} countItems={countItems} lang={lang}/>
            </div>
            <div className="overflow" >
                <table className="table-h">
                    <thead className="filters">
                        <tr >
                            <th>
                                <button className="btn clear" onClick={()=>setFilter({})}>
                                    <SvgReload></SvgReload>
                                </button>
                            </th>
                            {
                                keys.map((key,i)=>(
                                    <th key={i} id={key.id} order="none">
                                        <Filter filter={key} setFilter={setFilter} selects={selects[key.id]} lang={lang}/>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th></th>
                            {
                                keys.map((key,i)=>(
                                    <th key={i} id={key.id} order="none">
                                        {lang.table[key.id]}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="tbody overflow-auto" style={styleOverflow}>
                        {
                            rows.map((element,i)=>(
                                <tr key={i} ip={element._id}>
                                    <td className="view">
                                        <Link href={`/${url}/${element._id}`}>
                                            <a>
                                                <SvgView></SvgView>
                                            </a>
                                        </Link>
                                    </td>
                                    {
                                        keys.map((key,j)=>{
                                            return (
                                                <td key={`${i}-${j}`}>
                                                    <Item item={element[key.id]} type={key.type} image={key.image} lang={lang}/>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table