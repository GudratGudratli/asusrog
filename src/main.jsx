import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Navbar from './components/Navbar/index'
import HeadSlider from './components/HomeComponent/HeadSlider/HeadSlider'
import ExploreProducts from './components/HomeComponent/ExploreProducts/ExploreProducts'
import RecentStories from './components/HomeComponent/RecentStories/RecentStories'
import ArtUniverse from './components/HomeComponent/ArtUniverse/ArtUniverse'
import Footer from './components/Footer/index'
import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <HeadSlider />
    <ExploreProducts />
    <RecentStories />
    <ArtUniverse />
    {/* <App /> */}
    <Footer />
  </React.StrictMode>
)
