import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import TasksGrid from "../TasksGrid";
import FormTask from "../FormTask";
import { useState } from "react";

const Dashboard = () => {
  const [fetch, setFetch] = useState(false);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        background: "#fff",
        marginTop: "30px",
        borderRadius: "4px",
        minHeight: "100vh",
        alignContent: "flex-start",
      }}
    >
      <Typography sx={{ fontSize: "1.6rem", width: "100%", margin: "15px 0" }}>
        Dashboard
      </Typography>
      <TasksGrid fetch={fetch} setFetch={setFetch} />
      <FormTask setFetch={setFetch} />
    </Container>
  );
};

export default Dashboard;
