# Guestara Internship Assignment: ReactJS

This project is a ReactJS application that replicates the Mobiscroll monthly calendar timeline using the ViteJS framework.

## Features

- Monthly calendar view with resources listed on the Y-axis and dates on the X-axis.
- Drag functionality to move events between dates and resources.
- Add new events by clicking on the calendar.
- Edit event details by clicking on an event.
- Delete events with a confirmation popup.
- Navigation buttons to move to the previous or next month.
- Highlight today's date.
- Add and delete resources dynamically.
- Display event details on hover.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/guestara-internship-assignment.git

2. Navigate to the project directory:
    ```sh
    cd guestara-internship-assignment
3. Install dependencies:
    ```sh
    npm install

### Usage
1. Start the development server:
    ```sh
    npm run dev

2. Open your browser and go to http://localhost:5173.

### Code Overview
####  App.jsx
The main component that renders the calendar and handles the logic for adding, editing, and deleting events and resources.

Key Functions:
- openModal: Opens the modal for adding a new event.
- closeModal: Closes the modal for adding a new event.
- addEvent: Adds a new event to the calendar.
- handleEventClick: Handles the click event on an existing event.
- handlePrevMonth: Moves the calendar view to the previous month.
- handleNextMonth: Moves the calendar view to the next month.
- handleInputChange: Handles input changes in the event form.

#### index.css
Contains Tailwind CSS classes for styling the application.

### Dependencies
- @fullcalendar/react: FullCalendar React component.
- @fullcalendar/resource-timeline: FullCalendar plugin for resource timeline view.
- @fullcalendar/interaction: FullCalendar plugin for interaction (drag and drop).
- react-modal: Modal component for React.

### Acknowledgements
Thanks to the FullCalendar team for their awesome calendar components.
Special thanks to the team at Guestara for this internship opportunity.
