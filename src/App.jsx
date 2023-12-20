import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
// import Login from "./components/login/Login";
import List from "./components/List/index";

export default function App() {
  return (
    <Content>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Content>
  );
}
