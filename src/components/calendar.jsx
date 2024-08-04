import  { useState } from 'react';

const Calendar = ({ events, setEvents }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleAddEvent = (day) => {
    const eventName = prompt('Enter event name:');
    if (eventName) {
      setEvents([...events, { date: day, name: eventName, color: getRandomColor() }]);
    }
  };

  const handleDeleteEvent = (index) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const updatedEvents = events.filter((_, i) => i !== index);
      setEvents(updatedEvents);
    }
  };

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const dayEvents = events.filter(event => new Date(event.date).toDateString() === day.toDateString());
      days.push(
        <div key={i} className="calendar-day bg-white border rounded-lg p-2 relative cursor-pointer" onClick={() => handleAddEvent(day)}>
          <span>{i}</span>
          {dayEvents.map((event, index) => (
            <div
              key={index}
              className="event mt-1 text-sm text-white p-1 rounded"
              style={{ backgroundColor: event.color }}
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteEvent(index);
              }}
            >
              {event.name}
            </div>
          ))}
        </div>
      );
    }
    return days;
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  return (
    <div className="calendar-container flex flex-col items-center p-4">
      <div className="calendar-header flex justify-between items-center w-full max-w-md mb-4">
        <button onClick={handlePrevMonth} className="btn">Previous</button>
        <h2 className="text-lg font-bold">{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</h2>
        <button onClick={handleNextMonth} className="btn">Next</button>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-2 w-full max-w-md">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
