const express = require('express'),
Dog = require('../models/dog'),
router = new express.Router()

// Sets map page url
router.get('/map', async (req, res) => {
    const variables = req.app.get('variables')
    try {
        const data = await Dog.find({})
        res.render('index.hbs', {
            pageTitle: `Wszystkie zwierzęta`,
            pathToRender: 'map',
            menu: variables.menuPaths,
            shelters: variables.menuShelters,
            dogs: data,
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router