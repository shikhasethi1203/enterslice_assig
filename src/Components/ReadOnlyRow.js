import React from "react";
import MinimizeIcon from '@mui/icons-material/Minimize';
import EditIcon from '@mui/icons-material/Edit';

const ReadOnlyRow = ({  contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={contact.id}>
      <td>{contact.degreeName}</td>
      <td>{contact.academicname}</td>
      <td>{contact.passingYear}</td>
      <td>{contact.obtainedMarkes}</td>
      <td>
        <button
          type="button"
          onClick={() => handleEditClick(contact.id)}
        >
          <EditIcon/>
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          <MinimizeIcon/>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;