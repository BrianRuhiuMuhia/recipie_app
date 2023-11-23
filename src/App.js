import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Main} from "./component/Main";
import Recipie from "./component/Recipie.js"
function App() {
  
  return (
<>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Main/>}></Route>
<Route path="/recipie/:id" element={<Recipie/>}></Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
