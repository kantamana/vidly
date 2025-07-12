import express from 'express';
import joi from 'joi'; 

const router = express.Router();

const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Drama" },
    ];

router.get('/', (req, res) => {
  res.send(genres);
});

router.get('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
})

router.post('/', (req, res) => {
    const schema = joi.object({
        name: joi.string().min(3).required()
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
})

router.delete('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
});

export default router;