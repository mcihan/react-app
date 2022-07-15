import React, { useState } from "react";

export default function Welcome({ Logout, user }) {
  return (
    <div className="welcome">
      <h2>
        Welcome, <span>{user.name}</span>
      </h2>
      <button onClick={Logout}>Logout</button>
    </div>
  );
}
