import React from "react";
import PropTypes from 'prop-types';


class NotesInput extends React.Component {

    constructor(props) {
        super(props);
        
        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        }
        
        onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
            title: event.target.value,
            }
        });
        }
        
        onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
            body: event.target.value,
            }
        });
        }
        
        onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
        }
    
     render() {
       return (
         <form onSubmit={this.onSubmitEventHandler}>
           <div className="form-container">
                <h4>Tambah Catatan</h4>
                <input type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Judul" />
                <textarea type="text" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Catatan.." rows={4} />
                <div className="right-element">
                    <button type="submit" className="submit-button">Tambah</button>
                </div>
            </div>
         </form>
       )
    }
}

NotesInput.propTypes = {
    addNotes: PropTypes.func.isRequired,
}

export default NotesInput;