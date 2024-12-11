// #region importazione
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from "./pages/DefaultLayout.jsx";

// pagine
import HomePage from "./pages/HomePage.jsx";
import MovieListPage from "./pages/MovieListPage.jsx";
// import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";

// context
import { APIContextProvider } from "./contexts/APIContext.jsx";

// stile
import './App.css';

// #endregion importazione

function App() {

  return (
    <>
      <APIContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/films" element={<MovieListPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </APIContextProvider>
    </>
  )
}

export default App
