const express = require('express')
const cors = require('cors');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;    //it will be available at http://localhost:3000