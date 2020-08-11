const bodyParser = require('body-parser');

var data = [{}]

module.exports = (app) => {

    app.get('/todo', (req,res) => {
        res.render('todo',{todo: data});
    });

    app.use(bodyParser.urlencoded({extended: false}));

    app.use(bodyParser.json())

    app.post('/todo', (req,res) => {
        data.push(req.body);
        res.redirect('/todo');
    });

};