export default function NoteCard({ note }) {
  const date = new Date(note.createdAt);
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
  
  return(
    <div>
      <div>{note.text}</div>
      <p>Created: {date.toLocaleDateString(undefined, dateOptions)}</p>
    </div>
  );
}