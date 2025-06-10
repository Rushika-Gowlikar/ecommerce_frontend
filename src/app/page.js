'use client';

import Carousel from 'react-bootstrap/Carousel';
import { useCart } from './context/CartContext';
import ProductList from './products/page';
import Header from './header';

export default function Home() {

  const {  cartCount } = useCart();
  return (
    <>
      <Header count={cartCount} />

      
      <div className="container mt-4">
        <Carousel>
          <Carousel.Item>
            <img
      className="d-block w-30 mx-auto"
      src="https://media.istockphoto.com/id/1338894509/photo/woman-choosing-a-new-style-for-herself.jpg?s=612x612&w=0&k=20&c=Ew11SGoTR-W4hO719So27fWOn9M8oRyFVQerofbBdr4="
      alt="First slide"
    />
          </Carousel.Item>
          <Carousel.Item>
            <img
      className="d-block w-30 mx-auto"
      src="https://media.istockphoto.com/id/1338894509/photo/woman-choosing-a-new-style-for-herself.jpg?s=612x612&w=0&k=20&c=Ew11SGoTR-W4hO719So27fWOn9M8oRyFVQerofbBdr4="
      alt="Second slide"
    />
          </Carousel.Item>
        </Carousel>
      </div>

      <ProductList/>
    </>
  );
}
