import React, { useState } from "react";
import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";

const ChatBox = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/chat", { question });
      setResponse(res.data.answer);
    } catch (err) {
      console.error(err);
      setResponse("Oops! Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>Ask your A-Level Maths Question</Typography>
      <TextField
        fullWidth
        label="Type your question"
        variant="outlined"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && askQuestion()}
      />
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={askQuestion}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Ask"}
      </Button>
      {response && (
        <Box mt={3}>
          <Typography variant="subtitle1">AI Response:</Typography>
          <Typography variant="body1" whiteSpace="pre-wrap">{response}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ChatBox;
