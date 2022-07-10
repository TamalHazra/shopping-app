import React from "react";
import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <div className="category-container" style={{backgroundImage: `url(${imageUrl})`}}>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  )
}

export default CategoryItem

// import React from 'react'
// import './category-item.styles.scss'
// import ProductCard from '../product-card/product-card.component'
// import { Link } from 'react-router-dom'

// export const CategoryItem = ({title,products}) => {
//   return (
//     <div className='category-preview-container'>
//         <h2>
//             <Link className='title' to={title}>{title.toUpperCase()}</Link>
//         </h2>
//         <div className='preview'>
//             {
//                 products.filter((_,idx)=>idx < 4)
//                 .map((product)=>
//                 <ProductCard key={product.id} product={product}/>)
//             }
//         </div>
//     </div>
//   )
// }
// export default CategoryItem