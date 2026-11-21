import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.text())
      .then((text) => setStatus(text))
      .catch(() => setStatus('Server not reachable'));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Gaahak Khaata</h1>
      <p>Server says: {status}</p>
    </div>
  );
}

export default App;