import React, {useState, useEffect} from 'react';
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/Card";

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    })); 
  };

  const handleClickButton= () => {
    Axios.post('http://localhost:3001/register',{
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      alert(response);
      console.log('response');
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      console.log(response);
    });
  }, []);


  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Peixaria</h1>
        <input
          type="text"
          className="register--input"
          name="name"
          placeholder="Digite o nome do peixe..."
          onChange={handleChangeValues} 
          />
        <input
          type="text"
          className="register--input"
          name="cost"
          placeholder="Digite o preço do peixe..."
          onChange={handleChangeValues}
          />
        <input
          type="text"
          className="register--input"
          name="category"
          placeholder="Digite a raça do peixe..."
          onChange={handleChangeValues}
          />
          <button className="register--button"
          onClick={()=> handleClickButton()}>Cadastrar</button>
      </div>
      <Card></Card>
    </div>
  );
}

export default App;