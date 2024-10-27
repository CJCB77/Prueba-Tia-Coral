import React from "react";

function TokenHistory() {
  return (
    <main>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mx-auto mt-12">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Usuario
              </th>
              <th scope="col" class="px-6 py-3">
                Token
              </th>
              <th scope="col" class="px-6 py-3">
                Generado en
              </th>
              <th scope="col" class="px-6 py-3">
                Expiración
              </th>
              <th scope="col" class="px-6 py-3">
                Usado en
              </th>
              <th scope="col" class="px-6 py-3">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                John Doe
              </th>
              <td class="px-6 py-4">123456</td>
              <td class="px-6 py-4">2021-09-01 12:00:00</td>
              <td class="px-6 py-4">2021-09-01 12:30:00</td>
              <td class="px-6 py-4">2021-09-01 12:15:00</td>
              <td class="px-6 py-4">Usado</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Jane Doe
              </th>
              <td class="px-6 py-4">654321</td>
              <td class="px-6 py-4">2021-09-01 12:00:00</td>
              <td class="px-6 py-4">2021-09-01 12:30:00</td>
              <td class="px-6 py-4">2021-09-01 12:15:00</td>
              <td class="px-6 py-4">Usado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default TokenHistory;
