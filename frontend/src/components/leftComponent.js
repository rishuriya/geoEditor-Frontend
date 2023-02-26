import React from "react";

export default function LeftComponent({leftProps}) {

  const { wikiList, yearList, countryList, setWiki, setYear, setCountry, wiki, year, country } = leftProps
  return (
    <div className="w-1/3 items-center py-2">
      <div className="bg-slate-200 mx-auto max-w-sm rounded-md my-auto p-2">
      <label
        htmlFor="large"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-500 mx-3"
      >
        Filters
      </label>
      <div>
        <label
          htmlFor="large"
          className="block min-w-[175px] mb-2 text-base font-medium text-gray-900 dark:text-gray-400 mx-10"
        >
          Select Country
        </label>
        <select
          id="large"
          onChange={(e) => {
            setCountry(e.target.value);
          }
          }
          className="block min-w-[175px] py-3 px-4 mx-10 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          <option selected value={"All"}>All</option>
          {countryList.map((country) => {
            return (
              <option value={country} key={country}>{country}</option>
            )
          })
          }
        </select>
      </div>
      <div className="my-8">
        <label
          htmlFor="large"
          className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400 mx-10"
        >
          Select Wiki project
        </label>
        <select
          id="large"
          onChange={(e) => {
            setWiki(e.target.value);
          }
          }
          className="block min-w-[175px] py-3 px-4 mx-10 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          <option selected value={"All"}>All</option>
          {wikiList.map((wiki) => {
            return (
              <option value={wiki} key={wiki}>{wiki}</option>
            )
          })
          }
        </select>
      </div>
      <div className="my-8">
        <label
          htmlFor="large"
          className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400 mx-10"
        >
          Select Year
        </label>
        <select
          id="large"
          onChange={
            (e) => {
              setYear(e.target.value);
            }
          }
          className="block min-w-[175px] py-3 px-4 mx-10 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          <option selected value={"All"}>All</option>
          {yearList.map((year) => {
            return (
              <option value={year} key={year}>{year}</option>
            )
          })
          }
        </select>
      </div>
    </div>
    </div>
  );
}
