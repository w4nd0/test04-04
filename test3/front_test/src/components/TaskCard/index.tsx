import { Card, CardContent, Typography, Button, Modal } from "@mui/material";
import { useState } from "react";
import api from "../../services";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const TaskCard = ({ task, setFetch }) => {
  const text = {
    minHeight: "165px !important",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-evenly",
    padding: "10px !important",
    maxWidth: "175px !important",
  };

  const card = {
    background: "#edede159",
    minHeight: "210px",
    padding: "0 5px",
    display: "flex",
    flexFlow: "wrap column",
    alignContent: "center",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);

  const removeTask = (id) => {
    api.delete(`${id}/`).then(() => {
      setFetch(true);
      setOpen(!open);
    });
  };

  const updateTask = (id) => {
    api.patch(`${id}/`).then(() => {
      setFetch(true);
    });
  };

  return (
    <Card sx={card}>
      <CardContent sx={text}>
        <Typography variant="h6" color="text.secondary">
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(task.date).toUTCString().slice(0, -7)}
        </Typography>
      </CardContent>
      <Button
        variant="outlined"
        color={task.completed ? "success" : "error"}
        sx={{ marginBottom: "15px", minWidth: "98.94px" }}
        onClick={() => updateTask(task.id)}
      >
        {task.completed ? <CheckIcon /> : <ClearIcon />}
      </Button>
      <Button
        variant="contained"
        sx={{ marginBottom: "15px" }}
        onClick={handleModal}
      >
        Remover
      </Button>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minHeight: "150px",
            minWidth: "350px",
            background: "#121212",
            border: "2px solid #000",
            boxShadow: "24",
            textAlign: "center",
            borderRadius: "4px",
            color: "#ebebd5",
            padding: "10px",
          }}
        >
          <Typography sx={{ marginTop: "20px" }}>Remover Tarefa?</Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ marginTop: "20px" }}
            onClick={() => removeTask(task.id)}
          >
            Confirmar
          </Button>
        </div>
      </Modal>
    </Card>
  );
};

export default TaskCard;
