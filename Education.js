import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import mvjLogo from '../assets/mvj.png';
import '../styles/Layout.css'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    background: '#ffffff',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  card: {
    marginBottom: theme.spacing(2),
    border: 'none',
    boxShadow: 'none',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '48px',
    height: '48px',
    marginRight: theme.spacing(2),
  },
  boldText: {
    fontWeight: 'bold',
  },
}));

const Education = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h6" className={classes.title}>
          Education
        </Typography>
        <div>
          <IconButton className={classes.addButton} aria-label="Add new education">
            <AddIcon />
          </IconButton>
          <IconButton className={classes.addButton} aria-label="Edit education">
            <EditIcon />
          </IconButton>
        </div>
      </div>
      
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={mvjLogo} alt="MVJ College of Engineering, Bangalore, India logo" className={classes.logo} />
          <div>
            <Typography variant="subtitle2" className={classes.boldText}>
              MVJ College of Engineering, Bangalore, India
            </Typography>
            <Typography variant="subtitle2">
              Bachelor of Technology - BTech, Electronics and Communications Engineering
            </Typography>
            <Typography variant="subtitle2">Jan 2019 - Jun 2023</Typography>
            <Typography variant="body2">Grade: 8.51</Typography>
          </div>
        </CardContent>
      </Card>
      <div className="separator"></div> {/* Add the separator */}
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={mvjLogo} alt="Post-Graduation University, Country logo" className={classes.logo} />
          <div>
            <Typography variant="subtitle2" className={classes.boldText}>
              Post-Graduation University, Country
            </Typography>
            <Typography variant="subtitle2">Master of Science - MS, Computer Science</Typography>
            <Typography variant="subtitle2">Jan 2024 - Dec 2025</Typography>
            <Typography variant="body2">Grade: 9.0</Typography>
          </div>
        </CardContent>
      </Card>
      <div className="separator"></div> {/* Add the separator */}
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={mvjLogo} alt="Another Post-Graduation University, Country logo" className={classes.logo} />
          <div>
            <Typography variant="subtitle2" className={classes.boldText}>
              Another Post-Graduation University, Country
            </Typography>
            <Typography variant="subtitle2">
              Master of Business Administration - MBA, Finance
            </Typography>
            <Typography variant="subtitle2">Jan 2026 - Dec 2027</Typography>
            <Typography variant="body2">Grade: 8.5</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
