/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { usePagination } from 'common/helpers/usePagination';
import { paginationOffsetHelper } from 'common/helpers/paginationOffset';
/* import { AppRoute } from 'common/enums/app-route.enum'; */

export const Pagination = (props: any) => {
  const {
    onPageChange,
    onOffsetChange,
    totalCount,
    currentPage,
    pageSize,
    siblingCount = 1,
  } = props;
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });
  const onNext = () => {
    onPageChange((prev: number) => {
      if (prev < 36) {
        const value = prev + 1;
        paginationOffsetHelper(value, onOffsetChange);
        return value;
      }
      return prev;
    });
  };

  const onPrevious = () => {
    onPageChange((prev: number) => {
      if (prev > 1) {
        const value = prev - 1;
        paginationOffsetHelper(value, onOffsetChange);
        return value;
      }
      return prev;
    });
  };

  const onChangePage = (number: number) => {
    onPageChange(number);
    return paginationOffsetHelper(number, onOffsetChange);
  };

  return (
    <>
      <div className="border-black border-2 border-solid  rounded-lg mr-3">
        <div
          onClick={onPrevious}
          className="h-8 w-8 block rounded-lg border-1 hover:arrowUp border-solid
         border-white relative cursor-pointer bg-color-arrow 
         transition-all duration-150 ease-tr-btn-arrow"
        >
          <span
            className="left-arrow-left absolute block top-3 left-2 -rotate-45 origin-bottom
        after:content-[''] after:block after:w-3 after:h-1px after:rounded-sm	after:bg-white after:transition-all 
        after:duration-150 after:ease-tr-btn-arrow after:origin-[10%_40%]"
          />
          <span
            className="right-arrow-left absolute block top-5 left-2 rotate-45 
        after:content-[''] after:block after:w-3 after:h-1px after:rounded-sm	after:bg-white after:transition-all 
        after:duration-150 after:ease-tr-btn-arrow after:origin-[10%_40%] "
          />
        </div>
      </div>
      <ul className="flex gap-3">
        {paginationRange?.map((item, index) =>
          typeof item === 'number' ? (
            <li
              key={index}
              onClick={() => onChangePage(item)}
              className={
                item !== currentPage
                  ? 'border-slate-500 border-[1px] border-solid cursor-pointer w-7 h-7 text-center rounded-full transition duration-200 ease-linear hover:bg-slate-300'
                  : 'border-slate-500 border-[1px] border-solid cursor-pointer w-7 h-7 text-center bg-sky-500/75 rounded-full transition duration-200 ease-linear hover:bg-sky-600'
              }
            >
              {item}
            </li>
          ) : (
            <li key={index} className="w-7 h-7 text-center">
              {item}
            </li>
          )
        )}
      </ul>
      <div className="border-black border-2 border-solid  rounded-lg ml-3">
        <div
          onClick={onNext}
          className="h-8 w-8 block rounded-lg border-1 hover:arrowUp border-solid
        border-white relative cursor-pointer bg-color-arrow 
        transition-all duration-150 ease-tr-btn-arrow"
        >
          <span
            className="left-arrow-right absolute block top-3 left-3 rotate-45 origin-bottom
        after:content-[''] after:block after:w-3 after:h-1px after:rounded-sm	after:bg-white after:transition-all 
        after:duration-150 after:ease-tr-btn-arrow after:origin-[90%_60%]"
          />
          <span
            className="right-arrow-right absolute block top-5 left-3 -rotate-45 
        after:content-[''] after:block after:w-3 after:h-1px after:rounded-sm	after:bg-white after:transition-all 
        after:duration-150 after:ease-tr-btn-arrow after:origin-[90%_60%]"
          />
        </div>
      </div>
    </>
  );
};
