import { useState } from "react";
import { PenSquare, Check, X } from "lucide-react";

export default function ChecklistTitle() {
  const [title, setTitle] = useState(
    localStorage.getItem("title") || "Checklist"
  );
  const [editing, setEditing] = useState(false);

  function onSaveTitle(title) {
    if (!title.trim()) {
      return;
    }
    setTitle(title);
    localStorage.setItem("title", title);
    setEditing(false);
  }

  return (
    <>
      <div className="flex items-center gap-2 justify-center bg-bg-card text-tx-title rounded-md p-1">
        {editing ? (
          <>
            <form>
              <input
                type="text"
                id="titleInput"
                name="titleInput"
                placeholder={title}
                className="w-60 mr-2 border-b-2 border-tx-title/50 font-bold text-tx-title text-2xl focus:border-b-2 focus:outline-none"
                required
                autoFocus
              ></input>
              <button
                className="h-4 mr-2 opacity-75 hover:cursor-pointer"
                onClick={() => setEditing(false)}
              >
                <X className="h-5 text-bg-del" />
              </button>
              <button
                type="submit"
                className="h-4 opacity-75 hover:cursor-pointer"
                onClick={(e) => {
                  onSaveTitle(document.getElementById("titleInput").value);
                }}
              >
                <Check className="h-5" />
              </button>
            </form>
          </>
        ) : (
          <>
            <span className="text-2xl font-bold">{title}</span>
            <button
              className="h-4 opacity-75 hover:cursor-pointer"
              onClick={() => setEditing(true)}
            >
              <PenSquare className="h-5" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
