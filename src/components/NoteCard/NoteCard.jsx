import './NoteCard.css';

export default function NoteCard({ note }) {
  const date = new Date(note.createdAt);
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
  
  return(
    <div className="Container">
      <div className="Note">
        <div className="Content">{note.text}</div>
        <p className="Timestamp"><span className="Label">Created:</span> {date.toLocaleDateString(undefined, dateOptions)}</p>
      </div>
    </div>
  );
}