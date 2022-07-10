//import logo from "./logo.svg";
import "./App.css";
// import './categories.styles.scss';
// import Directory from "./components/directory/directory.component";
// import CategoryItem from './components/category-item/category-item.component;'
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from '../src/routes/shop/shop.component'
import Checkout from "./routes/checkout/checkout.component";

// const Shop = () => {
//   return (
//     <>
//       <h1>i am the Shop page</h1>
//     </>
//   );
// };
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop/*" element={<Shop />} />
      <Route path="authentication" element={< Authentication/>} />
      <Route path="checkout" element={<Checkout/>}/> 
      </Route>
    </Routes>
  );
}

export default App;
