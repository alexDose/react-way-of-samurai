import {FC, useState} from "react";
import s from "../../Users/Users.module.css";

type PaginatorType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (value: number) => void
    portionSize: number
}

export const Paginator: FC<PaginatorType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        {portionNumber > 1 && <button onClick={() => {setPortionNumber((portionNumber - 1))}}>PREV</button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p} onClick={(e) => {onPageChanged(p)}} className={currentPage === p ? `${s.select} ${s.pageNumber}` : s.pageNumber}>{p}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
}