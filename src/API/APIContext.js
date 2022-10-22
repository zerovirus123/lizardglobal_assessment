import {React, createContext, useEffect, useState} from 'react';

export const APIContext = createContext();

export const APIContextProvider = () => {

  const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/posts")
        .then((response) => response.json()
        )
        .then((json) => {
            setData(json.posts)
        })
    }, [])

  return (
    <APIContext.Provider value={data} />
  );

}

