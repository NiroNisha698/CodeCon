import axios from 'axios'

const url= 'https://covid19.mathdro.id/api';

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
