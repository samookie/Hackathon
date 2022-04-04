import React from "react";

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Enter your surname" />
      <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your phone number" />
      <input type="text" placeholder="Enter your company name" />
      <label for="sel1">Type of Partnership</label>
      <select class="form-control" id="sel1">
        <option>School</option>
        <option>Company</option>
        <option>Media</option>
      </select>
      <input type="text" placeholder="company's address" />
      <input type="text" placeholder="Enter your job's name" />
      <input type="text" placeholder="Enter your mail" />
      <input type="submit" value="Submit" />
    </form>
  );
}
