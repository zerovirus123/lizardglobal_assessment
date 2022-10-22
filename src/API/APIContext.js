import {React, createContext, useContext, useMemo, useState} from 'react';

const APIContext = createContext();

// allows API data to be accessed from the Page component
export const useAPI = () => {
  const context = useContext(APIContext)

  if(!context) {
    throw new Error("useAPI can only be used inside a APIContextProvider")
  }

  return context
}

// APIContextProvider is used so that the API logic is decoupled from the components
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

