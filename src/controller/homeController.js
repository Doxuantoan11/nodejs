import connection from "../configs/connectDB";


let getHomepage =  async (req, res) => {
    //logic
    // let data =[];
    // connection.query(
    //     'SELECT * FROM `users`',
    //     function(err, results, fields) {
    //        results.map((row) => {
    //         data.push({
    //             id: row.id,
    //             email: row.email,
    //             address: row.address,
    //             firstName: row.firstName,
    //             lastName: row.lastName
    //         }) 
    //     });
    //     return res.render('index.ejs', {dataUser : data});
    //     }
        const [rows, fields] = await connection.execute('SELECT * FROM users');
        return res.render('index.ejs', {dataUser : rows});
}

let editUserPage = async (req, res) => {
    return res.send('Edit user');
}

module.exports = {
    getHomepage,editUserPage
} 