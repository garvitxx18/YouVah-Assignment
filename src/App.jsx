import "./App.css";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Students from "./components/Students";
import Question from "./components/Question";
import Footer from "./components/Footer";
import KeyPoints from "./components/KeyPoints";

function App() {
  return (
    <div className="rootDiv">
      <Header />
      <KeyPoints />
      <Teachers />
      <Students />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
