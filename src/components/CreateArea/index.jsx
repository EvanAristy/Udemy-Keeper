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

    const [expand, setExpand] = useState(false)

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

    function handleClick(){
        setExpand(true)
    }

    return (
        <div>
            <form onClick={handleClick} className="create-note">
                
                {
                    expand
                    ? 
                    <div>
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
                    </div>
                    : 
                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Take a note..."
                        rows="1"
                    />
                }
                                
            </form>
        </div>
    );
};

export default CreateArea;
