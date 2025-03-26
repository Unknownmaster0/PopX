import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account";
import CreateAccount from "./components/CreateAccount";
import Signin from "./components/Signin";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
