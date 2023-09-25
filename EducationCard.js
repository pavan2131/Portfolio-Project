import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, IconButton, Link } from '@material-ui/core';
import { Edit as EditIcon, Add as AddIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
  },
  university: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  universityLink: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const EducationCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h6" className={classes.title}>
            Education
          </Typography>
        }
        action={
          <div>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/mallikarjunragi/add-edit/EDUCATION/?profileFormEntryPoint=PROFILE_SECTION&amp;trackingId=n2v6pj2QS%2B2sqSIJLRHUAw%3D%3D&amp;desktopBackground=MAIN_PROFILE"
              target="_blank"
            >
              <AddIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/mallikarjunragi/details/education?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAALnC-QBAzI7Cy7MaIaA1L5Y8BTLfZZUuCs"
              target="_blank"
            >
              <EditIcon />
            </IconButton>
          </div>
        }
      />
      <CardContent>
        <ul className={classes.university}>
          <li>
            <div className={classes.universityLink}>
              <Link
                href="https://www.linkedin.com/search/results/all/?keywords=Visvesvaraya+Technological+University"
                target="_blank"
                variant="h6"
              >
                Visvesvaraya Technological University
              </Link>
              <Typography variant="body2">MCA, Computer Science</Typography>
              <Typography variant="body2" color="textSecondary">
                2001 - 2004
              </Typography>
            </div>
          </li>
          {/* Add more education entries here */}
        </ul>
      </CardContent>
    </Card>
  );
};

export default EducationCard;

