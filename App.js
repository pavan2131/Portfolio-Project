import logo from './logo.svg';
import './App.css';

import VerticalCards from './Components/VerticalCards';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import ProfilePage from './Pages/ProfilePage';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     {/* <ResponsiveAppBar />
     <VerticalCards /> */}
      <ProfilePage />
      {/* <Home/> */}
    </div>
  );
}

export default App;
