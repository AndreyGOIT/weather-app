// import "./App.css";
import { Container } from "@chakra-ui/react";
import Weather from "./Components/Weather/Weather";

function App() {
  return (
    // <div className="App">
    <Container maxW="2xl" bg="blue.600" centerContent>
      Weather App
      <Weather />
    </Container>
    // </div>
  );
}

export default App;
