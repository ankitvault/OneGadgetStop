import "./ResponseMessage.css";
import ReactMarkdown from "react-markdown";

const ResponseMessage = ({ message }) => {
  return (
    <div className="response-message px-3 py-4 bg-opacity-50 bg-slate-100 rounded-md">
      <ReactMarkdown>{message}</ReactMarkdown>
    </div>
  );
};

export default ResponseMessage;
