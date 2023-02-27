import { Link } from 'react-router-dom';
import  data  from './../data';

const Products = () => {

  return (
    <>
      <section className='section'>
        {
           data.map((product) => 
              <div key={product.id} className='columns is-multiline'>
              <div className='column is-6'>
                <h1>{product.name}</h1>
                <figure className='image'>
                  <Link to={`/products/${product.id}`} className={'btn'}>view</Link>
                </figure>
              </div>
            </div>
           )
        }
      </section>
    </>
  );
};

export default Products;
