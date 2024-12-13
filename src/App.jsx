// #region importazione
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from "./pages/DefaultLayout.jsx";

// pagine
import HomePage from "./pages/HomePage.jsx";
import MovieListPage from "./pages/MovieListPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import ReviewFormPage from "./pages/ReviewFormPage.jsx";

// context
import { APIContextProvider } from "./contexts/APIContext.jsx";
import { FormatDateProvider } from "./contexts/DateFormatContext.jsx";

// stile
import './App.css';

// #endregion importazione

function App() {

  return (
    <>
      <APIContextProvider>
        <FormatDateProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/films" element={<MovieListPage />} />
                <Route path="/films/:id" element={<MovieDetailsPage />} />
                <Route path="/films/reviews/:id" element={<ReviewFormPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FormatDateProvider>
      </APIContextProvider>
    </>
  )
}

export default App
