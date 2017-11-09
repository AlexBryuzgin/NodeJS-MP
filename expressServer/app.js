import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import cookieParser from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';
import router from './routes';

export default function(app, express) {
  app.use(cookieParser());
  app.use(queryParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({ 
    secret: "some_secret",
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  router(app);
};