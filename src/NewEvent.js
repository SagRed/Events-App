import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { TextField, Button } from "@material-ui/core";
import { db, firebase, auth } from "./firebase";
import { v4 as uuidv4 } from "uuid";

function NewEvent({ modalState, setModalState, modalClose }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [high, setHigh] = useState("");
  const [by, setBy] = useState("");
  const [entry, setEntry] = useState("");
  const [prize, setPrize] = useState("");
  const [url, setUrl] = useState("");
  const [time, setTime] = useState("");

  const addEventToDB = async () => {
    const id = uuidv4();
    const timeToNum = new Date(time).getTime();
    await db.collection("events").doc(id).set({
      id: id,
      name: name,
      decs: desc,
      high: high,
      by: by,
      entry: entry,
      prize: prize,
      url: url,
      deadline: timeToNum,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await setName("");
    await setDesc("");
    await setHigh("");
    await setBy("");
    await setEntry("");
    await setPrize("");
    await setUrl("");
    setTime("");
    setModalState(false);
  };

  return (
    <Modal
      open={modalState}
      onClose={modalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        margin: "0 auto",
        width: "600px",
        maxWidth: "600px",
        textAlign: "center",
        backgroundColor: "#161920ef",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <div>
        <h2 style={{ fontWeight: "400", color: "#cfcfcf" }}>New Event</h2>
        <form noValidate>
          <TextField
            required
            label="Event Name"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: "#d4d3d3",
              width: "400px",
              margin: "10px",
            }}
          />
          <TextField
            required
            label="Description"
            variant="filled"
            onChange={(e) => setDesc(e.target.value)}
            style={{
              backgroundColor: "#d4d3d3",
              width: "400px",
              margin: "10px",
            }}
          />
          <TextField
            required
            label="Highlight"
            variant="filled"
            onChange={(e) => setHigh(e.target.value)}
            style={{
              backgroundColor: "#d4d3d3",
              width: "400px",
              margin: "10px",
            }}
          />
          <TextField
            required
            label="Organized By"
            variant="filled"
            onChange={(e) => setBy(e.target.value)}
            style={{
              backgroundColor: "#d4d3d3",
              width: "400px",
              margin: "10px",
            }}
          />
          <TextField
            required
            label="Entry"
            variant="filled"
            onChange={(e) => setEntry(e.target.value)}
            style={{
              backgroundColor: "#d4d3d3",
              width: "400px",
              margin: "10px",
            }}
          />
          <TextField
            required
            label="Price Money"
            variant="filled"
            onChange={(e) => setPrize(e.target.value)}
            style={{
              backgroundColor: "#d4d3d3",
              width: "400px",
              margin: "10px",
            }}
          />
          <TextField
            required
            label="Deadline"
            variant="filled"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setTime(e.target.value)}
            style={{
              backgroundColor: "#d4d3d3",
              width: "400px",
              margin: "10px",
            }}
          />
          <TextField
            required
            label="Poster URL"
            variant="filled"
            onChange={(e) => setUrl(e.target.value)}
            style={{
              backgroundColor: "#d4d3d3",
              width: "400px",
              margin: "10px",
            }}
          />
          <Button
            style={{
              width: "400px",
              backgroundColor: "#d4d3d3",
              color: "black",
              borderRadius: "2px",
              margin: "10px",
            }}
            onClick={addEventToDB}
          >
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
}

export default NewEvent;
