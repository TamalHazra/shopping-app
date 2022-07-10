//import logo from "./logo.svg";
// import "./App.css";
// import './categories.styles.scss';
// import CategoryItem from './components/category-item/category-item.component'
import Directory from "../../components/directory/directory.component";
import {Outlet} from "react-router";


function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: "Jacket",
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: "Shoes",
      imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: "Men",
      imageUrl:'https://i.ibb.co/R70vBrQ/mens.png'
    },
    {
      id: 5,
      title: "Women",
      imageUrl:'https://i.ibb.co/GCCdy8t/womens.png'
    }
  ];
  return (
    <div>
    <Outlet/>
      <Directory categories={categories}/>
    </div>
  );
}

export default Home;
