import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import CardLabel from "./components/cards/Card";
import Container from "@material-ui/core/container";
import Card from "@material-ui/core/Card/Card";
import Input from "@material-ui/core/input";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function App() {
  const [values, setValues] = useState();
  const [listPeixes, setListPeixes] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then(() => {
      setListPeixes([
        ...listPeixes,
        {
          name: values.name,
          cost: values.cost,
          category: values.category,
        },
      ]);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListPeixes(response.data);
    });
  }, []);


  return (
    <Container maxWidth="lg">
      <Card variant="outlined" className="Card">
        <CardContent>
          <Typography variant="h5">Peixaria</Typography>
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <Input
                type="text"
                name="name"
                placeholder="Digite o nome do peixe..."
                onChange={handleChangeValues}
              />
            </Grid>
            <Grid item lg={4}>
              <Input
                type="text"
                name="cost"
                placeholder="Digite o preço do peixe..."
                onChange={handleChangeValues}
              />
            </Grid>
            <Grid item lg={4}>
              <Input
                type="text"
                name="category"
                placeholder="Digite a raça do peixe..."
                onChange={handleChangeValues}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            color='primary'
            variant="contained"
            onClick={() => handleClickButton()}
          >
            Cadastrar
          </Button>
        </CardActions>
      </Card>
      {typeof listPeixes !== "undefined" &&
        listPeixes.map((value) => {
          return (
            <CardLabel
              key={value.id}
              ListCard={listPeixes}
              setListPeixes={setListPeixes}
              id={value.idpeixes}
              name={value.name}
              cost={value.cost}
              category={value.category}
            />
          );
        })}
      
    </Container>
  );
}

export default App;
