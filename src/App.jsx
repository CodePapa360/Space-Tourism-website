import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import GlobalStyles from "./styles/GlobalStyles";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/destination" element={<Destination />}>
              <Route path=":name" element={<Destination />} />
            </Route>
            <Route path="/crew" element={<Crew />}>
              <Route path=":name" element={<Crew />} />
            </Route>
            <Route path="/technology" element={<Technology />}>
              <Route path=":name" element={<Technology />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
