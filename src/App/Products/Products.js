import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import productList from '../../productsList';

const Products = (props) => {
  return (
    <div className='products__layout'>
      {productList.map((product, index) => {
        return (
          <ProductCard key={index} product={product} addItem={props.addItem} />
        );
      })}
    </div>
  );
};

export default Products;
