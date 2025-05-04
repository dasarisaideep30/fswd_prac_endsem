export default function NoteList({ notes, editNote, deleteNote }) {
    return notes.map((note, i) => (
      <div key={i} style={{ border: '1px solid #aaa', margin: 10, padding: 10 }}>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick={() => editNote(i)}>Edit</button>
        <button onClick={() => deleteNote(i)} style={{ marginLeft: 10 }}>Delete</button>
      </div>
    ));
  }  