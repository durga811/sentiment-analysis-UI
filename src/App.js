import "./App.css";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Review Sentiment Analysis</h1>
        </header>
        <main>
          <ReviewList />
        </main>
      </div>
    </>
  );
}

export default App;
