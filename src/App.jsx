import './App.css'
import './css/normalize.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FloatButton from './components/FloatButton'
import Content from './components/Content'

function App() {

  return (
    <div className='app'>
      <Header />
      <div style={{height: "7em"}} />
      <main className='main'>
        <Hero />
        <div style={{height: "7em"}} />
        <Content />
        <FloatButton />
        <Footer />
      </main>
    </div>
  )
}

export default App
