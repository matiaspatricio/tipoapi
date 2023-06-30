const {Router} = require('express');
const contactosController = require('../controllers/contactos.controller');
const checkFields = require('../middlewares/validateFields');
const { check } = require("express-validator");
const jwtValidator = require('../middlewares/jwtValidator');

const router = Router();

router.get('/',
[    
    checkFields
],jwtValidator,
 contactosController.getContacts); //GET CONTACTOS
router.get('/:id',[    
    checkFields
],jwtValidator,contactosController.getContactById); //GET CONTACTOS BY ID

router.post('/',[   //consultar al profe, originalmente decia contact.fecha o product.fecha y no funcionaba.      
    check('nombre').not().isEmpty(),
    check('email').not().isEmpty(),
    check('asunto').not().isEmpty(),
    check('mensaje').not().isEmpty(),
    checkFields
],contactosController.createContact); //POST CONTACTOS



module.exports = router;