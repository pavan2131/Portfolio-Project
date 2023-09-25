import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RecipeReviewCard from './RecipeReviewCard';
import AboutCard from './AboutCard';
import Education from './Education';

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    backgroundColor: '#f2f2f2', // Grey background color
    height: '100vh', // Occupy 100% of the viewport height
    padding: '20px', // Add 10px padding
    overflowX: 'hidden', // Hide horizontal overflow
  },
  cardsDiv: {
    width: '80%', // Occupy 80% of the main div's width
    margin: '0 auto', // Center the cards horizontally
    display: 'flex',
    justifyContent: 'center', // Center the cards horizontally
    gap: theme.spacing(3) + 'px', // Specify the desired spacing between cards with 'px'
  },
  card: {
    height: '100%',
  },
  smallCard: {
    width: '70%', // First card occupies 15% of the cardsDiv width
  },
  mediumCard: {
    width: '30%', // Second card occupies 50% of the cardsDiv width
  },

}));

const ProfileCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.cardsDiv}>
        <Card className={`${classes.card} ${classes.smallCard}`}>
        <RecipeReviewCard />
         
        </Card>
        <Card className={`${classes.card} ${classes.mediumCard}`}>
        <CardContent>
            {/* Content of the first card */}
          </CardContent>
        </Card>
  
      </div>
      <br></br>
      <div className={classes.cardsDiv}>
        <Card className={`${classes.card} ${classes.smallCard}`}>
        <AboutCard />
         
        </Card>
        <Card className={`${classes.card} ${classes.mediumCard}`}>
        <CardContent>
            {/* Content of the first card */}
          </CardContent>
        </Card>
  
      </div>
      <br></br>
      <div className={classes.cardsDiv}>
        <Card className={`${classes.card} ${classes.smallCard}`}>
        <Education />
         
        </Card>
        <Card className={`${classes.card} ${classes.mediumCard}`}>
        <CardContent>
            {/* Content of the first card */}
          </CardContent>
        </Card>
  
      </div>
    </div>
    
  );
};

export default ProfileCard;
