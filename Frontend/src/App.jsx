import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import 'rsuite/dist/rsuite.min.css';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/loginPage" element={<LoginPage />} />
    </Route>
    </Routes>
  )
}

export default App
