import logo from './logo.svg';
import './App.css';
import Bookshelf from './components/BookShelf';
import BookInfo from './components/BookInfo';

function App() {
  return (
    <div className="App">
      <h1>Book App Boi</h1>
      <BookInfo />
      <Bookshelf />
      
    </div>
  );
}

export default App;
