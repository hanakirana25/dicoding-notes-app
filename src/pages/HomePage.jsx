import React from "react";
import { IoAddSharp } from "react-icons/io5"
import { FiLogOut } from 'react-icons/fi';
import NotesList from "../components/NotesList";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { deleteNote, getActiveNotes } from "../utils/api";
import ToggleTheme from "../components/ToggleTheme";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }
      
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getActiveNotes();
        
        this.setState(() => {
          return {
            notes: data
          }
        })
      }

    async onDeleteHandler(id) {
        await deleteNote(id);

        const { data  } = await getActiveNotes();
        this.setState(() => {
            return {
                notes: data,
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
                <div className="spread-element">
                    <Link to="/notes/add"><button className="submit-button" ><IoAddSharp/> Tambah Catatan</button></Link>
                    <div>
                        <ToggleTheme />
                        <button className="basic-button" onClick={this.props.logout}><FiLogOut /> Keluar</button>
                    </div>
                </div>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }

}

HomePage.propTypes = {
    logout: PropTypes.func.isRequired,
}


export default HomePage;