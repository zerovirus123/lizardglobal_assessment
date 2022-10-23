import { APIContextProvider } from "../API/APIContext";
import CategorySelector from "./CategorySelector/CategorySelector";
import Page from "./Page/Page";
import { useState } from "react";

function App() {

  const [selectedOptions, setSelectedOptions] = useState([])

  console.log("selected options in app: ", selectedOptions)

  return (
    <>
    <APIContextProvider>
      <CategorySelector setSelectedOptions={setSelectedOptions} />
      <Page selectedOptions={selectedOptions} />
    </APIContextProvider>
    </>
  );
}

export default App;