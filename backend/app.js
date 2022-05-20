import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import sessions from 'express-session'
import msIdExpress from 'microsoft-identity-express'

import indexRouter from './routes/index.js';
import usersRouter from './routes/controllers/users.js';
import itinierariesRouter from './routes/controllers/itineraries.js';

import models from './models.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// TODO: Remove these once firebase auth is set up
// Azure authentication settings
const appSettings = {
	appCredentials: {
    	clientId:  "a15188e8-98b4-473e-8b56-e328e9d0617c",
    	tenantId:  "f6b6dd5b-f02f-441a-99a0-162ac5060bd2",
    	clientSecret:  "T9n8Q~jd7aRTTrb1.0sZbVPs6TEq9D5efTxr7bpC"
	},
	authRoutes: {
    	redirect: "http://localhost:3000/redirect", //note: you can explicitly make this "localhost:3000/redirect" or "examplesite.me/redirect"
    	error: "/error", // the wrapper will redirect to this route in case of any error.
    	unauthorized: "/unauthorized" // the wrapper will redirect to this route in case of unauthorized access attempt.
	}
};


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24
app.use(sessions({
    secret: "1029384756alskdjfhf",
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}))
app.use(express.static(path.join(__dirname, 'public')));

const msid = new msIdExpress.WebAppAuthClientBuilder(appSettings).build();
app.use(msid.initialize());


app.use((req, res, next) => {
    // TODO: Add middleware to set req.session.account.username and req.session.isAuthenticated
});


app.use((req, res, next) => {
    req.models = models;
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/itineraries', itinierariesRouter);


// TODO: Replace endpoints with whatever is needed for firebase login on client side
app.get('/signin', (req, res) => {
	// If account already exists in database, redirect to account page
	if (1) {
		msid.signIn({postLoginRedirect: '/'});
	} else {
		// If account does not exist, redirect to account setup
		msid.signIn({postLoginRedirect: '/users/new'});
	}
})

app.get('/signout',
	msid.signOut({postLogoutRedirect: '/'})
);

export default app;
