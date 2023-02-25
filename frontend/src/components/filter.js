import React from "react";

export default function Filter() {
  return (
    <div className="bg-slate-100 max-w-sm mx-8 p-2">
      <label
        for="large"
        class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-500 mx-3"
      >
        Filters
      </label>
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
          Select Wiki
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
      <div className="my-8">
        <label
          for="large"
          class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400 mx-10"
        >
          Year
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
    </div>
  );
}
