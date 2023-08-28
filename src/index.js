const express = require('express');
const userRoutes = require('./routes/users');
const jasaRoutes = require('./routes/rab_jasa')
const aksesorisRoutes = require('./routes/rab_aksesoris');
const hasilRouter = require('./routes/rab_hasil');
const materialRouter = require('./routes/rab_material');
const srRouter = require('./routes/rab_paketsr');
const addDataRouter = require('./routes/add_data_role2');
const addRabRouter = require('./routes/add_rab');
const apiKeyMiddleware = require('./middleware/api-key-middleware');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/apikey', apiKeyMiddleware);


// user data
app.use('/api', userRoutes);

// jasa data
app.use('/api', jasaRoutes);

// aksesoris data
app.use('/api', aksesorisRoutes);

// hasil input role 1
app.use('/api', hasilRouter);

// material data 
app.use('/api', materialRouter);

// sr data
app.use('/api', srRouter);

// add hasil data
app.use('/api', addDataRouter);

// add rab data
app.use('/api', addRabRouter);
// Tambahkan penggunaan rute lainnya jika diperlukan

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
