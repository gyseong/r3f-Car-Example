import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Experience1 } from "./components1/Experience1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main"
import Header from "./Header";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/header" element={<Header/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
