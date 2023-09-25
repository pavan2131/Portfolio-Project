import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import RecipeReviewCard from './RecipeReviewCard';

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    backgroundColor: '#f2f2f2',
    height: '100vh',
    padding: '20px',
    overflowX: 'hidden',
  },
  cardsDiv: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(3) + 'px',
  },
  cardSection: {
    width: '15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:nth-child(2)': {
      width: '55%',
    },
    '&:last-child': {
      width: '20%',
    },
  },
}));

const CardLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.cardsDiv}>
        <section className={classes.cardSection}>
          <RecipeReviewCard />
          <RecipeReviewCard />
        </section>
        <section className={classes.cardSection}>
          <RecipeReviewCard />
        </section>
        <section className={classes.cardSection}>
          <RecipeReviewCard />
        </section>
      </div>
    </div>
  );
};

export default CardLayout;
