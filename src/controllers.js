import axios from 'axios';
import 'dotenv/config';

const sendRequests = () => {
    fetch(process.env.AHORRA_PLUS_BACKEND);
    fetch(process.env.AHORRA_PLUS_FRONTEND);
};

export const reloadRequest = async (req, res) => {
    sendRequests();
    
    setTimeout(async () => {
        try {
            await axios.get(process.env.RELOADER_2_URL);
        }
        catch (error) {
            console.error(error);
        }
    }, 0.1 * 60 * 1000);
    res.status(200).send();
};
