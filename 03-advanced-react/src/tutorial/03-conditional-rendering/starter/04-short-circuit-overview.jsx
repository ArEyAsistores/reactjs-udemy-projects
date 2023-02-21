import { useState } from 'react';

const ShortCircuitOverview = () =>
 {
  const [value, setValue ] = useState('');
  const [name, setName ] = useState('Egg');
  return(
    <div>
      <h2>short circuit overview</h2>
      <h1> { value || name }</h1>
    </div>
  );
};
export default ShortCircuitOverview;
