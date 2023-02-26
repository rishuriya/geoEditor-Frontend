import React from "react";
import { Button, Spinner } from "flowbite-react";
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

function RowComponent(props) {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.wiki}
      </th>
      <td class="px-6 py-4">{props.country}</td>
      <td class="px-6 py-4">{props.year}</td>
      <td class="px-6 py-4">{props.value}</td>
    </tr>
  );
}



export default function TableComponent({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const ROWS_PER_PAGE = 10;
  const offset = currentPage * ROWS_PER_PAGE;

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const pageCount = Math.ceil(data.length / ROWS_PER_PAGE);
  const paginatedData = data.slice(offset, offset + ROWS_PER_PAGE);

  return (
    <div className="w-2/3 h-[750px]">
      <div className="bg-slate-200 rounded-md mx-3 h-[640px]">
        <div className="font-semibold text-xl px-2 m-2 pt-3">Table</div>

        <div class="relative overflow-x-auto mx-5 rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  wiki
                </th>
                <th scope="col" class="px-6 py-3">
                  Country
                </th>
                <th scope="col" class="px-6 py-3">
                  year
                </th>
                <th scope="col" class="px-6 py-3">
                  value
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((data) => (
                <RowComponent
                  wiki={data.wiki}
                  country={data.country}
                  year={data.year}
                  value={data.value}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mx-5 my-5">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'flex flex-row space-x-2 mt-4'}
          previousClassName={'px-3 py-1 bg-blue-500 text-white rounded-md'}
          nextClassName={'px-3 py-1 bg-blue-500 text-white rounded-md'}
          pageClassName={'px-3 py-1 bg-gray-200 rounded-md'}
          pageLinkClassName={'text-gray-700'}
          activeClassName={'bg-blue-700 text-white'}
        />
      </div>
    </div>

  );
}