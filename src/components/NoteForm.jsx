export default function NoteForm ({note,setNote,saveNote}) {
  return (
    <form onSubmit={(e)=>{e.preventDefault();saveNote();}}>
      <input
        value={note.title}
        onChange={(e)=>setNote({...note,title:e.target.value})}
        placeholder="title"
        required
      /><br />
      <textarea
        value={note.content}
        onChange={(e)=>setNote({...note,content:e.target.value})}
        placeholder="content"
        required
      /><br />
      <button type='submit'>{note.index !== null ? 'update':'add'} note </button>
    </form>
  )
}