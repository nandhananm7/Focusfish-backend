const router = require('express').Router();
const TodoModel = require("../models/todoList");


// Backend route to fetch flagged tasks
router.get("/", async(req, res) => {
    TodoModel.find({ flagged: true })
        .then(ImportantList => res.json(ImportantList))
        .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
