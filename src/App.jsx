import { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

Modal.setAppElement('#root');

function App() {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([
    { id: '1', title: 'Event 1', start: '2024-08-01T10:00:00', end: '2024-08-04T12:00:00', resourceId: 'a', color: '#ffcccc' },
    { id: '2', title: 'Event 2', start: '2024-08-02T13:00:00', end: '2024-08-03T15:00:00', resourceId: 'b', color: '#ccffcc' },
    { id: '3', title: 'Event 3', start: '2024-08-03T09:00:00', end: '2024-08-06T10:30:00', resourceId: 'c', color: '#ccccff' },
    { id: '4', title: 'Event 4', start: '2024-08-04T11:00:00', end: '2024-08-06T13:00:00', resourceId: 'd', color: '#ffffcc' },
    { id: '5', title: 'Event 5', start: '2024-08-05T14:00:00', end: '2024-08-09T16:00:00', resourceId: 'e', color: '#ffccff' },
    { id: '6', title: 'Event 6', start: '2024-08-06T10:00:00', end: '2024-08-07T12:00:00', resourceId: 'f', color: '#ccffff' },
    { id: '7', title: 'Event 7', start: '2024-08-07T13:00:00', end: '2024-08-09T15:00:00', resourceId: 'g', color: '#ffebcc' },
    { id: '8', title: 'Event 8', start: '2024-08-08T09:00:00', end: '2024-08-12T10:30:00', resourceId: 'h', color: '#d1c4e9' },
    { id: '9', title: 'Event 9', start: '2024-08-09T11:00:00', end: '2024-08-13T13:00:00', resourceId: 'i', color: '#c8e6c9' },
    { id: '10', title: 'Event 10', start: '2024-08-10T14:00:00', end: '2024-08-12T16:00:00', resourceId: 'j', color: '#ffccbc' },
  ]);
  const [resources, setResources] = useState([
    { id: 'a', title: 'Resource A' },
    { id: 'b', title: 'Resource B' },
    { id: 'c', title: 'Resource C' },
    { id: 'd', title: 'Resource D' },
    { id: 'e', title: 'Resource E' },
    { id: 'f', title: 'Resource F' },
    { id: 'g', title: 'Resource G' },
    { id: 'h', title: 'Resource H' },
    { id: 'i', title: 'Resource I' },
    { id: 'j', title: 'Resource J' },
    { id: 'k', title: 'Resource K' },
    { id: 'l', title: 'Resource L' },
    { id: 'm', title: 'Resource M' },
    { id: 'n', title: 'Resource N' },
    { id: 'o', title: 'Resource O' },
    { id: 'p', title: 'Resource P' },
    { id: 'q', title: 'Resource Q' },
    { id: 'r', title: 'Resource R' },
    { id: 's', title: 'Resource S' },
    { id: 't', title: 'Resource T' },
    { id: 'u', title: 'Resource U' },
    { id: 'v', title: 'Resource V' },
    { id: 'w', title: 'Resource W' },
    { id: 'x', title: 'Resource X' },
    { id: 'y', title: 'Resource Y' },
    { id: 'z', title: 'Resource Z' },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', color: '#000000', resourceId: '', startDateTime: '', endDateTime: '' });
  const [currentMonth, setCurrentMonth] = useState('');
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  useEffect(() => {
    updateMonthName();
  }, []);

  const updateMonthName = () => {
    const calendarApi = calendarRef.current.getApi();
    const currentDate = calendarApi.getDate();
    const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    setCurrentMonth(monthName);
  };

  const openModal = (arg) => {
    setNewEvent({ ...newEvent, startDateTime: arg.startStr, endDateTime: arg.endStr, resourceId: arg.resource.id });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setNewEvent({ title: '', color: '#000000', resourceId: '', startDateTime: '', endDateTime: '' });
  };

  const addEvent = (newEvent) => {
    const id = events.length + 1;
    const startDate = new Date(newEvent.startDateTime);
    const endDate = new Date(newEvent.endDateTime);
    setEvents([...events, {
      id: id.toString(),
      title: newEvent.title,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      resourceId: newEvent.resourceId,
      color: newEvent.color,
    }]);
    closeModal();
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const addResource = (newResource) => {
    const id = resources.length + 1;
    setResources([...resources, { id: id.toString(), title: newResource.title }]);
  };

  const deleteResource = (resourceId) => {
    setResources(resources.filter(resource => resource.id !== resourceId));
  };



  const handlePrevMonth = () => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    updateMonthName();
  };

  const handleNextMonth = () => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    updateMonthName();
  };

  const handleToday = () => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.today();
    updateMonthName();
  };

  const handleDateChange = (date) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(date);
    updateMonthName();
    setDatePickerOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  return (
    <div className="App p-14">
      <div className="mb-4 flex justify-between items-center">
        <div>
        <h1 className="text-2xl font-bold cursor-pointer" style={{color:'#007aff'}} onClick={() => setDatePickerOpen(!datePickerOpen)}>
          {currentMonth}
        </h1>
        {datePickerOpen && (
          <div style={{position:'absolute',zIndex:'4'}}>
          <DatePicker
          selected={new Date()}
          onChange={handleDateChange}
          inline
          />
          </div>
        )}
        </div>
        <div>
        <button onClick={handlePrevMonth} className="text-xl py-2 bg-white hover:bg-white  text-blue-500 rounded hover:text-blue-400 rounded ">{'<'}</button>
        <button onClick={handleToday} className="text-xl py-2 bg-white hover:bg-white  text-blue-500 rounded hover:text-blue-400 ">Today</button>
        <button onClick={handleNextMonth} className="text-xl py-2 bg-white hover:bg-white  text-blue-500 rounded hover:text-blue-400 rounded">{'>'}</button>
        </div>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[resourceTimelinePlugin, interactionPlugin]}
        initialView="resourceTimelineMonth"
        editable={true}
        droppable={true}
        selectable={true}
        events={events}
        resources={resources}
        dateClick={openModal}
        eventDrop={(info) => {
          const updatedEvents = events.map(event =>
            event.id === info.event.id
              ? {
                  ...event,
                  start: info.event.start.toISOString(),
                  end: info.event.end.toISOString(),
                  resourceId: info.newResource ? info.newResource.id : info.event.resourceId,
                }
              : event
          );
          setEvents(updatedEvents);
        }}
        eventResize={(info) => {
          const updatedEvents = events.map(event =>
            event.id === info.event.id
              ? { ...event, start: info.event.start.toISOString(), end: info.event.end.toISOString() }
              : event
          );
          setEvents(updatedEvents);
        }}
        headerToolbar={false}
        slotDuration="24:00:00"
        slotLabelFormat={{
          weekday: 'short',
          month: 'numeric',
          day: 'numeric',
          omitZeroMinute: false
        }}
        resourceLabelText="Resources"
        resourceAreaWidth="15%"
        contentHeight="auto"
        aspectRatio={2}
        scrollTime="00:00:00"
        eventContent={(arg) => (
          <div>
            <b>{arg.event.title}</b>
            <br />
            {new Date(arg.event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
            {new Date(arg.event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Event"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="mb-4">Add Event</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          addEvent(newEvent);
        }}>
          <div className="mb-4">
            <label className="block mb-2">Event Title:</label>
            <input type="text" name="title" value={newEvent.title} onChange={handleInputChange} required className="border rounded p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Event Color:</label>
            <input type="color" name="color" value={newEvent.color} onChange={handleInputChange} required className="border rounded p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Resource:</label>
            <select name="resourceId" value={newEvent.resourceId} onChange={handleInputChange} required className="border rounded p-2 w-full">
              <option value="">Select a Resource</option>
              {resources.map(resource => (
                <option key={resource.id} value={resource.id}>{resource.title}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Start Date & Time:</label>
            <input type="datetime-local" name="startDateTime" value={newEvent.startDateTime} onChange={handleInputChange} required className="border rounded p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">End Date & Time:</label>
            <input type="datetime-local" name="endDateTime" value={newEvent.endDateTime} onChange={handleInputChange} required className="border rounded p-2 w-full" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={closeModal} className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">Add Event</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;
