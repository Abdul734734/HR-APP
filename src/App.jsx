
import './App.css'
import Header from './Header'
import Person from './Person'
import Footer from './Footer'


function App() {


  return (
    <>
    <Header></Header>
    <Person name="CY Ganderton" title="Web Developer" salary={5000} phone={+358417906745} email="user@mail.com" animal="Cat"></Person>
    <Person name="CY Ganderton" title="Web Developer" salary={5000} phone={+358417906745} email="user@mail.com" animal="Cat"></Person>
    <Footer></Footer>
     </>
      
    
  )
}

export default App
