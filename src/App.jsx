import { BrowserRouter, Routes , Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Pages/Home";
import WomansCategories from "./Pages/WomansCategories";
import CartProduct from "./components/CartProduct";
import ManCategories from "./Pages/ManCategories";
import KidsCategories from "./Pages/KidsCategories";
import PersonalCategories from "./Pages/PersonalCategories";
import Blog from "./Pages/Blog";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import PayComplete from "./Pages/PayComplete";


const  App=()=>{
  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>} />
                  <Route path="home" element={<Home/>}/>
                  <Route path="womanscategories" element={<WomansCategories/>}/>
                  <Route path="mancategories" element={<ManCategories/>}/>
                  <Route path="kidscategories" element={<KidsCategories/>}/>
                  <Route path="personalcategories" element={<PersonalCategories/>}/>
                  <Route path="blog" element={<Blog/>}/>
                  <Route path="contact" element={<Contacts/>}/>
                  <Route path="about" element={<About/>}/>
                  <Route path="paycomp" element={<PayComplete/>}/>
                  <Route path="cart" element={<CartProduct/>}/>
                </Route>
            </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App;