export default function NoteForm({ note, setNote, saveNote }) {
    return (
      <form onSubmit={(e) => { e.preventDefault(); saveNote(); }} className="note-form">
        <input
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          placeholder="Title"
          required
        /><br />
        <textarea
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
          placeholder="Content"
          required
        /><br />
        <button type="submit">{note.index !== null ? 'Update' : 'Add'} Note</button>
      </form>
    );
  }  