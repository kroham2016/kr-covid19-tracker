import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

export default function Cards({data:{confirmed,deaths,recovered,lastUpdate}}) {

    if (!confirmed ){
        return 'Loading...'; 
    }

    const cardData = [{
        name: 'Infected',
        desc: 'Number of Active COVID-19 Cases',
        value: confirmed.value,
        style: styles.infected
    },{
        name: 'Recovered',
        desc: 'Number of COVID-19 Recoveries',
        value: recovered.value,
        style: styles.recovered
    },{
        name: 'Deaths',
        desc: 'Number of COVID-19 Deaths',
        value: deaths.value,
        style: styles.deaths
    }] ;

   
    return (
        <div className={styles.container} >
            <Grid container spacing={3} justify='center'>
                {cardData.map(card => 
                    <Grid item component={Card} xs={12} md={3} className={`${styles.card}  ${card.style}`} >
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {card.name}
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                <CountUp start={0} end={card.value} duration={1} separator="," />
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2">
                                {card.desc}
                            </Typography>
                        </CardContent>
                </Grid>
                )}
            </Grid>
        </div>
    )
}
