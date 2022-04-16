import './App.css';
import {useState} from "react";
import AuthService from "./service/AuthService";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Reservation from "./components/Reservation";
import Administration from "./components/Administration";
import AdmReservation from "./components/AdmReservation";
import EditUser from "./components/EditUser";
import AdmProcedures from "./components/AdmProcedures";
import AddOrEditProcedure from "./components/AddOrEditProcedure";

function App() {
  const [loggedIn, setLoggedIn] = useState(AuthService.getUserInfo() !== null);

  return (
      <div className="App">
        <Router>

          <Navbar {...{loggedIn}}/>
          <Header />

          <Routes>
            <Route exact path="/" element={<Main />}/>

            <Route exact path="/reservation" element={<Reservation/>}/>

            <Route path="/login" element={<Login {...{setLoggedIn}}/>} />

            <Route path="/logout" element={<Logout {...{setLoggedIn}}/>}/>

            <Route path="/administration" element={<Administration />}/>

            <Route path="/edit" element={<EditUser/>}/>

            <Route path="/adm_procedures" element={<AdmProcedures />}/>

            <Route path="/adm_reservation" element={<AdmReservation />}/>

            <Route path="/create_update_procedure" element={<AddOrEditProcedure />}/>

          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
