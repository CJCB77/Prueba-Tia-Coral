import { useState, useEffect } from 'react';

function TokenDisplay() {
  const [progress, setProgress] = useState(100); // Progress bar percentage
  const [tokenIndex, setTokenIndex] = useState(0); // Current token index
  const totalTime = 60; // Total time in seconds for each token

  // Sample token list
  const tokenList = ['088192', '482917', '193824', '749202', '382019'];
    
  // Function to update token and reset progress
  const updateToken = () => {
    setTokenIndex((prevIndex) => (prevIndex + 1) % tokenList.length); // Move to next token
    setProgress(100); // Reset progress bar
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          updateToken(); // Change token when progress reaches 0
          return 100;
        }
        return prevProgress - (100 / totalTime);
      });
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl font-semibold mb-2">
        {tokenList[tokenIndex]} {/* Display the current token */}
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
