import React, { useState } from "react";
import "../App.css";
import { Input, Button, Textarea } from "@nextui-org/react";
import TypeDropdown from "../Request/Typedropdown";
import PriorityDropdown from "../Request/PriorityDropdown";

const RequestPage: React.FC = () => {
  const [customer, setCustomer] = useState("");
  const [reporter, setReporter] = useState("");
  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");
  const [reproducible, setReproducible] = useState("");
  const [feature, setFeature] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Log the form answers to the console
    console.log("Customer:", customer);
    console.log("Reporter:", reporter);
    console.log("Type:", type);
    console.log("Reproducible:", reproducible);
    console.log("Feature:", feature);
    console.log("Priority:", priority);
    console.log("Subject:", subject);
    console.log("Description:", description);
    console.log("File:", file);
  
    // Reset the state variables to their initial values
    setCustomer("");
    setReporter("");
    setType("");
    setPriority("");
    setReproducible("");
    setFeature("");
    setSubject("");
    setDescription("");
    setFile(null);
  
    // TODO: Handle further form submission logic if needed
  };

  return (
    <div>
      <h1 className="FontSize">Create Case</h1>
    <div className="container">
      <form id="requestForm" onSubmit={handleSubmit} className="form-grid">
        <div className="form-col">
          {/* <label htmlFor="customer">Customer:</label> */}
          <Input 
          color="primary"
            labelPlaceholder="Customer:"
            size="xl" 
            placeholder="xLarge" 
            type="text"
            id="customer"
            name="customer"
            value={customer}
            onChange={(event) => setCustomer(event.target.value)}
            required
          />
          <br />
          <br />
          {/* <label htmlFor="reporter">Reporter:</label> */}
          <Input
          color="primary"
            labelPlaceholder="Reporter:"
            size="xl" 
            placeholder="xLarge" 
            type="text"
            id="reporter"
            name="reporter"
            value={reporter}
            onChange={(event) => setReporter(event.target.value)}
            required
          />
          <br />
          <br />
          {/* <label htmlFor="type">Type:</label> */}
          {/* <select
        id="type"
        name="type"
        value={type}
        onChange={(event) => setType(event.target.value)}
        required
      >
        <option value="Bug">Bug</option>
        <option value="Feature">Feature</option>
        <option value="Enhancement">Enhancement</option>
        <option value="Other">Other</option>
      </select> */}
          <label htmlFor="reproducible">Reproducible:</label>
          <div>
            <input
              type="radio"
              id="reproducibleYes"
              name="reproducible"
              value="Yes"
              checked={reproducible === "Yes"}
              onChange={() => setReproducible("Yes")}
              required
            />
            <label htmlFor="reproducibleYes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="reproducibleNo"
              name="reproducible"
              value="No"
              checked={reproducible === "No"}
              onChange={() => setReproducible("No")}
              required
            />
            <label htmlFor="reproducibleNo">No</label>
          </div>
          <br />
          <br />
          {/* <label htmlFor="feature">Your Feature:</label> */}
          <Input
          color="primary"
            labelPlaceholder="You Feature:"
            size="xl" 
            placeholder="xLarge" 
            type="text"
            id="feature"
            name="feature"
            value={feature}
            onChange={(event) => setFeature(event.target.value)}
            required
          />
          <br />
          <br />
          <PriorityDropdown />
          <br />
          <br />
          <TypeDropdown />
          <br />
          <br />
          {/* <label htmlFor="file">Attach a File:</label> */}
          <input
            type="file"
            id="file"
            name="file"
            onChange={(event) => setFile(event.target.files?.[0] || null)}
          />
        </div>

        <div className="form-col">
          {/* <label htmlFor="subject">Subject:</label> */}
          <Input
          color="primary"
            labelPlaceholder="Subject:"
            size="xl" 
            placeholder="xLarge" 
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          />
          <br />
          <br />
          {/* <label htmlFor="description">Description:</label> */}
          <Textarea
          color="primary"
            labelPlaceholder="Description"
            size="xl" 
            placeholder="Static rows, rows (12)"
            rows={12}
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          auto
          color="primary"
          rounded
          style={{ marginTop: "-100px", width: "200px", height: "60px" }}
        >
          Submit Request
        </Button>
        {/* <button type="submit">Submit Request</button> */}
      </form>
    </div>
    </div>
  );
};

export default RequestPage;




// function useMemo(arg0: () => string, arg1: Set<string>[]) {
//   throw new Error("Function not implemented.");
// }
