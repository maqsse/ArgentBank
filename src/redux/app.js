 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 import Accueil from '../pages/Accueil'
 import SignIn from '../pages/SignIn'
 import User from '../pages/User'

 export default function App() {
   return (
     <>
       <Router>
         <Routes>
           <Route path="/" element={<Accueil />} />
           <Route path="/login" element={<SignIn />} />
           <Route path="/profile" element={<User />} />
           <Route path="*" element={<div>Error404</div>} />
         </Routes>
       </Router>
     </>
   )
 }