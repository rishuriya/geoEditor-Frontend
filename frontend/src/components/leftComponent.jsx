import React from "react";
// import { Dropdown } from "flowbite-react";
import Filter from "./filter";

export default function LeftComponent() {
  return (
    <div className="w-1/3 items-center mx-auto">
      <div>
        <label
          for="large"
          class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400 mx-10"
        >
          Select Country
        </label>
        <select
          id="large"
          class="block py-3 px-4 mx-10 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="my-8">
        <label
          for="large"
          class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400 mx-10"
        >
          Select Month
        </label>
        <select
          id="large"
          class="block py-3 px-4 mx-10 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        >
          <option selected>Choose a month</option>
          <option value="US">January</option>
          <option value="CA">February</option>
          <option value="FR">March</option>
          <option value="DE">April</option>
        </select>
      </div>
      <Filter/>
    </div>
  );
}
