// express-validation.js
const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const userSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
});

app.post('/user', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    res.send(`User ${req.body.name} validated successfully!`);
});

app.listen(3001, () => console.log('Express validation example running'));