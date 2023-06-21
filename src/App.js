import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Header from "./components/navigation/header";
import Learning from "./components/learning";
import AddLecture from "./components/lecture/add/addLecture"
import "./App.css";
import "./style/style.css";
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Header />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Learning />}></Route>
            <Route path="/lecture" element={<AddLecture/>}></Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
