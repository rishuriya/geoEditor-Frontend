import React from "react";
import { Button, Spinner } from "flowbite-react";

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

function Loader() {
  return (
    <div className="flex flex-row gap-3">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
}

export default function tableComponent({ data }) {
  return (
    <div className="w-2/3 h-[650px] bg-slate-200 rounded-md mx-3">
      <div className="font-semibold text-xl px-2 m-2">Table</div>

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
            <RowComponent
              wiki="wiki1"
              country="country1"
              year="year1"
              value="value1"
            />
            <RowComponent
              wiki="wiki2"
              country="country2"
              year="year2"
              value="value2"
            />
            <RowComponent
              wiki="wiki3"
              country="country3"
              year="year3"
              value="value3"
            />
            <RowComponent
              wiki="wiki4"
              country="country4"
              year="year4"
              value="value4"
            />
            <RowComponent
              wiki="wiki5"
              country="country5"
              year="year5"
              value="value5"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
