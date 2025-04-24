import express from 'express';
import { getAllIncidents, createIncident, updateIncident, deleteIncident } from './controller.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    res.json(await createIncident(req.body));
  } catch (error) {
    next(error);
  }
})

router.get('/', async (req, res, next) => {
  try {
    res.json(await getAllIncidents());
  } catch (error) {
    next(error);
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    res.json(await updateIncident(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    res.json(await deleteIncident(req.params.id));
  } catch (error) {
    next(error);
  }
})

export default router;
