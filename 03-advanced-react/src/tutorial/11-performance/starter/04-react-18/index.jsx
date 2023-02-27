import { lazy, Suspense, useState, useTransition } from 'react';
const SlowComponent = lazy(() => import('./SlowComponent'))

const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [ isPending, startTransition ] = useTransition();

  const [ show, setShow ] = useState(false);


  const handleChange = (e) => {
    setText(e.target.value);

    startTransition(() => {
       // slow down CPU
    const newItems = Array.from({ length: 5000 }, (_, index) => {
      return (
        <div key={index}>
          <img src='/vite.svg' alt='' />
        </div>
      );
    });
    setItems(newItems);
    })

   
  };
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

      {
      isPending? <h1>Loading...</h1> :
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginTop: '2rem',
        }}
      >
        {items}
      </div>
      }
      <button type='button' onClick={() => setShow(!show)} className={'btn'}> toggle </button>

      { show && 
       <Suspense fallback={<h1>Loading... FALLBACK SUSPENSE</h1>}>
        <SlowComponent/>
       </Suspense>
      }
    </section>
  );
};
export default LatestReact;
