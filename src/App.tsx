import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";

function App() {
  return (
   
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
