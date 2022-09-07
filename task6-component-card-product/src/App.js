import React from 'react';
import products from './product.json'
import './App.css';

import CardProduct from './components/CardProduct';

function App() {
  return (
    <div className='p-10 flex flex-col items-center gap-2'>
      <h1 className='font-bold text-xl'>Tokopedia Card Products</h1><br/>
      <div className='flex flex-row flex-wrap w-full h-full gap-5'>
      { products.map((product) => {
          return (<CardProduct key={product.id} data={product}/>)
      }) }
      </div>
    </div>
  );
}

export default App;
