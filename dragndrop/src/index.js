import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// https://github.com/atlassian/react-beautiful-dnd/blob/master/README.md#documentation-
// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md
// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md
