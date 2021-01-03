const express = require('express');
const app = express();

const { body, param, validationResult } = require('express-validator');

const mongojs = require('mongojs');
const db = mongojs('todo', [ 'tasks' ]);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.post(
    '/tasks', 
    body('subject').isLength({min: 1, max: 200}),
    function(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const subject = req.body.subject;
        db.tasks.insert({ subject, status: 0 }, function(err, data) {
            res.json(data);
        });
});

app.get('/tasks', function(req, res) {
    db.tasks.find(function(err, data) {
        res.json(data);
    });
});

app.get(
    '/tasks/:id',
    param('id').isMongoId(),
    function(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const id = req.params.id;
        db.tasks.find({ _id: mongojs.ObjectID(id) }, function(err, data) {
            res.json(data);
        });
});

app.put('/tasks/:id', function(req, res) {
    let id = req.params.id;
    let status = parseInt(req.body.status);

    db.tasks.update(
        { _id: mongojs.ObjectID(id) },
        { $set: { status } },
        { multi: false },
        function(err, data) {
            return res.json(data);
        }
    );
});

app.delete('/tasks', function(req, res) {
    db.tasks.remove({ status: 1 }, function(err, data) {
        res.json(data);
    });
});

app.delete('/tasks/:id', function(req, res) {
    let id = req.params.id;
    db.tasks.remove({ _id: mongojs.ObjectID(id) }, function(err, data) {
        res.json(data);
    });
});

app.listen(8000, function() {
    console.log('API server is running at port 8000');
});
