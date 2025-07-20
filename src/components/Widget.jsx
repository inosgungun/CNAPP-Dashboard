import React from 'react';

const Widget = ({ data, onRemove }) => {
  return (
    <div className="bg-white p-4 rounded shadow relative">
      <button 
        className="absolute top-2 right-3 text-red-500 text-lg font-bold"
        onClick={onRemove}
      >
        ×
      </button>
      <h3 className="text-lg font-semibold mb-1">{data.name}</h3>
      <p className="text-sm text-gray-700">{data.content}</p>
    </div>
  );
};

export default Widget;
