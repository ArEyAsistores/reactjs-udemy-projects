import { useCallback, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id!== id));
  }

  const handleRemovePerson = useCallback((id) => {
    setPeople(people.filter((person) => person.id!== id));
  },[people])

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson = { handleRemovePerson } />
    </section>
  );
};
export default LowerState;
