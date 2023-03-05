import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./table-data.json";
import { v4 as uuidv4 } from "uuid";
import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    degreeName: "",
    academicname: "",
    passingYear: "",
    obtainedMarkes: "",
  });

  const [editFormData, setEditFormData] = useState({
    degreeName: "",
    academicname: "",
    passingYear: "",
    obtainedMarkes: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    const newFormData = { ...addFormData, [fieldName]: fieldValue };
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: uuidv4(),
      degreeName: addFormData.degreeName,
      academicname: addFormData.academicname,
      passingYear: addFormData.passingYear,
      obtainedMarkes: addFormData.obtainedMarkes,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    setAddFormData({
      degreeName: "",
      academicname: "",
      passingYear: "",
      obtainedMarkes: "",
    });
  };

  // const handleEditFormSubmit = (event) => {
  //   event.preventDefault();

  //   const editedContact = {
  //     id: editContactId,
  //     degreeName: editFormData.degreeName,
  //     academicname: editFormData.academicname,
  //     passingYear: editFormData.passingYear,
  //     obtainedMarkes: editFormData.obtainedMarkes,
  //   };

  //   const newContacts = [...contacts];

  //   const index = contacts.findIndex((contact) => contact.id === editContactId);

  //   newContacts[index] = editedContact;

  //   setContacts(newContacts);
  //   setEditContactId(null);
  // };

  const handleEditClick = (id) => {
    setEditContactId(id);
    const matchData = contacts?.filter((item) => {
      if (item?.id === id) {
        return item;
      }
    });

    console.log(matchData);
    setEditFormData(matchData[0]);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const handleSaveClick = (event,afterEditData) => {

    const afterEdit = contacts.map((item) => {
      if (afterEditData.id === item.id) {
        return afterEditData;
      } else {
        return item;
      }
    });
    console.log({ afterEdit });
    setContacts(afterEdit);
     console.log({contacts});
     setEditContactId(null)
  };

  return (
    <div className="app-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>Degree name</th>
              <th>Academic name</th>
              <th>Passing Year</th>
              <th>Obtained marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {editContactId && (
              <EditableRow
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
                handleSaveClick={handleSaveClick}
              />
            )}
            {contacts.map((contact) => (
              <Fragment>
                {!editContactId && (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          value={addFormData.degreeName}
          name="degreeName"
          required="required"
          placeholder="Enter a degree name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          value={addFormData.academicname}
          name="academicname"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          value={addFormData.passingYear}
          name="passingYear"
          required="required"
          placeholder="Enter a passing year..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          value={addFormData.obtainedMarkes}
          name="obtainedMarkes"
          required="required"
          placeholder="Enter an marks..."
          onChange={handleAddFormChange}
        />
        <button type="submit" onClick={handleAddFormSubmit}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default App;
