const Widget = ({ data, onRemove }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
        <h3 className="font-medium text-gray-800">{data.name}</h3>
        <button 
          onClick={onRemove}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-3">{data.content}</p>
        <div className="space-y-2">
          {data.metrics?.map((metric, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-600">{metric.label}</span>
              <span className={`font-medium ${
                metric.status === 'critical' ? 'text-red-600' :
                metric.status === 'warning' ? 'text-yellow-600' :
                'text-gray-800'
              }`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widget;