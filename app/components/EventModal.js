"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import DatePicker from "./DatePicker";

export default function EventModal({ isOpen, onRequestClose, onSave }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.textContent === "Save") {
      onSave(title);
      setTitle("");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="flex items-center justify-between mb-10">
        <Image alt="" src="/toggle.png" width={25} height={25} />
        <button onClick={onRequestClose}>
          <Image alt="" src="/close.png" width={15} height={15} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full event-title-field"
        />
        <div className="flex items-center gap-5 my-8">
          <h5 className="font-medium mr-5">Category</h5>
          <button className="btn btn-primary">Indoor</button>
          <button className="btn btn-secondary">Outdoor</button>
        </div>
        <div className="mb-8">
          <DatePicker />
        </div>
        <div className="">
          <select>
            <option>Does not repeat</option>
            <option>Daily</option>
            <option>Weekly on Monday</option>
            <option>Monthly on the second Monday</option>
            <option>Annually on June 11</option>
            <option>Every Weekday ( Monday to friday)</option>
          </select>
        </div>

        <div className="flex justify-end items-end gap-5 mt-20">
          <button className="btn btn-primary">Send to Bullet in</button>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
