const corse = require('cors');
let allowedOrigins = [...];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1 {
            let message = `The CORS policy for this application doesn't allow access from origin ` + origin;
            return callback(new Error(message), false);
        }
        return callback(null, true);
    }
}));