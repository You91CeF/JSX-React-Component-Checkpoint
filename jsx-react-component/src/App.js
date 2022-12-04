import './App.css';
import Adress from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <h1>Profile Photo</h1>
      <ProfilePhoto />
      <h1>Full Name</h1>
      <FullName />
      <h1>Adress</h1>
      <Adress />
    </div>
  );
}

export default App;
