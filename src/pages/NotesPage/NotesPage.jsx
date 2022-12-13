import { checkToken } from '../../utilities/users-service';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import NoteCard from '../../components/NoteCard/NoteCard';
import './NotesPage.css';

export default function NotesPage({ notes, addNote }) {

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <div>
        {<NewNoteForm addNote={addNote} />}
      </div>
      <hr />
      <h1>All Notes</h1>
      <div>
        {notes.length === 0 ? (<h2>No Notes Yet!</h2>) : notes.map((n, idx) => (
          <NoteCard note={n} index={idx} />
        ))}
      </div>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}