import Link from 'next/link'

import Pagination from "@/components/table/pagination"
import Filter from "@/components/table/filter"
import Item from "@/components/table/item"

import {printValue,TableRow,printFilter} from "@/components/functions"

import SvgView from "../svg/view"
import SvgReload from "../svg/reload"

const Table = ({rows,countItems,keys}) => {
    return  (
        <div className="content-table">
            <div className="top-table">
                <Pagination/>
            </div>
            <div className="overflow">
                <table className="table-h">
                    <thead className="filters">
                        <tr >
                            <th>
                                <button className="btn clear">
                                    <SvgReload></SvgReload>
                                </button>
                            </th>
                            {
                                keys.map((key,i)=>(
                                    <th key={i} id={key.id} order="none">
                                        <Filter filter={key}/>
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
                                        {key.name}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((element,i)=>(
                                <tr key={i} ip={element._id}>
                                    <td className="view">
                                        <Link href={`/leads/${element._id}`}>
                                            <a>
                                                <SvgView></SvgView>
                                            </a>
                                        </Link>
                                    </td>
                                    {
                                        keys.map((key,j)=>{
                                            return (
                                                <td key={`${i}-${j}`}>
                                                    <Item item={element[key.id]} type={key.type}/>
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