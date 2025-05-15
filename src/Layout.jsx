
import { Link,Outlet } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';


const Layout=()=>{
     return(
      <>
        <Navbar/>
        {/* ================================ */}
      
         <Outlet/>
      
      <Footer/>
      
      </>
     )
}
export default Layout;

