import  { useState } from 'react';
import { ChromePicker } from 'react-color';

const EventForm = ({ addEvent, resources }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');
  const [resourceId, setResourceId] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, color, resourceId, startDateTime, endDateTime });
    setTitle('');
    setColor('#000000');
    setResourceId('');
    setStartDateTime('');
    setEndDateTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mb-8">
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded"
      />
      <select
        value={resourceId}
        onChange={(e) => setResourceId(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded"
      >
        <option value="" disabled>Select Resource</option>
        {resources.map(resource => (
          <option key={resource.id} value={resource.id}>{resource.title}</option>
        ))}
      </select>
      <input
        type="datetime-local"
        value={startDateTime}
        onChange={(e) => setStartDateTime(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="datetime-local"
        value={endDateTime}
        onChange={(e) => setEndDateTime(e.target.value)}
        required
        className="p-2 border border-gray-300 rounded"
      />
      <ChromePicker
        color={color}
        onChangeComplete={(color) => setColor(color.hex)}
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Event</button>
    </form>
  );
};

export default EventForm;
