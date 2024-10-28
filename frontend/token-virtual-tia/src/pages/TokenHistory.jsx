import { useState, useEffect } from "react";
import { getTokens } from "../services/tokenApi";
import { useAuth } from "../context/AuthContext";

function TokenHistory() {
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("value");
  const [tokens, setTokens] = useState([]);
  const { user } = useAuth();

  const fetchTokens = async (userId) => {
    try {
      const data = await getTokens(userId);
      setTokens(data);
    } catch (error) {
      console.error("Error al obtner tokens:", error);
    }
  };

  useEffect(() => {
    fetchTokens(user.id);
  }, []);

  // Filter tokens based on the selected filter field
  const filteredTokens = tokens.filter((token) => {
    const searchTerm = search.toLowerCase();

    if (filterField === "value") {
      return token.value.toLowerCase().includes(searchTerm);
    } else if (filterField === "createdAt") {
      // Compare only the date portion
      const createdDate = new Date(token.createdAt).toLocaleDateString();
      return createdDate.includes(searchTerm);
    } else if (filterField === "expiresAt") {
      const expiresDate = new Date(token.expiresAt).toLocaleDateString(); // Format to match search
      return expiresDate.includes(searchTerm);
    }
    return false;
  });

  return (
    <main>
      <div className="mt-12 w-4/5 mx-auto">
        <div className="flex gap-2 mb-2">
          {/* Filter dropdown with options for token, created date, and expiration date */}
          <select
            value={filterField}
            onChange={(e) => setFilterField(e.target.value)}
            className="border border-gray-200 p-2 rounded-lg"
          >
            <option value="value">Token</option>
            <option value="createdAt">Created Date</option>
            <option value="expiresAt">Expiration Date</option>
          </select>

          {/* Input for searching - changes type based on filterField */}
          <input
            type={filterField === "value" ? "text" : "date"}
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
            </tr>
          </thead>
          <tbody>
            {filteredTokens.map((token, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{token.value}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(token.createdAt).toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(token.expiresAt).toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-sm ${
                      token.usedAt ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <span
                      className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                        token.usedAt
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {token.usedAt
                        ? new Date(token.usedAt).toLocaleString()
                        : "No usado"}
                    </span>
                  </div>
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
