import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png"
}

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValue={{
          count: 4,
          // maxCount: 10
        }}
      >
        {
          ({ reset, increaseBy, counter, isMaxCountReached }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />

            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
