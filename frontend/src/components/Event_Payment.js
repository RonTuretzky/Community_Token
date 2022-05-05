import React from "react";

export function Event_Payment({ pay_for_event,event_id }) {
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
          <label>Amount of {tokenSymbol}</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="event_id"
            required
          />
        </div>
      </form>
    </div>
  );
}
