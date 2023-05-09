import './App.css';
import Audioplayer from './components/Audioplayer/Audioplayer'
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Album from './pages/Album/Album';


function App() {

  return (
    <div className="App">
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/album/:albumId' element={<Album />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </SideBar>
    </Router>
    <Audioplayer/>
    </div>
  );
}

export default App;
