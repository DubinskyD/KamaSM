import React, { useState } from 'react';
import styles from './paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {

   let pagesCount = Math.ceil(totalItemsCount / pageSize);

   const [portionNumber, setPortionNumber] = useState(1);
   let portionCount = totalItemsCount / portionSize;
   let leftPortionPageNumber = (portionSize * portionNumber) - portionSize + 1;
   let rightPortionPageNumber = portionSize * portionNumber;

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div className={styles.countWrapper}>
         {portionNumber > 1 &&
            <button onClick={(e) => { onPageChanged(rightPortionPageNumber); setPortionNumber(portionNumber - 1) }} >Prev</button>
         }

         {
            pages
               .filter(p => { return leftPortionPageNumber <= p && p <= rightPortionPageNumber })
               .map((p) => {
                  return <span
                     key={p}
                     className={currentPage === p && styles.selectedPage}
                     onClick={(e) => { onPageChanged(p) }}>{p}</span>

               })
         }

         {
            portionCount > portionNumber &&
            <button onClick={(e) => { onPageChanged(leftPortionPageNumber); setPortionNumber(portionNumber + 1); }} >Next</button>
         }
      </div >
   )
}
export default Paginator;