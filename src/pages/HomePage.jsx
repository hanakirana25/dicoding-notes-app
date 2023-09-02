import React from "react";
import { deleteNote, getInitialData } from "../utils/data";
import { IoAddSharp } from "react-icons/io5"
import NotesList from "../components/NotesList";
import NotesInput from "../components/NotesForm";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
      
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
    }

    onDeleteHandler(id) {
        // const notes = this.state.notes.filter(data => data.id !== id);
        deleteNote(id);

        // this.setState({ notes });
        this.setState(() => {
            return {
                notes: getInitialData(),
            }
          });
    }
    
    onAddHandler({ title, body }) {
        this.setState((prevState) => {
          return {
             notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: new Date(),
                archived: false
              }
            ]
          }
        });
    }

    render() {
        return (
            <div className="container">
                <Link to="/notes/add"><button className="submit-button" ><IoAddSharp/> Tambah Catatan</button></Link>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }

}

export default HomePage;