import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Header from "./components/navigation/header";
import Learning from "./components/learning";
import "./App.css";
import "./style/style.css";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Header />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Learning />}></Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
