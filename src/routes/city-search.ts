import {Request, Response, Router} from 'express';
import CityOsService from '../services/city-os-service';

const router = Router();
const cityOsService = new CityOsService();

router.get('/search', async (req: Request, res: Response) => {
  const state = req.query.state?.toString() || '';
  const name = req.query.name?.toString() || '';

  const response = await cityOsService.searchCity(name, state);
  return res.send(response);
});

module.exports = router;
