const admin = require("firebase-admin");
const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://liism-2a462.firebaseio.com"
});