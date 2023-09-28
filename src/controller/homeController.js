import connection from "../configs/connectDB";
import axios from 'axios';


let getHomepage =  async (req, res) => {
  const dataUser = JSON.parse(req.query.dataUser);
         res.render('index',{dataUser:dataUser});
}

let getUserLogin =  (req, res) => {
    return res.render('login');
}
let postUserLogin = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3000/login', {
          username: req.body.username,
          password: req.body.password,
        });
        // Handle the response from localhost:3000
        // res.json(response.data);
        const responseData = response.data;
        // res.redirect('/',{dataUser:responseData});
        res.redirect('/');

      } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Error logging in' });
      }
}

let getUserSignup =  (req, res) => {
    return res.render('signup');
}
let postUserSignup = async (req, res) => {
    try {
        if (typeof req.body === 'undefined') {
            console.log('req.body is undefined');
            // Handle the undefined case
        } else {
            const response = await axios.post('http://localhost:3000/signup', {
              username: req.body.username,
              password: req.body.password,
            });
            
            // Handle the response from localhost:3000
            const responseData = response.data;
            const responseString = JSON.stringify(responseData);
            res.render('signup', {userData: responseString })
        }
      } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'Error signing up' });
      }
}
module.exports = {
    getHomepage,getUserLogin,getUserSignup,postUserLogin,postUserSignup
} 