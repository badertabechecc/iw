import { IAddItemAction } from '@redux/cart/cart.actions';
import { IProducts } from '@redux/products/products.types';

// TODO: Replace relative path with absolute path
import ProductCard from '../../components/ProductCard';

import productStyles from './products.module.css';

interface IProps {
  products: IProducts;
  addItem: IAddItemAction;
}

const Products = (props: IProps) => (
  <div className={productStyles.products__layout}>
    {Object.values(props.products).map((product, index) => {
      const addItem = () => props.addItem({ id: product.Id });

      return <ProductCard key={index} product={product} addItem={addItem} />;
    })}
  </div>
);

export default Products;
