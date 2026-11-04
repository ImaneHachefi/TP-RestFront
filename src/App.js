import React, { useState } from 'react';
import AccountList from './components/AccountList';
import AccountForm from './components/AccountForm';

function App() {
  // Incremente apres chaque ajout pour recharger la liste
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div>
      <AccountForm onAdded={() => setRefreshKey(k => k + 1)} />
      <AccountList refreshKey={refreshKey} />
    </div>
  );
}

export default App;
