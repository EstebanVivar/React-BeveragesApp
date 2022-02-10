import Form from "./Components/Form";
import Header from "./Components/Header";
import RecipesList from "./Components/RecipesList";
import CategoryProvider from "./Context/CategoryContext";
import ModalProvider from "./Context/ModalContext";
import RecipesProvider from "./Context/RecipesContext";


function App() {
   return (
      <CategoryProvider >
         <RecipesProvider>
            <ModalProvider>
               <Header />
               <div className=" m-5 p-5">
                  <div className="row">
                     <Form />
                     <RecipesList />
                  </div>
               </div>
            </ModalProvider>
         </RecipesProvider>
      </CategoryProvider>
   );
}

export default App;
