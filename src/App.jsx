
import './App.css'
import Header from './Header'
import Person from './Person'
import Footer from './Footer'


function App() {


  return (
    <>
    <Header></Header>
    <Person name="abdul" title="cashier" salary={1000} phone={+35846308745} email="abdul@mail.com" animal="chicken"></Person>
    <Person name="basu" title="Web Developer" salary={5000} phone={+35844546465} email="basu@mail.com" animal="dog"></Person>
    <Footer></Footer>
     </>
      
    
  )
}

export default App
