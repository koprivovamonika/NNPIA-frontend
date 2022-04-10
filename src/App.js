import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import AuthService from "./service/AuthService";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(AuthService.getUserInfo() !== null);

  return (
      <div className="App">
        <Router>

          <Navbar {...{loggedIn}}/>
          <Header />

          <Routes>
            <Route exact path="/" element={<Main />}/>

            <Route exact path="/czech" render={Main}/>

            <Route path="/about" />

            <Route path="/login" render={
              (routeProps) => {}} />
            } />

            <Route path="/logout" render={
              (routeProps) => {}}  />
            } />

            <Route path="/registration" />

            <Route path="/edit"/>

            <Route path="/main"/>

            <Route path="/create"/>

            <Route path="/czech"/>

            <Route path="/choose"/>

            <Route path="/top" />

            <Route path="/showDone" render={
              (routeProps) => {}}  />
            } />

            <Route path="/showWait" render={
              (routeProps) => {}}  />
            } />

          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
