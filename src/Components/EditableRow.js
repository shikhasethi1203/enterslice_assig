import React,{useState} from "react";
import MinimizeIcon from '@mui/icons-material/Minimize';
// import SaveIcon from '@mui/icons-material/Save';

const EditableRow = ({
  editFormData,
  
  handleCancelClick,
  handleSaveClick,
}) => {

  const [editData, setEditData] = useState(editFormData);
  const handleEditFormChange =(e)=>{
      const {name,value} = e.target
      const updateEdit = {...editData, [name]:value}
      setEditData(updateEdit)
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Degreename..."
          name="degreeName"
          value={editData.degreeName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Academic name..."
          name="academicname"
          value={editData.academicname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter a passing Year..."
          name="passingYear"
          value={editData.passingYear}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Obtanied Markes..."
          name='obtainedMarkes'
          value={editData.obtainedMarkes}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" onClick = { (event)=>handleSaveClick(event,editData)}>Save</button>
        <button type="button" onClick={handleCancelClick}>
          <MinimizeIcon/>
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;