import React from "react";

export function Verify_Attendance({ verify_event }) {
  return (
    <div>
      <h4>Verify someone's attendance</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const event_id = formData.get("event_id");
          const address = formData.get("address");

          if (event_id) {
            verify_event(event_id,address);
          }
        }}
      >
        <div className="form-group">
        <label>Event ID</label>
          <input
            className="form-control"
            type="text"
            name="event_id"
          />
        </div>
        <div className="form-group">
        <label>Event attendee's address</label>
          <input
            className="form-control"
            type="text"
            name="address"
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Verify attendance" />
        </div>
      </form>
    </div>
  );
}
