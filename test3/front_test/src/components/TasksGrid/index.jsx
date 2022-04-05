import TaskCard from "../TaskCard";
import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import api from "../../services";

const TasksGrid = ({ fetch, setFetch }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    api.get("").then((res) => setTasks(res.data));
  };

  useEffect(() => {
    getTasks();
    setFetch(false);
  }, [fetch]);

  return (
    <Container sx={{ margin: "0px", maxWidth: "750px !important" }}>
      <Typography
        sx={{ fontSize: "1.2em", margin: "15px 0", fontWeight: "bold" }}
      >
        Tarefas
      </Typography>
      <Grid container spacing={3}>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <Grid item xs={4} key={task.id}>
              <TaskCard task={task} setFetch={setFetch} />
            </Grid>
          ))
        ) : (
          <Typography sx={{ margin: "auto", marginTop: "50px" }}>
            Sem tarefas
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default TasksGrid;
