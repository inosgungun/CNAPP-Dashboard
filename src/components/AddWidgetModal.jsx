import React, { useState } from "react";

const AddWidgetModal = ({ category, onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return alert("Widget name is required!");

    const newWidget = {
      id: Date.now().toString(), 
      name,
      content: content || "No content"
    };

    onAdd(category, newWidget);
    setName("");
    setContent("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">
          Add Widget {category ? `to "${category}"` : ""}
        </h2>
        
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        
        <textarea
          placeholder="Widget Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="3"
          className="w-full border p-2 mb-4 rounded"
        />

        <div className="flex justify-end space-x-2">
          <button 
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
