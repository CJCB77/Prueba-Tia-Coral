import { useState, useEffect } from "react";
import { generateToken } from "../services/tokenApi";
import { useAuth } from "../context/AuthContext";

function TokenDisplay() {
  const [progress, setProgress] = useState(null); // Progress bar percentage
  const [token, setToken] = useState(null)
  const totalTime = 60; // Total time in seconds for each token
  const {user} = useAuth()

  // Function to fetch a new token and reset progress
  const fetchNewToken = async () => {
    try {
      const data = await generateToken(user.id);
      console.log(data)
      setToken(data.token.value);

      const createdAt = new Date(data.token.createdAt);
      // Calculate remaining time based on existing token's createdAt
      const elapsedTime = Math.floor((new Date() - createdAt) / 1000);
      const remainingTime = Math.max(totalTime - elapsedTime, 0); // Ensure positive value
      setProgress((remainingTime / totalTime) * 100); // Update token state
 
    } catch (error) {
      console.error("Error generating token:", error);
    }
  };

  useEffect(() => {
    fetchNewToken();

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          fetchNewToken(); // Fetch a new token when progress reaches 0
          return 100; // Reset progress to full
        }
        return prevProgress - 100 / totalTime;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [user])

  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl font-semibold mb-2">
        {token || "Generating..."} {/* Display current token or loading text */}
      </span>
      <div className="w-full h-2 bg-gray-300 rounded">
        <div
          className="h-full bg-red-600 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default TokenDisplay;
