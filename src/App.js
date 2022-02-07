import { Fragment } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";



function App() {
  return (
    <div >
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
