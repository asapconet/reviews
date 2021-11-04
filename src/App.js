import "./App.css";
import Reviews from "./reviews";

function App() {
  return (
    <main>
      <section>
        <div className='review-card'>
          <h1>Our reviews</h1>
          <div className='underlinings'></div>
          <Reviews />
        </div>
      </section>
    </main>
  );
}

export default App;
