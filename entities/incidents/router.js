import express from 'express';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    res.json(await createIncident(req.body));
  } catch (error) {
    next(error);
  }
})