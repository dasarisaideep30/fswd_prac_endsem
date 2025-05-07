export default function NoteList({ notes, editNote, deleteNote }) {
    return notes.map((note, i) => (
      <div key={i} className="note">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick={() => editNote(i)}>Edit</button>
        <button onClick={() => deleteNote(i)} style={{ marginLeft: 10 }}>Delete</button>
      </div>
    ));
  }  