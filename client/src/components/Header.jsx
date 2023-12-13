import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div
        className="
            flex 
            justify-between 
            items-center
            max-w-7xl
            mx-auto
            p-3"
      >
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul
          className="
                flex 
                gap-4"
        >
          <li>Home</li>
          <li>About</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
}
