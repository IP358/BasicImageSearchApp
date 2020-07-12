import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vxmTeqaSy0dfUxoGyKXP0uTsFyrzsM6gsjcNAenWSw0'   
    }
});