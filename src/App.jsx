import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";

// [Values.js Library](https://github.com/noeldelgado/values.js/blob/master/README.md)

const App = () => {
  const [colors, setColors] = useState(new Values('#12729b').all(10))
  return (
    <main>
      <ToastContainer position="top-center" />
      <Form setColors={setColors} />
      <ColorList  colors={colors}/>
    </main>
  );
};
export default App;
