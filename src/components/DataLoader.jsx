import { initialProducts } from '../inventory/Products';
import { useEffect, useState } from 'react';
import CardsWrapper from './CardsWrapper';
import Card from './Card';
import Loader from './Loader';

export default function DataLoader() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('vendingProducts'));
    if (data == null) {
      localStorage.setItem('vendingProducts', JSON.stringify(initialProducts));
      setProducts(initialProducts);
    } else {
      setProducts(data);
    }
  }, []);

  const removeProduct = (uuid) => {
    const products = JSON.parse(localStorage.getItem('vendingProducts'));
    const updatedInventory = products.map((product) => {
      if (product.uuid === uuid) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    localStorage.setItem('vendingProducts', JSON.stringify(updatedInventory));
    setProducts(updatedInventory);
  };

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <CardsWrapper>
      {products.map((product) => (
        <Card
          product={product}
          removeProduct={removeProduct}
          key={product.uuid}
        ></Card>
      ))}
    </CardsWrapper>
  );
}
