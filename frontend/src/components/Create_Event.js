import React from "react";

export function Create_Event({ create_event }) {
  return (
    <div>
      <h4>Create an event (admin only) </h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const event_id = formData.get("event_id");
          const host_address = formData.get("host_address");
          if (event_id && host_address ) {
            create_event(event_id,host_address)
          }
        }}
      >
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="event_id"
          />
        </div>
        <div className="form-group">
        <label>Event host's address</label>
          <input
            className="form-control"
            type="text"
            name="host_address"
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Create Event" />
        </div>
      </form>
    </div>
  );
}
