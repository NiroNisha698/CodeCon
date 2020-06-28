import axios from 'axios'

const url= 'https://covid19.mathdro.id/api';

const url1= 'https://hpb.health.gov.lk/api/get-current-statistical';


export const fetchLK= async ()=>{
    try{
        const {data:{data:{ local_new_cases,
            local_total_cases,
            local_active_cases,
            local_total_number_of_individuals_in_hospitals,
            local_deaths,
            local_recovered,update_date_time,local_new_deaths}}} = await axios.get(url1);

        return {local_new_cases,
            local_total_cases,
            local_active_cases,
            local_total_number_of_individuals_in_hospitals,
            local_deaths,
            local_recovered,update_date_time ,local_new_deaths}


    }catch(error){
        console.log(error)
    }
}

export const fetchData= async (country)=>{

    let changeableurl=url;
    if(country){
        changeableurl=`${url}/countries/${country}`
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeableurl);

        return  {
                 confirmed,
                 recovered,
                 deaths,
                 lastUpdate};

    }catch(error){
console.log(error)
    }
}

export const fetchDaily= async ()=> {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const newmodified= data.map((dailyinfo)=>({

            confirmed:dailyinfo.confirmed.total,
            deaths:dailyinfo.deaths.total,
            date:dailyinfo.reportDate,
        }))

        return newmodified;
        console.log(newmodified)

    }catch(error){

    }

}
export const fetchCountries=async()=>{
    try{

        const {data:{countries}}= await axios.get(`${url}/countries`);

       return countries.map((country)=>country.name);

    }catch(error){
console.log(error)
    }
}
