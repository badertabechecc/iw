import { IAddItemAction } from 'src/redux/cart/cart.actions';
import { IProducts } from 'src/redux/products/products.types';

import ProductCard from 'src/components/ProductCard';

import productStyles from './products.module.css';
import { useSelector } from 'react-redux';
import { selectProducts } from 'src/App/Products/products.slice';

const Products = () => {
  const products: IProducts = useSelector(selectProducts);
  return (
    <div className={productStyles.products__layout}>
      {Object.values(products).map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default Products;
