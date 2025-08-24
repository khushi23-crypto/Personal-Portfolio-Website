import NavigationBar from './components/NavigationBar';
import { React, useState } from 'react';
function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <NavigationBar darkMode={darkMode}
      setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
