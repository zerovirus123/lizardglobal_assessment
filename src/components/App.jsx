import { APIContextProvider } from "../API/APIContext";
import CategorySelector from "./CategorySelector/CategorySelector";
import Page from "./Page/Page";
import { useState } from "react";

function App() {

  const [selectedCategories, setSelectedCategories] = useState([])

  return (
    <>
    <APIContextProvider>
      <CategorySelector setSelectedCategories={setSelectedCategories} />
      <Page selectedCategories={selectedCategories} />
    </APIContextProvider>
    </>
  );
}

export default App;