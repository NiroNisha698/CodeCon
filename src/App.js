import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from './App.module.css'
import App1 from "./payment/Payment";
import Typography from "@material-ui/core/Typography";
import Navbar from "./components/NavBar/navbar";
import Srilanka from "./components/Srilanka/Srilanka";
import Help from "./components/Help/help";
import display from "./components/Homepage/Display";
class App extends Component {


    render() {



        return (
            <div className={styles.container}>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={display}/>
                        <Route exact path="/help" component={Help}/>
                        <Route exact path="/app" component={App1}/>
                        <Route exact path="/lk" component={Srilanka}/>

                    </Switch>
                </BrowserRouter>







               {/* <div className={styles.footer}>

                    <Typography color='black'>
                        Powered by Beat the eaters team
                    </Typography>
                </div>
*/}
            </div>
        )
    }
}

export default App
