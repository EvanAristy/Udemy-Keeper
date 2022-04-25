import logo from './logo.svg';
import './App.css';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './notes';

function App() {
  return (
    <div className="App">
      <Header />
      {
        notes.map(note => (
          <Note
            key = {note.key}
            title = {note.title}
            content = {note.content}
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
