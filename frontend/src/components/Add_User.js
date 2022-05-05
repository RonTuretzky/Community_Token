import React from "react";

export function Add_User({ add_user }) {
  return (
    <div>
      <h4>Add a user (admin only) </h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const address = formData.get("address");
          if (address ) {
            add_user(address)
          }
        }}
      >
        <div className="form-group">
        <label>New user address</label>
          <input
            className="form-control"
            type="text"
            name="address"
          />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Add user" />
        </div>
      </form>
    </div>
  );
}
