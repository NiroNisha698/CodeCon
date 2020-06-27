import React from "react";
import Cards from "./Cards";
import {Card,CardContent,Typography,Grid} from '@material-ui/core'

import CountUp from "react-countup";
import cx from 'classnames'
import styles from './Cards.module.css'


const CardsLk=({data:{data:local_new_cases,
    local_total_cases,
    local_total_number_of_individuals_in_hospitals,
    local_deaths,
    local_recovered,update_date_time,local_new_deaths,daily_pcr_testing_data}})=>{
    if(!local_total_cases){
        console.log(local_total_cases)
        return 'Loading...'

    }

    return(
        <div className={styles.container1}>




            <Grid container spacing={4} justify='center'>



                <Grid item component={Card} xs={12} md={3}className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>

                        <Typography variant='h5'>
                            <CountUp start={0}
                                     end={local_total_cases}
                                     duration={2.5}
                                     separator=','
                            />
                            <Typography color='textSecondary'>{new Date(update_date_time).toDateString()}</Typography>
                        </Typography>


                        <Typography variant='body2'> Number of Recoveries Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3}className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>

                        <Typography variant='h5'>
                            <CountUp start={0}
                                     end={local_recovered}
                                     duration={2.5}
                                     separator=','
                            />
                            <Typography color='textSecondary'>{new Date(update_date_time).toDateString()}</Typography>
                        </Typography>


                        <Typography variant='body2'> Number of Active Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3}className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>

                        <Typography variant='h5'>
                            <CountUp start={0}
                                     end={local_deaths}
                                     separator=','
                            />
                            <Typography color='textSecondary'>{new Date(update_date_time).toDateString()}</Typography>
                        </Typography>


                        <Typography variant='body2'> Number of Death Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3}className={cx(styles.card,styles.inHospital)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> in Hospital</Typography>

                    <Typography variant='h5'>
                        <CountUp start={0}
                                 end={local_total_number_of_individuals_in_hospitals}
                                 duration={2.5}
                                 separator=','
                        />
                        <Typography color='textSecondary'>{new Date(update_date_time).toDateString()}</Typography>
                    </Typography>


                    <Typography variant='body2'> Number of Suspected patients</Typography>
                </CardContent>
            </Grid>

                <Grid item component={Card} xs={12} md={3}className={cx(styles.card,styles.newDeath)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>New deaths</Typography>

                        <Typography variant='h5'>
                            <CountUp start={0}
                                     end={local_new_deaths}
                                     duration={2.5}
                                     separator=','
                            />
                            <Typography color='textSecondary'>{new Date(update_date_time).toDateString()}</Typography>
                        </Typography>


                        <Typography variant='body2'> Number of new deaths</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}
export default CardsLk;
