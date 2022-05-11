import React, { useState } from "react";
// mui
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(e) {
        e.preventDefault()
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
    }

    return (
        <div>
            <form className="create-note">
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <Zoom in={true}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
};

export default CreateArea;
