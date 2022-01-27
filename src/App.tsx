import React from 'react';
import AppProvider from './hooks';
import { useToast } from './hooks/toast';
import Home from './pages/home';
import GlobalStyles from './styles/global'
function App() {
  

  return (
    <>
      <AppProvider>
        <h1>Toats</h1>
        <br />
        <Home />
      </AppProvider>
      <GlobalStyles />
    </>
    
  );
}

export default App;
