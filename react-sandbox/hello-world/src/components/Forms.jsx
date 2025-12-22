import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setNames([...names, name]);
    console.log("Enter", name);
    setName("");
  }
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
      <ul>
        {names.map((nameItem, index) => (
          <li key={index} className="list-group-item">
            {index}:{nameItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { NameForm };
