// App.js (React frontend)
import React from 'react';

function Command() {
  const handleButtonClick = async () => {
    try {

      const response = await fetch('http://localhost:4520/execute-command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      console.log('Command output:', result);
    } catch (error) {
      console.error('Error triggering command:', error);
    }
  };

  return (
    <div className="App">
      <h1>Run Node.js Command</h1>
      <button onClick={handleButtonClick}>Run Command</button>
    </div>
  );
}

export default Command;
