import { useState, useEffect } from "react";
import { getTokens } from "../services/tokenApi";
import { useAuth } from "../context/AuthContext";

function TokenHistory() {
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("user");
  const [tokens, setTokens] = useState([])
  const {user} = useAuth()


  const fetchTokens =  async (userId) => {
    try {
      const data = await getTokens(userId);
      setTokens(data)
    } catch (error) {
      console.error("Error al obtner tokens:", error);
    }
  };

  useEffect(() => {
    fetchTokens(user.id)
  }, [])

  // const filteredTokens = tokens.filter((token) => {
  //   const fieldToFilter = filterField === "user" ? token.user : token.token;
  //   return fieldToFilter.toLowerCase().includes(search.toLowerCase());
  // });

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

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mt-8 mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Token
              </th>
              <th scope="col" className="px-6 py-3">
                Generado en
              </th>
              <th scope="col" className="px-6 py-3">
                Expiración
              </th>
              <th scope="col" className="px-6 py-3">
                Usado en
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{token.value}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{new Date(token.createdAt).toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900"> {new Date(token.expiresAt).toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{new Date(token.usedAt).toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
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
