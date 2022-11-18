import "./styles.css";
import Welcome from "./welcome";
import wrapper from "./wrapper";
export default function App() {
  const Hoc = wrapper(Welcome, "title");
  return (
    <div className="App">
      <Hoc />
    </div>
  );
}
