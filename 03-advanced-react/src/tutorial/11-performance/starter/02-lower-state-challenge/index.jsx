import { useState } from 'react';
import { data } from '../../../../data';
import Input from './Input';
import List from './List';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    console.log(name);
    setPeople([...people, newPerson]);
  };
  return (
    <section>
     <Input addPerson={ addPerson }/>
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
