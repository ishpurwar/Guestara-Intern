import  { useState } from 'react';

const ResourceForm = ({ addResource, deleteResource, resources }) => {
  const [resourceTitle, setResourceTitle] = useState('');

  const handleAddResource = (e) => {
    e.preventDefault();
    if (resourceTitle) {
      addResource({ title: resourceTitle });
      setResourceTitle('');
    }
  };

  return (
    <div className="resource-form mb-8">
      <form onSubmit={handleAddResource} className="flex flex-col items-center space-y-4 mb-8">
        <input
          type="text"
          placeholder="Resource Title"
          value={resourceTitle}
          onChange={(e) => setResourceTitle(e.target.value)}
          required
          className="px-4 py-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Resource</button>
      </form>
      
    </div>
  );
};

export default ResourceForm;
