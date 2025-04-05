import React, { useEffect } from "react";
import ChatBox from "../../components/ChatBox";
import { useLocation } from "react-router-dom";

const ChatPage = () => {
  const location = useLocation();
  const prefill = location.state?.prefill;

  useEffect(() => {
    if (prefill) {
      const input = document.querySelector("input");
      if (input) input.value = prefill;
    }
  }, [prefill]);

  return <ChatBox />;
};

export default ChatPage;
