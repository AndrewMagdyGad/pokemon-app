// class component
// functional component
import React from "react";
import Claculator from "./Calculator";

class App extends React.Component {
    render() {
        return <Claculator name="Ahmed" age={20} />;
    }
}

// function App() {
//   return <h1>Hello World</h1>; // JSX
// }

export default App;
