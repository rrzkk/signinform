import React from "react";
import Link from "next/link";
import Pageright from "./components/pageright";

export default function Signup() {
  return (
    <div className="container">
      <div className="pageleft">
        <div className="inputform">
          <h2>Let's set up your account</h2>
          <p>
            Already have an account?
            <Link href="/login">
              <a> log in</a>
            </Link>
          </p>
          <form >
            <input type="text"></input>
            <input type="text"></input>
            <select>
              <option>Grapefruit</option>
              <option>Lime</option>
              <option>Coconut</option>
              <option>Mango</option>
            </select>
            <input type="text"></input>
          </form>
          <p>
            By clicking the "Next" button, you agree to creating a free account,
            and to
            <a> Terms of Service </a>
            and
            <a> Privacy Policy</a>.
          </p>
        </div>
      </div>
      <Pageright />
    </div>
  );
}
