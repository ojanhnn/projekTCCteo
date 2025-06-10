import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Navbar from "./component/Navbar";
import Dashbord from "./component/Dashbord";
import AddNote from "./component/AddData";
import EditNote from "./component/EditData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={
          <>
            <Navbar />
            <Dashbord />
          </>
        } />
        <Route path="/add" element={<AddNote/>}/>
        <Route path="/edit/:id" element={<EditNote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
