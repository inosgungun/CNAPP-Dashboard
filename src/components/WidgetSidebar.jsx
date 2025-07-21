import React, { useState } from "react";
import { TABS, WIDGETS } from "../constants/Widgets.js";

const WidgetSidebar = ({ activeWidgets, onToggleWidget, onClose }) => {
  const [activeTab, setActiveTab] = useState("CSPM");
  const handleConfirm = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 right-0 h-full w-[350px] bg-white shadow-xl z-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Add Widget</h2>
        <button onClick={onClose} className="text-xl font-bold">×</button>
      </div>

      <div className="flex gap-3 mb-4">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-1 px-3 rounded-full text-sm ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-3 max-h-[400px] overflow-auto">
        {WIDGETS[activeTab].map(widget => (
          <label key={widget.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={(activeWidgets[activeTab] || []).some(w => w.id === widget.id)}
              onChange={() => onToggleWidget(activeTab, widget.id)}
            />
            {widget.name}
          </label>
        ))}
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <button className="px-4 py-2 border rounded" onClick={onClose}>
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default WidgetSidebar;
