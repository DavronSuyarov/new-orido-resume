// import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './container/Navbar';
import Footer from './container/Footer';
import AboutUs from './Pages/AboutUs';
import Class from './Pages/Class';
import ClassDetail from './Pages/ClassDetail';
import Blogs from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail';
import Services from './Pages/Services';
import ServiceDetails from './Pages/ServiceDetails';
import Team from './Pages/Team';
import TeamDetails from './Pages/TeamDetails';
import Gallery from './Pages/Gallery';
import Events from './Pages/Events';
import Shop from './Pages/Shop';
import ShopDetails from './Pages/ShopDetails';
import Cart from './Pages/Cart';
import PricePlan from './Pages/PricePlan';
import Registration from './Pages/Registration';
import CheckOut from './Pages/CheckOut';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Error from './Pages/Error';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/class' element={<Class />} />
        <Route path='/class-details' element={<ClassDetail />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog-detail' element={<BlogDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service-details' element={<ServiceDetails />} />
        <Route path='/team' element={<Team />} />
        <Route path='/team-details' element={<TeamDetails />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/event' element={<Events />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop-detail' element={<ShopDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/price' element={<PricePlan />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/error' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
