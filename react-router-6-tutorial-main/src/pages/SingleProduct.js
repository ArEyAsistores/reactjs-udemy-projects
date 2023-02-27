import { Link, useParams } from "react-router-dom";
import  data  from './../data';

const SingleProduct = () => {

  const { productId } = useParams();

  const getProducts = data.find((product) => product.id === productId);
  const {name, image} = getProducts;

  return (
    <section className='section product'>
     <h1>{name}</h1>
     <img src={image} alt={name} />
     <Link to={'/products'} className='btn'>Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
