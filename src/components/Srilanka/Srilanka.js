import React, {Component} from 'react';
import {fetchLK} from "../../api";
import CardsLk from "../Cards/CardsLk";
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
            <div>

                <CardsLk data={data}/>

             </div>
        );
    }
}

export default Srilanka;
