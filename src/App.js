import "./css/App.scss";
import "./css/reset.css";
import Creative from "./components/Creative";
import { creatives } from "./creative.json";

const App = () => {
  return (
    <div className="App">
      <header className="header">Creative List</header>
      <div className="contents">
        {creatives.map((_) => {
          return (
            <div key={_.title}>
              <h1 className="title">{_.title}</h1>
              <p className="discription">{_.discription}</p>
              <div className="creative-card-area">
                {_.contents.map((_) => {
                  return <Creative creative={_} key={_.title} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
