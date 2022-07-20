import { useMemo } from 'react';
import { totalPage } from 'common/helpers/totalPage';
import { rangePagination } from 'common/helpers/rangePagination';

interface IPagination {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

export const DOTS = '...';

export const usePagination = ({ totalCount, pageSize, siblingCount, currentPage }: IPagination) => {
  // eslint-disable-next-line consistent-return
  const paginationRange = useMemo(() => {
    const totalPageCount = totalPage(totalCount, pageSize); // whole page
    const totalPageNumbers = siblingCount + 5; // what we can see
    if (totalPageNumbers >= totalPageCount) {
      const value = rangePagination(1, totalPageCount);
      return value;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1); // left sibling number

    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount); // right sibling number
    const shouldShowLeftDots = leftSiblingIndex > 2; // show dots when leftSibling > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2; // show dots when right sibline is lower than totalPage
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;

      const leftRange = rangePagination(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = rangePagination(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = rangePagination(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
