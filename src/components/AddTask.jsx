import { useState } from "react";

function AddTask({ taskTitle, taskDescription, buttonLabel, onAddItemClick }) {
  const [title, setTitle] = useState(taskTitle ?? "");
  const [description, setDescription] = useState(taskDescription ?? "");

  return (
    <div className="flex flex-col p-6 space-y-4 bg-bg-card rounded-md text-xl">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
        className="w-full bg-bg-comp text-tx-card text-left p-2 rounded-md"
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description (optional)"
        className="w-full bg-bg-comp text-tx-card text-left p-2 rounded-md"
      />
      <button
        onClick={() => {
          onAddItemClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="p-2 bg-bg-comp text-tx-card  rounded-md cursor-pointer hover:bg-bg-comp-hover transition-all duration-200"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default AddTask;
