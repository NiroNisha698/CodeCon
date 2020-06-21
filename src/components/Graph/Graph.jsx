import React,{useEffect,useState} from 'react';
import {fetchDaily} from "../../api";
import {Line,Bar} from 'react-chartjs-2'
import styles from './Graph.module.css'

//FUNCTIONAL COMPONENT
const Graph=({data:{confirmed,recovered,deaths},country})=>{

    const [dailyinfo,setDailyinfo]=useState([]);

    useEffect(()=>{

        const fetchAPI= async ()=>{
            setDailyinfo(await fetchDaily());
        }
        console.log(dailyinfo);
        fetchAPI();
    },[]);



    const lineChart=(

        <Line
            data={{
             labels:dailyinfo.map(({date})=>date),
            datasets:[{
                data:dailyinfo.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true,
            },{
                data:dailyinfo.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                fill:true,
            }],
        }}


              />
    );

    const barChart=(
      confirmed
        ?(
            <Bar
data={{
    labels:['Infected','Recovered','Deaths'],
    datasets:[{
        label:'People',
        backgroundColor:[
            'rgba(0,0,250,0.5)',
            'rgba(0,255,0,0.5)' ,
            'rgba(255,0,0,0.5)'
        ],
        data:[confirmed.value,recovered.value,deaths.value]
    }]



}}
options={{
    legend:{display :false},
    title:{display:true,text:`Current State in ${country}`}
}}







            />
            ):null
    )


    return(
       <div className={styles.container}>

           {country ?barChart:lineChart}



       </div>
    )
}

export default Graph;
