const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/Estudiantes_jwt');

// Rutas para los endpoints CRUD
router.get('/', estudiantesController.getAllUsers);
router.get('/login', estudiantesController.login);
router.post('/', estudiantesController.addUser);
router.put('/:id', estudiantesController.updateUser);
router.delete('/:id', estudiantesController.deleteUser);

module.exports = router;