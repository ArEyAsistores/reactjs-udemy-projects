import React, { useEffect, useState } from 'react'

const Alert = ({alert}) => {

  const [isShow, setShow] = useState(true);

  useEffect(() => {
    setShow(() => true)
    setTimeout(() => {
      setShow(() => false)
    }, 3000)
  }, [alert])

  const {type, msg } = alert;
  
  return  isShow && <p className={`alert alert-${type}`}>{msg}</p>;
}

export default Alert
