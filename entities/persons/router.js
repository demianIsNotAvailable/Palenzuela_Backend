import express from 'express';
import { getAllPersons, getPersonById, createPerson, updatePerson, deletePerson } from './controller.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    res.json(await createPerson(req.body));
  } catch (error) {
    next(error);
  }
})

router.get('/', async (req, res, next) => {
  try {
    res.json(await getAllPersons());
  } catch (error) {
    next(error);
  }
})

router.get('/:id', async (req, res) => {
  try {
    res.json(await getPersonById(req.params.id));
  } catch (error) {
    next(error);
  }
})
router.put('/:id', async (req, res) => {
  try {
    res.json(await updatePerson(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
})
router.delete('/:id', async (req, res) => {
  try {
    res.json(await deletePerson(req.params.id));
  } catch (error) {
    next(error);
  }
})

export default router;
