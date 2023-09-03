import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils/data";
import { getNote } from "../utils/api";

const DetailPage = () => {

    const {id} = useParams();

    const [note, setNote] = useState([]);

    async function fecthDetailNote(){
        const { data } = await getNote(id);
        setNote(data ? data : []);
    }

    useEffect(() => {
        fecthDetailNote();
    }, []);

    return (
        <>
            {
                note.length === 0 ?
                <div className="container">
                    <div className="text-center">
                        <h1>Tidak ada catatan.</h1>
                    </div>
                </div>
                :
                <div className="container">
                    <div className="notes-list">
                        <h2>{note.title}</h2>
                        <p className="subtitle">{showFormattedDate(note.createdAt)}</p>
                        <p className="body">{note.body}</p>
                    </div>
                </div>
            }
        </>
    );
}

export default DetailPage;