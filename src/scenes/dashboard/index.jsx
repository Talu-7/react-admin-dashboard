import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const topics = [
  "Differentiation",
  "Integration",
  "Trigonometry",
  "Complex Numbers",
  "Matrices",
  "Vectors",
  "Statistics",
  "Proof",
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = (topic) => {
    navigate("/chat", { state: { prefill: `Explain the topic: ${topic}` } });
  };

  return (
    <Box p={4}>
      <Typography variant="h3" mb={4}>A-Level Maths Topics</Typography>
      <Grid container spacing={3}>
        {topics.map((topic, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
              onClick={() => handleClick(topic)}
            >
              <CardContent>
                <Typography variant="h6">{topic}</Typography>
                <Button sx={{ mt: 1 }} variant="outlined">Ask about this</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
