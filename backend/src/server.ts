import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const SWAPI_BASE_URL = 'https://swapi.dev/api';

app.get('/api/planets', async (req, res) => {
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/planets/`);
    res.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
});

app.get('/api/planets/:id', async (req, res) => {
  const planetId = req.params.id;
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}/planets/${planetId}/`);
    const planetData = response.data;

    const residentPromises = planetData.residents.map((url: string) => axios.get(url));
    const residents = await Promise.all(residentPromises);
    planetData.residents = residents.map(resident => resident.data.name);

    res.json(planetData);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
