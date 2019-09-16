import { Router } from 'express';
import Partern from './app/models/partern'

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send('Api ok');
})

routes.get('/partners', async (req, res) => {
  try {
    return res.json(await Partern.findAll())
  } catch(err){
    return res.status(500).json({ 'err': 'err' })
  }
})

routes.post('/partners', async (req, res) => {
  try {
    console.log(req.body)
    return res.json(await Partern.create(req.body))
  } catch(err){
    return res.status(500).json(err)
  }
})


export default routes;
