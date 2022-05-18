const db = require('../models');
const {Router} = require('express'); // Obtener sólo el método router.
const router = Router();

router.get('/', (req,res) =>{
    res.send({message:'Hello ADSI 2231424'});
});

module.exports = router; // Se exporta el módulo para poderlo usar.

