import React, { useState } from "react";
import Widget from "../components/Widget";
import AddWidgetModal from "../components/AddWidgetModal";
import initialData from "../data/initialData";
import WidgetSidebar from "../components/WidgetSidebar";
import Header from "../components/Header";
import { WIDGETS } from "../constants/Widgets.js";


const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleAdd = (category, widget) => {
    const updated = { ...dashboardData };
    updated[category].push(widget);
    setDashboardData(updated);
    setShowModal(false);
  };

  const handleRemove = (category, id) => {
    const updated = { ...dashboardData };
    updated[category] = updated[category].filter((w) => w.id !== id);
    setDashboardData(updated);
  };

  const toggleWidget = (category, widgetId) => {
  const isAlreadyVisible = dashboardData[category].some(w => w.id === widgetId);
  const updatedData = { ...dashboardData };

  if (isAlreadyVisible) {
    updatedData[category] = updatedData[category].filter(w => w.id !== widgetId);
  } else {
    const widgetToAdd = WIDGETS[category].find(w => w.id === widgetId);
    if (widgetToAdd) {
      const existingWidget = initialData[category].find(w => w.id === widgetId);
      updatedData[category] = [
        ...updatedData[category],
        existingWidget || widgetToAdd
      ];
    }
  }

  setDashboardData(updatedData);
};


  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">

      <Header />

      <main className="flex-1 p-6 bg-blue-50">
        {showSidebar && (
          <WidgetSidebar
            activeWidgets={dashboardData}
            onToggleWidget={toggleWidget}
            onClose={() => setShowSidebar(false)}
          />
        )}

        <div className="p-4 flex justify-between items-center">
          <div className="text-lg font-semibold">CNAPP Dashboard</div>
          <div>
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors"
              onClick={() => {
                setSelectedCategory("");
                setShowSidebar(true);
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Widget
            </button>
          </div>
        </div>

        {Object.entries(dashboardData).map(([category, widgets]) => (
          <div key={category} className="mb-8">
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-lg font-semibold text-gray-800 capitalize">{category}</h2>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {widgets.length} active
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {widgets
                .map((widget) => (
                  <Widget
                    key={widget.id}
                    data={widget}
                    onRemove={() => handleRemove(category, widget.id)}
                  />
                ))}
              <div
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => {
                  setSelectedCategory(category);
                  setShowModal(true);
                }}
              >
                <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-gray-500 font-medium">Add Widget</span>
              </div>
            </div>
          </div>
        ))}

        {showModal && (
          <AddWidgetModal
            category={selectedCategory}
            onAdd={handleAdd}
            onClose={() => setShowModal(false)}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
