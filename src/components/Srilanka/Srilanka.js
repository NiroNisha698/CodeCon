import React, {Component} from 'react';
import {fetchLK} from "../../api";
import CardsLk from "../Cards/CardsLk";
import co from '../Images/he.png'
import styles from '../Cards/Cards.module.css'
import { Wave } from 'react-animated-text';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Srilanka extends Component {

    state={
        data:{},
    }
    async componentDidMount() {
        const data =await fetchLK();
        this.setState({data:data})
        console.log(data,'sri')
    }

    render() {
        const {data}=this.state;
        return (
            <div className={styles.container1}>



                <div className={styles.image}>

                    <a href='https://www.hpb.health.gov.lk/en' ><img src={co} width='1000' height='100' /></a>

                </div>
                <CardsLk data={data}/>
                <div className={styles.twi}>
                    <h7 className="justify-content-center">WHO Sri Lanka</h7>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="whosrilanka"
                    options={{height: 400,width:600}}
                />
                <TwitterFollowButton
                    screenName={'whosrilanka'}
                />
            </div>
             </div>
        );
    }
}

export default Srilanka;
