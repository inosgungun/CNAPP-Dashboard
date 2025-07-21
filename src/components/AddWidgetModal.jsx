import React, { useState } from "react";

const AddWidgetModal = ({ category, onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [metrics, setMetrics] = useState([{ label: "", value: "", status: "" }]);

  const handleSubmit = () => {
    if (!name.trim()) return alert("Widget name is required!");

    const newWidget = {
      id: `${category}-${Date.now().toString()}`,
      name,
      content: content || "No content provided",
      metrics: metrics.filter(m => m.label.trim() && m.value.trim())
    };

    onAdd(category, newWidget);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setContent("");
    setMetrics([{ label: "", value: "", status: "" }]);
  };

  const handleMetricChange = (index, field, value) => {
    const updatedMetrics = [...metrics];
    updatedMetrics[index][field] = value;
    setMetrics(updatedMetrics);
  };

  const addMetricField = () => {
    setMetrics([...metrics, { label: "", value: "", status: "" }]);
  };

  const removeMetricField = (index) => {
    if (metrics.length > 1) {
      const updatedMetrics = [...metrics];
      updatedMetrics.splice(index, 1);
      setMetrics(updatedMetrics);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Create New Widget {category && `for ${category}`}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Widget Name</label>
              <input
                type="text"
                placeholder="e.g. Cloud Risk Assessment"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Brief description of the widget"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Metrics</label>
                <button
                  type="button"
                  onClick={addMetricField}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  + Add Metric
                </button>
              </div>

              <div className="space-y-2">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex space-x-2 items-end">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Label"
                        value={metric.label}
                        onChange={(e) => handleMetricChange(index, 'label', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Value"
                        value={metric.value}
                        onChange={(e) => handleMetricChange(index, 'value', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                      />
                    </div>
                    <div className="w-24">
                      <select
                        value={metric.status}
                        onChange={(e) => handleMetricChange(index, 'status', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                      >
                        <option value="">Status</option>
                        <option value="healthy">Healthy</option>
                        <option value="warning">Warning</option>
                        <option value="critical">Critical</option>
                      </select>
                    </div>
                    {metrics.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMetricField(index)}
                        className="text-gray-400 hover:text-red-500 p-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-3 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;