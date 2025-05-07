import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: '', content: '', index: null });

  const saveNote = () => {
    if (!note.title || !note.content) return;
    const updatedNotes = [...notes];
    note.index !== null
      ? updatedNotes[note.index] = note
      : updatedNotes.push(note);
    setNotes(updatedNotes);
    setNote({ title: '', content: '', index: null });
  };

  const editNote = (i) => {
    setNote({ ...notes[i], index: i });
  };

  const deleteNote = (i) => {
    setNotes(notes.filter((_, idx) => idx !== i));
  };

  return (
    <div className="app">
      <h2>Note Taking App</h2>
      <NoteForm note={note} setNote={setNote} saveNote={saveNote} />
      <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </div>
  );
}