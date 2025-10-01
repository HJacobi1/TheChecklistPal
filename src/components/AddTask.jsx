/* eslint-disable react/prop-types */

import { useState } from "react";

function AddTask({ onAddItemClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col p-6 space-y-4 bg-orange-200 rounded-md text-xl">
      <h3 className="text-2xl text-center font-bold text-orange-950 ">
        Your Checklist
      </h3>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
        className="w-full bg-yellow-900 text-orange-200 text-left p-2 rounded-md"
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
        className="w-full bg-yellow-900 text-orange-200 text-left p-2 rounded-md"
      />
      <button
        onClick={() => {
          onAddItemClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="p-2 bg-yellow-900 text-orange-200  rounded-md cursor-pointer hover:bg-yellow-950 transition-all duration-200"
      >
        Add Item
      </button>
    </div>
  );
}

export default AddTask;
