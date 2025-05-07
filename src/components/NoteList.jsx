export default function NoteList ({notes,editNote,deleteNote}) {
  return notes.map((note,i)=>{
    return(
      <div key={i}>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick={()=>editNote(i)}>edit</button>
        <button onClick={()=>deleteNote(i)}>delete</button>
      </div>
    )
  })
}