function addItem() {

}

function AddTask() {
  return (
    <div className="add-task">
      <h2>Your Checklist</h2>
      <input type="text" id="new-item-input" placeholder="Add a new item..." />
      <button id="add-item-button" onClick={addItem}>Add</button>
    </div>
  );
}

export default AddTask;
