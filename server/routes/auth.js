const { Router } = require("express");
const { check } = require("express-validator");
const { crearUsuario, loginUsuario, revalidarToken } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

// Definimos el router que para poder exponer apis
const router = Router();

// Crear un usuario
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La constraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], crearUsuario);

// Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La constraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);

// Exportamos el modulo router para usarlo en toda el backend
module.exports = router;