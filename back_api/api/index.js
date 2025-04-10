const express = require('express');
const cors = require('cors');
const jsonwebtoken = require('jsonwebtoken');
const expressJSDocSwagger = require('express-jsdoc-swagger');

const recipes = require('./recipes');
const db = require('./users');

const app = express();
const jwtSecret = 'OurSuperLongRandomSecretToSignOurJWTgre5ezg4jyt5j4ui64gn56bd4sfs5qe4erg5t5yjh46yu6knsw4q';

const options = {
  info: {
    version: '1.0.0',
    title: 'Recipes API',
    license: {
      name: 'MIT',
    },
  },
  security: {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
    },
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api/docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
};

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

expressJSDocSwagger(app)(options);

const checkLoggedIn = (req, res, next) => {
  if (!req.user) {
    console.log('<< 401 UNAUTHORIZED');
    res.sendStatus(401);
  } else {
    next();
  }
};

// Add user to req if token exist and is valid
app.use((req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.split(' ')[1];
    try {
      const jwtContent = jsonwebtoken.verify(token, jwtSecret);
      req.user = jwtContent;
    } catch (err) {
      console.log('Invalid token', err);
    }
  }
  next();
});

/**
 * credential type
 * @typedef {object} Credentials
 * @property {string} email - The email
 * @property {string} password - The password
 */

/**
 * An auth user
 * @typedef {object} AuthUser
 * @property {string} pseudo - The pseudo
 * @property {string} token - The token
 * @property {boolean} logged - The logged
 */

/**
 * An ingredient type
 * @typedef {object} Ingredient
 * @property {string} name - The name
 * @property {number} id - The id
 * @property {number} quantity - The quantity
 * @property {string} unit - The unit
 */

/**
 * A recipe type
 * @typedef {object} Recipe
 * @property {number} id - The id
 * @property {string} title - The title
 * @property {string} slug - The slug
 * @property {string} thumbnail - The thumbnail
 * @property {string} author - The author
 * @property {string} difficulty - The difficulty
 * @property {string} description - The description
 * @property {array<string>} instructions - The instructions
 * @property {array<Ingredient>} ingredients - The ingredients
 */

/**
 * GET /api/recipes
 * @summary Returns a list of recipes
 * @tags recipes
 * @return {array<Recipe>} 200 - success response - application/json
 */
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

/**
 * GET /api/recipes/{idOrSlug}
 * @summary Returns a recipe
 * @tags recipes
 * @param {string} idOrSlug.path.required - slug param
 * @return {Recipe} 200 - success response - application/json
 */
app.get('/api/recipes/:idOrSlug', (req, res) => {
  console.log('>> GET /recipes/:idOrSlug', req.params.idOrSlug)
  const recipe = recipes.find(recipe => recipe.id === parseInt(req.params.idOrSlug) || recipe.slug === req.params.idOrSlug);
  if (!recipe) return res.status(404).send('The recipe with the given ID or Slug was not found.');
  res.json(recipe);
});

/**
 * POST /api/login
 * @summary Returns user credentials
 * @tags login
 * @param {Credentials} request.body.required - credentials - application/json
 * @return {AuthUser} 200 - success response - application/json
 * @example request - example Bob
 * {
 *   "email": "bob@mail.io",
 *   "password": "bobo"
 * }
 * @example request - example Alice
 * {
 *   "email": "alice@mail.io",
 *   "password": "al6"
 * }
 * @example request - example Dave
 * {
 *   "email": "dave@mail.io",
 *   "password": "davy"
 * }
 */
app.post('/api/login', (req, res) => {
  console.log('>> POST /login', req.body);
  const { email, password } = req.body;

  // authentication
  const user = db.users.find(user => user.email === email && user.password === password);

  // http response
  if (user) {
    const jwtContent = { userId: user.id };
    const jwtOptions = { 
      algorithm: 'HS256', 
      expiresIn: '3h' 
    };
    console.log('<< 200', user.username);
    res.json({ 
      logged: true, 
      pseudo: user.username,
      token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions),
    });
  }
  else {
    console.log('<< 401 UNAUTHORIZED');
    res.sendStatus(401);
  }
});


/**
 * GET /api/favorites
 * @summary Returns a list of favorites recipes
 * @tags recipes
 * @security BearerAuth
 * @return {array<Recipe>} 200 - success response - application/json
 */
app.get('/api/favorites', checkLoggedIn, (req, res) => {
  console.log('>> GET /favorites', req.user);

  const user = db.users.find(user => user.id === req.user.userId);
  console.log('<< 200');
  res.json({ 
    favorites: recipes.filter((recipe) => user.favorites.includes(recipe.id)), 
  });
});

app.use((req, res, next) => {
  next(new Error('Not found'))
});

// Error middleware
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    console.log('<< 401 UNAUTHORIZED - Invalid Token');
    res.status(401).send('Invalid token');
  } else if(err.message === 'Not found') {
    console.log('<< 404 NOT FOUND');
    res.status(404).send('Not found');
  }
});

module.exports = app;
