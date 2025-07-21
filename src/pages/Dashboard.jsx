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
      updatedData[category] = [...updatedData[category], widgetToAdd];
    }
  }

  setDashboardData(updatedData);
};


  return (
    <div className="p-4 bg-gray-400 min-h-screen w-full flex flex-col">

      <Header/>

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
            className="bg-blue-600 text-white px-4 py-1 rounded"
            onClick={() => {
              setSelectedCategory("");
              setShowSidebar(true);
            }}
          >
            + Add Widget
          </button>
        </div>
      </div>

      {Object.entries(dashboardData).map(([category, widgets]) => (
        <div key={category} className="mb-8 px-4">
          <div className="text-md font-semibold mb-2">{category}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {widgets
            .map((widget) => (
              <Widget
                key={widget.id}
                data={widget}
                onRemove={() => handleRemove(category, widget.id)}
              />
            ))}
            <div
              className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded h-32 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSelectedCategory(category);
                setShowModal(true);
              }}
            >
              + Add Widget
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
