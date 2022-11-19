import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Cats } from "./pages/Cats";
import { Cat } from "./pages/Cat";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cats />} />
          <Route path="/:id" element={<Cat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
