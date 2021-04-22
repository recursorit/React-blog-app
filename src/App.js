import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainBlog from './components/MainBlog';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
      <MainBlog />
      </div>
      <Footer />
  
    </div>
  );
}

export default App;
