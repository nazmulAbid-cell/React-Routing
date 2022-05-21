import React from 'react'
import AllMeetups from './components/pages/AllMeetups';
import Favourites from './components/pages/Favourites';
import NewMeetup from './components/pages/NewMeetup';
import {
  Route,
 Routes
} from "react-router-dom";

function App() {
 return(
  <div>
 <Routes>
   <Route path='/' element = {<AllMeetups/>} />
   <Route path='/new-meetup' element = {<NewMeetup/>}/>
   <Route path='/favourites' element = {<Favourites/>}/>
 </Routes>
</div>
  
 )
  
}

export default App;
