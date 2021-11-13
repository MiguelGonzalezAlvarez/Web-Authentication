const { response } = require("express");

const validarCampos = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    // Esto le dice que sigamos al siguiente middleware porque no teniamos errores
    next();
}

module.exports = {
    validarCampos
}