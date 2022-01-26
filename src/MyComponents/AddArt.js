import React, { useState } from 'react';

export const AddArt = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");

        }
        else {
            props.addArt(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container'>
            <h3>Add the Art Work</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="Text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="Title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Describtion</label>
                    <input type="Text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add ArtWork</button>
            </form>
        </div>
    )
}
