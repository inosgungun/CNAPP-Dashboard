import React, { useState } from "react";
import { TABS, WIDGETS } from "../constants/Widgets.js";

const WidgetSidebar = ({ activeWidgets, onToggleWidget, onClose }) => {
  const [activeTab, setActiveTab] = useState("CSPM");
  const handleConfirm = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Widget Library</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200 "
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {WIDGETS[activeTab].map(widget => (
          <div
            key={widget.id}
            className={`p-3 rounded-lg border transition-colors ${(activeWidgets[activeTab] || []).some(w => w.id === widget.id)
              ? "border-blue-300 bg-blue-50"
              : "border-gray-200 hover:bg-gray-50"
              }`}
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500"
                checked={(activeWidgets[activeTab] || []).some(w => w.id === widget.id)}
                onChange={() => onToggleWidget(activeTab, widget.id)}
              />
              <div>
                <div className="font-medium text-gray-800">{widget.name}</div>
                <div className="text-xs text-gray-500 mt-1">{widget.description || "No description available"}</div>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200">
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          onClick={handleConfirm}
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default WidgetSidebar;
