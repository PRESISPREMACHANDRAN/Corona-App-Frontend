import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddData from "./Components/AddData";
import NotFound from "./Components/NotFound";
import SearchData from "./Components/SearchData";
import ViewAllData from "./Components/ViewAllData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AddData />} />
        <Route path="/search" element={<SearchData />} />
        <Route path="/viewAll" element={<ViewAllData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
