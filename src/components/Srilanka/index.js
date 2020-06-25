import {useEffect, useState} from "react";


function useStats() {

    const [stats, setStats] = useState();

    useEffect( () => {
        async function fetchLk() {
        console.log('fetch');
        const data= await ('https://hpb.health.gov.lk/api/get-current-statistical').then(data => data.json()
        );
        }
        fetchLk();
        },
        []);
}




export default function IndexPage() {



}
