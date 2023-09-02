import React from "react";
import { showFormattedDate } from "../utils/data";

const NotesList = ({notes, onDelete}) => {

    return(
        <>
            {
                notes.length === 0 ?
                <h1>
                    Tidak ada catatan.
                </h1>
                :
                notes.map((note) => (
                    <div className="notes-list">
                        <div className="spread-element">
                            <h4>{note.title}</h4>
                            <button className="delete-button" onClick={() => onDelete(note.id)}>X</button>
                        </div>
                        <p className="subtitle">{showFormattedDate(note.createdAt)}</p>
                        <p className="body">{note.body}</p>
                    </div>
                ))
            }
        </>
    )
}

export default NotesList;