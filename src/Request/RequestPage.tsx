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

  const handleTypeSelectionChange = (selectedType: string) => {
    setType(selectedType);
  };

  const handlePrioritySelectionChange = (selectedPriority: string) => {
    setPriority(selectedPriority);
  };

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
    <div className="CasePage">
      <h1 className="FontSize">Create Case</h1>
      <div className="container">
        <form id="requestForm" onSubmit={handleSubmit} className="form-grid">
          <div className="form-col">
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
            <PriorityDropdown onSelectionChange={handlePrioritySelectionChange} />
            <br />
            <br />
            <TypeDropdown onSelectionChange={handleTypeSelectionChange} />
            <br />
            <br />
            <input
              type="file"
              id="file"
              name="file"
              onChange={(event) => setFile(event.target.files?.[0] || null)}
            />
          </div>

          <div className="form-col">
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
        </form>
      </div>
    </div>
  );
};

export default RequestPage;
