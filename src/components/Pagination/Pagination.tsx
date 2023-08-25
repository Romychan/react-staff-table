import { useState, useMemo, useEffect, MouseEvent } from 'react';
import clsx from 'clsx';

import styles from './Pagination.module.scss';

interface IPaginationProps {
  /** Sets the current page */
  currentPage: number;
  /** The callback that will be called when the page changes */
  setCurrentPage: (page: number) => void;
  /** Sets total number of pages */
  totalCount: number;
  /** Sets the number of entries per page */
  pageSize?: number;
  /** Sets the range of pages to display. */
  pageRangeDisplayed?: number;
  /** Additional class for the component */
  className?: string;
}

export function Pagination({
  currentPage,
  setCurrentPage,
  totalCount = 1,
  pageSize = 10,
  pageRangeDisplayed = 4,
  className = '',
}: IPaginationProps) {
  const [maxPageNumberLimit, setMaxPageNumberLimit] =
    useState(pageRangeDisplayed);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = useMemo(
    () =>
      Array.from(
        { length: Math.ceil(totalCount / pageSize) || 1 },
        (_, i) => i + 1,
      ),
    [pageSize, totalCount],
  );

  const handleClick = (event: MouseEvent) => {
    const element = event.target as HTMLButtonElement;
    setCurrentPage(Number(element.dataset.id));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageRangeDisplayed);
      setMinPageNumberLimit(minPageNumberLimit + pageRangeDisplayed);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageRangeDisplayed == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageRangeDisplayed);
      setMinPageNumberLimit(minPageNumberLimit - pageRangeDisplayed);
    }
  };

  useEffect(() => {
    setMaxPageNumberLimit(pageRangeDisplayed);
    setMinPageNumberLimit(0);
  }, [pageRangeDisplayed, totalCount]);

  return (
    <div className={clsx(styles.container, className)} data-testid="pagination">
      <button
        onClick={handlePrevPage}
        className={clsx(styles.page, {
          [styles.disabled]: currentPage == pages[0],
        })}
        disabled={currentPage == pages[0]}
      >
        Prev
      </button>

      {minPageNumberLimit >= 1 ? (
        <button onClick={handlePrevPage} className={styles.page}>
          ...
        </button>
      ) : null}

      {pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <button
              key={number}
              onClick={handleClick}
              className={clsx(styles.page, {
                [styles.active]: currentPage == number,
              })}
              data-id={number}
            >
              {number}
            </button>
          );
        } else {
          return null;
        }
      })}

      {pages.length > maxPageNumberLimit ? (
        <button onClick={handleNextPage} className={styles.page}>
          ...
        </button>
      ) : null}

      <button
        onClick={handleNextPage}
        className={clsx(styles.page, {
          [styles.disabled]: currentPage == pages[pages.length - 1],
        })}
        disabled={currentPage == pages[pages.length - 1]}
      >
        Next
      </button>
    </div>
  );
}
