import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/home";
import Popular from "./page/popular";
import Rated from "./page/rated";
import DetailPage from "./components/detailPage/detailPage";
import SearchResult from "./components/searchResult";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/popular'} element={<Popular/>}/>
                <Route path={'/rated'} element={<Rated/>}/>
                <Route path={'/detail-page/:id'} element={<DetailPage/>}/>
                <Route path={`/search-result/:movieName`} element={<SearchResult/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
