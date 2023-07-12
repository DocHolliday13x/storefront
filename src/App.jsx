import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Footer from './Components/Footer/index';
import SimpleCart from './Components/SimpleCart';
import './App.scss';


function App() {


  return (
    <>
      <div className="content">
        <Header />
        <Categories />
        <SimpleCart />
        <Products />
      </div>
      <Footer />
    </>
  )
}


export default App;



