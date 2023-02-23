import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {

const [shipping, setShipping] = useState(false);
const [framework, setFramework] = useState('react');

const handleChekBox = (e) => {
  setShipping(e.target.checked);
}
const handleFrameWorker = (e) => {
  setFramework(e.target.value)
  console.log(e.target.value);
}

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type='checkbox' name='shipping' id='shipping' checked={shipping} onChange={handleChekBox}/>
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name={"framework"} id="framework" onChange={handleFrameWorker}>
            {
              frameworks.map((item, index) => {
                return (
                  <option key={index} value={item}>{item}</option>
                )
              })
            }
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
