import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5"

const NotesList = ({notes, onDelete}) => {

    const navigate = useNavigate();

    return(
        <>
            {
                notes.length === 0 ?
                <h1>
                    Tidak ada catatan.
                </h1>
                :
                notes.map((note) => (
                    <div className="notes-list" key={note.id} >
                        <div className="spread-element">
                            <h4 onClick={()=> navigate(`/notes/detail/${note.id}`, { state: { notes: notes } })}>{note.title} <IoArrowForwardOutline /> </h4>
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

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
  }

export default NotesList;