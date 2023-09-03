import React from "react";
// import { addNote } from "../utils/data";
import NotesInput from "../components/NotesForm";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/api";

const AddNotePage = () => {

    const navigate = useNavigate();

    async function onAddNoteHandler(note) {
        await addNote(note);
        navigate('/');
      }

    return(
        <div className="container">
            <NotesInput addNotes={onAddNoteHandler} />
        </div>
    )
}

export default AddNotePage;