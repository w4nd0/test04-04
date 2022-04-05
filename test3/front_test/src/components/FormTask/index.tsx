import { Container, Typography, TextField, Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services";

const FormTask = ({ setFetch }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const addTask = (data) => {
    api.post("", data).then((res) => setFetch(true));
  };

  const inputs = {
    marginBottom: "15px",
  };

  return (
    <Container sx={{ margin: "0px", maxWidth: "400px !important" }}>
      <Typography
        sx={{
          fontSize: "1.2em",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Adicionar Tarefa
      </Typography>
      <form
        onSubmit={handleSubmit(addTask)}
        style={{
          display: "flex",
          flexFlow: "column wrap",
          alignContent: "center",
        }}
      >
        <TextField
          label="Título"
          color="primary"
          sx={inputs}
          {...register("title")}
          helperText={errors.title?.message}
        />
        <TextField
          label="Descrição"
          color="primary"
          sx={inputs}
          {...register("description")}
          helperText={errors.description?.message}
        />
        <input
          type="datetime-local"
          name="date"
          style={{ marginBottom: "15px", minHeight: "56px" }}
          {...register("date")}
        />
        <Button type="submit" variant="contained" sx={inputs}>
          Adicionar
        </Button>
      </form>
    </Container>
  );
};

export default FormTask;
