import { IAddItemAction } from 'src/redux/cart/cart.actions';
import { IProducts } from 'src/redux/products/products.types';

import ProductCard from 'src/components/ProductCard';

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
