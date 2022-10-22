import { APIContextProvider } from "../API/APIContext";
import CategorySelector from "./CategorySelector/CategorySelector";
import Page from "./Page/Page";

function App() {
  return (
    <>
    <APIContextProvider>
      <CategorySelector />
      <Page />
    </APIContextProvider>
    </>
  );
}

export default App;