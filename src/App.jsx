import { useState } from 'react';
import NoteForm from './components/noteForm';
import NoteList from './components/noteList';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: '', content: '', index: null });

  const saveNote = () => {
    if (!note.title || !note.content) return;
    const updatedNotes = [...notes];
    note.index !== null ? updatedNotes[note.index] = note : updatedNotes.push(note);
    setNotes(updatedNotes);
    setNote({ title: '', content: '', index: null });
  };

  const editNote = (i) => setNote({ ...notes[i], index: i });
  const deleteNote = (i) => setNotes(notes.filter((_, idx) => idx !== i));

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <div style={{ width: "400px" }}>
        <h2>My Notes</h2>
        <NoteForm note={note} setNote={setNote} saveNote={saveNote} />
        <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
      </div>
    </div>
  );  
}