import Office from '../entities/Office';
import axios from 'axios';
import { URL } from '../shared/constants';

const DataService = () => 
    axios.get(URL)
        .then(response => {
            const officesData = response.data;
            return officesData.map(office => 
                 new Office(office.id, office.name, office.description, office.latitude, office.longitude, office.photo)
            )
        }).catch(error => console.log(error));

export default  DataService;
