import "./App.css";
import "./css/normalize.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FloatButton from "./components/FloatButton";
import Content from "./components/Content";

function App() {
  return (
    <div className="app">
      <div className="filter">
        <Header />
        <div style={{ height: "6em" }} />
        <main className="main">
          <Hero />
          <div style={{ height: "7em" }} />
          <Content />
          <FloatButton />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
