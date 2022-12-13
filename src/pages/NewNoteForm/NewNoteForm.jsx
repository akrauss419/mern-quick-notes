import { useState } from 'react';
import './NewNoteForm.css';

export default function NewNotForm({ addNote }) {
  const [newNote, setNewNote] = useState({
    text: ""
  });

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote({
      text: ""
    });
  }

  return(
    <>
      <h1>Add a Note</h1>
      <form onSubmit={handleAddNote} className="NoteForm">
        <textarea
          value={newNote.text}
          onChange={(evt) =>
            setNewNote({ text: evt.target.value })
          }
          placeholder="New Note"
          required
          className="Input"
        />
        <button type="submit" className="AddNote">Add Note</button>
      </form>
    </>
  );
}