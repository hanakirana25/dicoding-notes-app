import React from "react";
import Navbar from "./layouts/Navbar";
import { getInitialData } from "../utils/data";
import NotesList from "./NotesList";
import NotesForm from "./NotesForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
      
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(data => data.id !== id);
        this.setState({ notes });
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
          <div>
            <Navbar />
            <div className="container">
                <NotesForm addNotes={this.onAddHandler} />
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
          </div>
        );
    }

}

export default App;