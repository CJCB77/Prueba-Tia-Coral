import { useState } from "react";

function TokenHistory() {
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("user");

  const tokens = [
    {
      user: "John Doe",
      token: "123456",
      generatedAt: "2021-09-01 12:00:00",
      expiresAt: "2021-09-01 12:30:00",
      usedAt: "2021-09-01 12:15:00",
      status: "Usado",
    },
    {
      user: "Jane Doe",
      token: "654321",
      generatedAt: "2021-09-01 12:00:00",
      expiresAt: "2021-09-01 12:30:00",
      usedAt: "2021-09-01 12:15:00",
      status: "Usado",
    },
  ];

  const filteredTokens = tokens.filter((token) => {
    const fieldToFilter = filterField === "user" ? token.user : token.token;
    return fieldToFilter.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <div className="mt-12 w-4/5 mx-auto">
        <div className="flex gap-2 mb-2">
          {/* Dropdown to select filter field */}
          <select
            value={filterField}
            onChange={(e) => setFilterField(e.target.value)}
            className="border border-gray-200 p-2 rounded-lg"
          >
            <option value="user">Usuario</option>
            <option value="token">Token</option>
          </select>

          {/* Search input */}
          <input
            type="text"
            placeholder="Buscar..."
            className="border border-gray-200 p-2 w-full rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mt-8 mx-auto">
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
            {filteredTokens.map((token, index) => (
              <tr key={index}>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div
                    class="flex items
                        -center"
                  >
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {token.user}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{token.token}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{token.generatedAt}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{token.expiresAt}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{token.usedAt}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {token.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default TokenHistory;
