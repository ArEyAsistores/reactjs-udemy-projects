import React, { useState } from 'react'

const useToggle = (defaultValue) => {

    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    return {show, toggle};
}

export default useToggle