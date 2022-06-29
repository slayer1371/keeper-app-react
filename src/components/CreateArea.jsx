import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setnote((prevnote) => {
      return {
        ...prevnote,
        [name]: value
      };
    });
  }

  function submitnote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handlechange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button style={{  }} onClick={submitnote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
