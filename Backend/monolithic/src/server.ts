import app from './app';
import mongoose from 'mongoose';

require('dotenv').config();

//conect to the moongo
mongoose
  .connect(process.env.MONG_URI as string)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connect to mongose DB & Listen on port 3000');
    });
  })
  .catch((error: any | unknown) => {
    console.log(error);
  });
