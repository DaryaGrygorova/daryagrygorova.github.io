import React, { useState } from 'react';
import styles from './paginator.module.css';

function Paginator(props) {
  const pageCount = Math.ceil(props.totalItemsCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const portionSize = props.portionSize ?? 10;
  const portionCount = Math.ceil(props.totalItemsCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.wrapper}>
      {portionNumber > 2 && (
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            setPortionNumber(1);
          }}
        >
          &lt; &lt; Start
        </button>
      )}
      {portionNumber > 1 && (
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          &lt; &lt;
        </button>
      )}
      <ul className={styles.pageNumbList}>
        {pages
          .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map(page => {
            return (
              <li className={styles.pageNumb}>
                <span
                  onClick={() => {
                    props.onPageChanged(page);
                  }}
                  className={props.CurrentPage === page ? styles.selected : ''}
                >
                  {page}
                </span>
              </li>
            );
          })}
      </ul>
      {portionCount > portionNumber && (
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          &gt; &gt;
        </button>
      )}
    </div>
  );
}

export default Paginator;
