import { Rate } from "antd";
import { useState } from "react";
import useProduct from "../../hooks/useProduct";

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

const ProductItem = ({ product, isEditable }) => {
  const{ name, price, imageUrl } = product
  const[value, setValue] = useState(3);
  const[isHover, setIsHover] = useState(false)
    
  const { products, setProducts } = useProduct()
  const handleHover = () => isEditable && setIsHover(true)
  const handleHoverLeave = () => isEditable && setIsHover(false)

  const deleteProduct = (name) => 
    setProducts([...products.filter(x  => name !== x.name)])
  
  return ( 
    <div className="product-container" onMouseOver={handleHover} onMouseLeave={handleHoverLeave}>
        <img src={ imageUrl } alt={ name } />
        <h5 className="product-name">{ name }</h5>
        <span>
            <Rate tooltips={desc} onChange={setValue} value={value}  />
            <p className="product-price">${ price }</p>
        </span>
        <p className="add-tocart-btn btn">ADD TO CART</p>

        { isHover && <button className='delete-btn' 
            onClick={() => deleteProduct(name)}>X</button> }
    </div>
  );
};

export default ProductItem;
