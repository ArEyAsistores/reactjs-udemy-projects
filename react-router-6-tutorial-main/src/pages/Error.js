import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2>404 Not found</h2>
      <Link to={'/'} className='btn'> Back home </Link>
    </section>
  );
};
export default Error;
