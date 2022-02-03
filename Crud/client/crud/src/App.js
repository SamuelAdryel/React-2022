import React, {useState} from 'react';
import "./App.css";

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    })); 
  };

  const handleClickButton= () => {
    console.log(values);
  }
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
    </div>
  );
}

export default App;
