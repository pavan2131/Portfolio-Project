import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const EducationCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    field: '',
    passoutYear: '',
  });

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditingIndex(-1);
    setNewEducation({
      institution: '',
      degree: '',
      field: '',
      passoutYear: '',
    });
  };

  const handleSave = () => {
    if (editingIndex !== -1) {
      setEducationDetails((prevDetails) => {
        const updatedDetails = [...prevDetails];
        updatedDetails[editingIndex] = newEducation;
        return updatedDetails;
      });
    } else {
      setEducationDetails([...educationDetails, newEducation]);
    }
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleEditEducation = (index) => {
    const educationToEdit = educationDetails[index];
    setNewEducation(educationToEdit);
    setEditingIndex(index);
    handleClickOpen();
  };

  const handleDeleteEducation = (index) => {
    setEducationDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails.splice(index, 1);
      return updatedDetails;
    });
    handleClose();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Education
          <span style={{ float: 'right', cursor: 'pointer' }}>
            <AddIcon onClick={handleClickOpen} style={{ color: '#000', marginRight: '8px' }} />
            <EditIcon style={{ color: '#000' }} />
          </span>
        </Typography>
      </CardContent>
      {educationDetails.map((education, index) => (
        <Card key={index} style={{ marginTop: index === 0 ? '0' : '-10px' }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar>{education.institution ? education.institution.charAt(0).toUpperCase() : ''}</Avatar>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6" component="div">
                  {education.institution || 'Institution'}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {education.degree || 'Degree'}
                  <br />
                  {education.field || 'Field'}
                  <br />
                  {education.passoutYear || 'Year of Passout'}
                </Typography>
              </Grid>
              {/* <Grid item style={{ marginLeft: 'auto' }}>
                <EditIcon
                  onClick={() => handleEditEducation(index)}
                  style={{ color: '#000', cursor: 'pointer' }}
                />
              </Grid> */}
            </Grid>
          </CardContent>
        </Card>
      ))}
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle style={{ cursor: 'move', padding: '16px 24px', position: 'relative' }}>
          {editingIndex !== -1 ? 'Edit Education Details' : 'Add Education Details'}
          <CloseIcon
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              cursor: 'pointer',
              color: '#000',
            }}
          />
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Institution"
            fullWidth
            name="institution"
            value={newEducation.institution}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Degree"
            fullWidth
            name="degree"
            value={newEducation.degree}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Field"
            fullWidth
            name="field"
            value={newEducation.field}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Year of Passout"
            fullWidth
            name="passoutYear"
            value={newEducation.passoutYear}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          {editingIndex !== -1 && (
            <Button onClick={() => handleDeleteEducation(editingIndex)} startIcon={<DeleteIcon />}>
              Delete
            </Button>
          )}
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default EducationCard;


