import React, { useState } from 'react'

const useUser = (defaultValue) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState([]);

    const loading = () => setIsLoading(!isLoading);
    const error = () => setIsError(!isError);
    const userData = (defaultValue) => setUser(defaultValue);

    console.log(defaultValue);

    return (
        {   isLoading, loading, 
            isError, error,
            user, userData
        }
    )
}

export default useUser