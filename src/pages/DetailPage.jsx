import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getInitialData, showFormattedDate } from "../utils/data";

const DetailPage = () => {

    const {state} = useLocation();
    const {id} = useParams();

    const initialData = getInitialData();
    const {notes} = state ? state : [];
    const filteredNotes = notes !== undefined ? notes.filter((note) => note.id === parseInt(id)) : initialData.filter((note) => note.id === parseInt(id))

    return (
        <>
            {
                filteredNotes.length === 0 ?
                <div className="container">
                    <div className="text-center">
                        <h1>Tidak ada catatan.</h1>
                    </div>
                </div>
                :
                filteredNotes.map((note) => (
                    <div className="container" key={note.id}>
                        <div className="notes-list" key={note.id}>
                            <h2>{note.title}</h2>
                            <p className="subtitle">{showFormattedDate(note.createdAt)}</p>
                            <p className="body">{note.body}</p>
                        </div>
                </div>
                ))
            }
        </>
    );
}

export default DetailPage;