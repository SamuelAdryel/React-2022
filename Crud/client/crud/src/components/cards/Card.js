import React from "react";
import "./Card.css";
import FormDialog from "../dialog/dialog";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function CardLabel(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        id={props.id}
        name={props.name}
        cost={props.cost}
        category={props.category}
        listCard={props.listCard}
        setListCard={props.setListCard}
      />
      <Grid container onClick={() => setOpen(true)}>
        <Paper style={{ marginBottom: 20, padding: 10, width: "100%" }}>
          <Typography variant="h5">{props.name}</Typography>
          <Typography variant="subtitle1">{props.id}</Typography>
          <Typography variant="subtitle1">{props.cost}</Typography>
          <Typography variant="subtitle1">{props.category}</Typography>
        </Paper>
      </Grid>
    </>
  );
}
