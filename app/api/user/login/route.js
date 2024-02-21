import axios from 'axios';


    export default async function handler(req, res) {
        if (req.method === 'POST') {
            try {
                const response = await axios.post('http://yourdomain.com/wp-json/jwt-auth/v1/token', {
                    username: 'admin',
                    password: 'password'
                });

                res.status(200).json(response.data);
            } catch (error) {
                res.status(500).json({ error: error.response.data[0] });
            }
        } else {
            res.status(405).end(); // Method Not Allowed
        }
    }
