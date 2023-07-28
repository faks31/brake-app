"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { INITIAL_EVENTS, createEventId } from "./events";
import EventModal from "./EventModal";
import Modal from "react-modal";
import Image from "next/image";

export default function Calendar() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [eventToDelete, setEventToDelete] = useState(null);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo);
    setIsModalOpen(true);
  };

  const handleEventClick = (clickInfo) => {
    setEventToDelete(clickInfo.event);
  };

  const handleConfirmDelete = () => {
    if (eventToDelete) {
      eventToDelete.remove();
      setEventToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setEventToDelete(null);
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = (title) => {
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });
    }

    setIsModalOpen(false);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <div className="calender-main">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        initialEvents={INITIAL_EVENTS}
        select={handleDateSelect}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
      />

      <EventModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSave={handleModalSave}
      />
      <Modal
        isOpen={!!eventToDelete}
        onRequestClose={handleCancelDelete}
        contentLabel="Delete Event Modal"
      >
        {eventToDelete && (
          <div>
            <div className="flex items-center justify-end mb-10">
              <button onClick={handleConfirmDelete}>
                <Image alt="" src="/close.png" width={15} height={15} />
              </button>
            </div>
            <div className="p-5">
              <h3 className="text-center font-medium">
                Are you sure you want to delete the event `{eventToDelete.title}
                `?
              </h3>
              <div className="flex items-center justify-center gap-3 mt-10">
                <button
                  className="btn btn-primary"
                  onClick={handleConfirmDelete}
                >
                  Confirm
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
