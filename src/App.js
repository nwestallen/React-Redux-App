import logo from './logo.svg';
import './App.css';
import Bookshelf from './components/BookShelf';
import BookInfo from './components/BookInfo';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Your Virtual Bookshelf</h1>
      </div>
      <BookInfo />
      <Bookshelf />
    </div>
  );
}

export default App;
