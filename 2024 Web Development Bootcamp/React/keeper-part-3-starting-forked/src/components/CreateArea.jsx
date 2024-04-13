import React from "react";

function CreateArea(props) {

  const [note, setNote] = React.useState({
    title: "",
    contnent: ""
  });

  function UpdateNote(event){
    const {name, value} = event.target;

    setNote(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.onAdd(note);
    setNote(() => {
      return {  title: "",
      content: ""}
    })

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
          name="title" 
          onChange = {UpdateNote}
          placeholder="Title"
          value = {note.title}
        />
        <textarea
          name="content"
          onChange = {UpdateNote}
          placeholder="Take a note..."
          value = {note.content}
          rows="3" 
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
