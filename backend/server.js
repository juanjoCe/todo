const express = require("express");
const cors = require('cors');
const routes = require("./routes");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3001;
const PG_CONNECTION_STRING = process.env.PG_CONNECTION_STRING || "postgresql://your-db-user:your-db-password@localhost:5432/your-db-name";

main().catch((err) => console.log(err));

async function main() {
  try {
    // Create a PostgreSQL connection pool
    const pool = new Pool({
      connectionString: PG_CONNECTION_STRING,
      ssl: {
        rejectUnauthorized: false, // Only use this for development, not recommended for production
      },
    });

    const app = express();
    app.use(cors());
    app.use(express.json());

    // Your routes setup
    app.use("/api", routes);

    app.get('/', (req, res) => {
      res.send('Hello, PostgreSQL!');
    });

    // Listen on the dynamically assigned PORT
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
}


// const express = require("express");
// const cors = require('cors');
// const routes = require("./routes");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3001;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://172.17.0.2:27017/todos";


// main().catch((err) => console.log(err));

// async function main() {
//   try {
//     // Connect to the MongoDB container
//     await mongoose.connect(MONGODB_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });

//     const app = express();
//     app.use(cors());
//     app.use(express.json());

//     // Your routes setup
//     app.use("/api", routes);

//     app.get('/', (req, res) => {
//       res.send('Hello, MongoDB container!');
//     });

//     // Listen on the dynamically assigned PORT
//     app.listen(PORT, () => {
//       console.log(`Server is listening on port: ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB container:", error);
//   }
// }

// const express = require("express");
// const cors = require('cors');
// const routes = require("./routes");
// const mongoose = require("mongoose");
// const PORT = process.env.PORT || 3001;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/todos";


// main().catch((err) => console.log(err));

// async function main() {
//   try {
//     // Connect to the local MongoDB instance
//     await mongoose.connect("mongodb://localhost:27017/todos", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   });

//     const app = express();
//     app.use(cors());
//     app.use(express.json());

//     // Your routes setup
//     app.use("/api", routes);

//     app.get('/', (req, res) => {
//       res.send('Hello, local MongoDB!');
//     });

//     // Listen on the dynamically assigned PORT
//     app.listen(PORT, () => {
//       console.log(`Server is listening on port: ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to local MongoDB:", error);
//   }
// }



// const express = require("express");
// const cors = require('cors');
// const mongoose = require("mongoose");
// const routes = require("./routes");

// const PORT = process.env.PORT || 3001;
// const ATLAS_USERNAME = encodeURIComponent("username");
// const ATLAS_PASSWORD = encodeURIComponent("password123#");
// const ATLAS_CLUSTER = "localhost:27017";
// // const ATLAS_CLUSTER = "cluster0.isyvusg.mongodb.net";
// const ATLAS_DB = "todos";

// const ATLAS_URI = process.env.MONGODB_URI || `mongodb://${ATLAS_USERNAME}:${ATLAS_PASSWORD}@${ATLAS_CLUSTER}/${ATLAS_DB}?retryWrites=true&w=majority`;

// main().catch((err) => console.log(err));

// async function main() {
//   try {
//     // Connect to MongoDB using the provided connection string
//     await mongoose.connect(ATLAS_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log("Connected to MongoDB Atlas successfully!");

//     const app = express();
//     app.use(cors());
//     app.use(express.json());

//     // Your routes setup
//     app.use("/api", routes);

//     app.get('/', (req, res) => {
//       res.send('Hello, Cloud Run!');
//     });

//     // Listen on the dynamically assigned PORT
//     app.listen(PORT, () => {
//       console.log(`Server is listening on port: ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB Atlas:", error);
//   }
// }

// const express = require("express");
// const cors = require('cors');
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3001;
// // const MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongo:27017/todos"; // Use default if not provided
// // // Use the provided MongoDB Atlas connection string
// // // Replace 'username' and '<password>' with your actual MongoDB Atlas username and password

// const ATLAS_URI = process.env.MONGODB_URI || "mongodb+srv://username:password123#@cluster0.isyvusg.mongodb.net/todos?retryWrites=true&w=majority";

// main().catch((err) => console.log(err));

// async function main() {
//   // Connect to MongoDB using the provided connection string
//   await mongoose.connect(ATLAS_URI,{
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   });

//   const app = express();
//   app.use(cors());
//   app.use(express.json());

//   // Your routes setup
//   // app.use("/api", routes);

//   app.get('/', (req, res) => {
//     res.send('Hello, Cloud Run!');
//   });

//   // Listen on the dynamically assigned PORT
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port: ${PORT}`);
//   });
// }