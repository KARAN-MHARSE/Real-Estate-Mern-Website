import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Header from './components/Header'
import Profile from './pages/Profile'
import CreateListing from './pages/CreateListing'
import ListingDetail from './pages/ListingDetail'
import Search from './pages/Search'



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-out' element={<SignOut/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/create-listing' element={<CreateListing/>} />
        <Route path ='/listing/:id' element={<ListingDetail/>} />
        <Route path='/search' element={Search} />
      </Routes>
    </BrowserRouter>
  )
}

export default App