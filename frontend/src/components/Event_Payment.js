import React from "react";

export function Event_Payment({ pay_for_event }) {
  return (
    <div>
      <h4>Pay for event</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const event_id = formData.get("event_id");
          if (event_id) {
            pay_for_event(event_id);
          }
        }}
      >
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            step="1"
            name="event_id"
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Pay For Event" />
        </div>
      </form>
    </div>
  );
}
