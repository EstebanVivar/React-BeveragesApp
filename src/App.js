import Form from "./Components/Form";
import Header from "./Components/Header";
import CategoryProvider from "./Context/CategoryContext";




function App() {
  return (
    <CategoryProvider >
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </CategoryProvider>
  );
}

export default App;
