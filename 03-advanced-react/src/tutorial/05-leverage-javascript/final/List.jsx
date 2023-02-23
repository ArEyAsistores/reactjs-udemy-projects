import { people } from '../../../data';
import Person from './Person';

const List = () => {
  console.log(people)
  return (
    <div>
      { people.map((person) => {
        
        return <Person key={ person.id } {...person} />;
      })}
    </div>
  );
};
export default List;
