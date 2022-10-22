import {React, createContext, useContext, useMemo, useState} from 'react';

const APIContext = createContext();

export const useAPI = () => {
  const context = useContext(APIContext)

  if(!context) {
    throw new Error("useAPI can only be used inside a APIContextProvider")
  }

  return context
}

export const APIContextProvider = ({children}) => {

  const [data, setData] = useState([])

    // useMemo to improve fetch performance
    useMemo(() => {
        fetch("/api/posts")
        .then((response) => response.json()
        )
        .then((json) => {
            setData(json.posts)
        })
        .catch((err) => {
          console.error(err)
        })
    }, [])

  return (
    <APIContext.Provider value={data}>
      {children}
    </APIContext.Provider>
  );

}

