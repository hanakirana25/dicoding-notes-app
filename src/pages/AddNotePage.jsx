import React from "react";
import { addNote } from "../utils/data";
import NotesInput from "../components/NotesForm";

const AddNotePage = () => {

    function onAddNoteHandler(note) {
        addNote(note)
    }

    return(
        <div className="container">
            <NotesInput addNotes={onAddNoteHandler} />
        </div>
    )
}

export default AddNotePage;