import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import ProductPage from './pages/productPage';
import ProductDetialPage from './pages/productDetialPage';
import 'rsuite/dist/rsuite.min.css';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route>
        <Route path="" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/productDetialPage/:id" element={<ProductDetialPage />} />
      </Route>
    </Routes>
  )
}

export default App
