// index.mjs
import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

const app = express();

// Enable CORS for all routes with specific options
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization', 'X-Amz-Date', 'X-Api-Key', 'X-Amz-Security-Token'],
  credentials: true
};

app.use(cors(corsOptions));

// Additional headers for OPTIONS requests
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Path normalization middleware
app.use((req, res, next) => {
  // Strip environment prefix if present version JULIEN v2
  if (req.path.startsWith('/prod') || req.path.startsWith('/dev') || req.path.startsWith('/staging')) {
    console.log(`Normalizing path: ${req.path} -> ${req.path.replace(/^\/prod|\/dev|\/staging/, '')}`);
    req.url = req.url.replace(/^\/prod|\/dev|\/staging/, '');
  }
  
  // Log the full request to see structure
  console.log('headers', req.headers);
  console.log('req', req);

  const claims = req.requestContext.authorizer.lambda;
  // TODO Change and remove this once switched to a lambda authorizer
  
  if (claims) {
    // Create a simplified user object with the essential Cognito information
    req.user = {
      sub: claims.sub,
      username: claims.username,
      groups: claims['cognito:groups']
    };
  };
  
  next();
});

// ability_list
app.get('/api/v2/ability/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/ability/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/ability/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// ability_retrieve
app.get('/api/v2/ability/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/ability/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/ability/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// berry_list
app.get('/api/v2/berry/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/berry/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/berry/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// berry_retrieve
app.get('/api/v2/berry/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/berry/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/berry/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// berry_firmness_list
app.get('/api/v2/berry-firmness/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/berry-firmness/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/berry-firmness/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// berry_firmness_retrieve
app.get('/api/v2/berry-firmness/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/berry-firmness/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/berry-firmness/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// berry_flavor_list
app.get('/api/v2/berry-flavor/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/berry-flavor/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/berry-flavor/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// berry_flavor_retrieve
app.get('/api/v2/berry-flavor/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/berry-flavor/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/berry-flavor/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// characteristic_list
app.get('/api/v2/characteristic/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/characteristic/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/characteristic/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// characteristic_retrieve
app.get('/api/v2/characteristic/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/characteristic/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/characteristic/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// contest_type_list
app.get('/api/v2/contest-type/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/contest-type/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/contest-type/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// contest_type_retrieve
app.get('/api/v2/contest-type/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/contest-type/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/contest-type/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// contest_effect_list
app.get('/api/v2/contest-effect/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/contest-effect/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/contest-effect/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// contest_effect_retrieve
app.get('/api/v2/contest-effect/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/contest-effect/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/contest-effect/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// egg_group_list
app.get('/api/v2/egg-group/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/egg-group/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/egg-group/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// egg_group_retrieve
app.get('/api/v2/egg-group/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/egg-group/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/egg-group/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// encounter_method_list
app.get('/api/v2/encounter-method/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/encounter-method/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/encounter-method/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// encounter_method_retrieve
app.get('/api/v2/encounter-method/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/encounter-method/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/encounter-method/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// encounter_condition_list
app.get('/api/v2/encounter-condition/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/encounter-condition/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/encounter-condition/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// encounter_condition_retrieve
app.get('/api/v2/encounter-condition/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/encounter-condition/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/encounter-condition/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// encounter_condition_value_list
app.get('/api/v2/encounter-condition-value/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/encounter-condition-value/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/encounter-condition-value/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// encounter_condition_value_retrieve
app.get('/api/v2/encounter-condition-value/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/encounter-condition-value/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/encounter-condition-value/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// evolution_chain_list
app.get('/api/v2/evolution-chain/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/evolution-chain/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/evolution-chain/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// evolution_chain_retrieve
app.get('/api/v2/evolution-chain/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/evolution-chain/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/evolution-chain/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// evolution_trigger_list
app.get('/api/v2/evolution-trigger/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/evolution-trigger/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/evolution-trigger/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// evolution_trigger_retrieve
app.get('/api/v2/evolution-trigger/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/evolution-trigger/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/evolution-trigger/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// generation_list
app.get('/api/v2/generation/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/generation/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/generation/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// generation_retrieve
app.get('/api/v2/generation/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/generation/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/generation/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// gender_list
app.get('/api/v2/gender/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/gender/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/gender/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// gender_retrieve
app.get('/api/v2/gender/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/gender/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/gender/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// growth_rate_list
app.get('/api/v2/growth-rate/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/growth-rate/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/growth-rate/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// growth_rate_retrieve
app.get('/api/v2/growth-rate/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/growth-rate/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/growth-rate/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_list
app.get('/api/v2/item/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_retrieve
app.get('/api/v2/item/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_category_list
app.get('/api/v2/item-category/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item-category/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item-category/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_category_retrieve
app.get('/api/v2/item-category/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item-category/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item-category/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_attribute_list
app.get('/api/v2/item-attribute/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item-attribute/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item-attribute/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_attribute_retrieve
app.get('/api/v2/item-attribute/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item-attribute/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item-attribute/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_fling_effect_list
app.get('/api/v2/item-fling-effect/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item-fling-effect/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item-fling-effect/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_fling_effect_retrieve
app.get('/api/v2/item-fling-effect/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item-fling-effect/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item-fling-effect/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_pocket_list
app.get('/api/v2/item-pocket/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item-pocket/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item-pocket/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// item_pocket_retrieve
app.get('/api/v2/item-pocket/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/item-pocket/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/item-pocket/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// language_list
app.get('/api/v2/language/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/language/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/language/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// language_retrieve
app.get('/api/v2/language/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/language/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/language/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// location_list
app.get('/api/v2/location/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/location/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/location/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// location_retrieve
app.get('/api/v2/location/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/location/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/location/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// location_area_list
app.get('/api/v2/location-area/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/location-area/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/location-area/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// location_area_retrieve
app.get('/api/v2/location-area/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/location-area/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/location-area/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// machine_list
app.get('/api/v2/machine/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/machine/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/machine/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// machine_retrieve
app.get('/api/v2/machine/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/machine/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/machine/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_list
app.get('/api/v2/move/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_retrieve
app.get('/api/v2/move/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_ailment_list
app.get('/api/v2/move-ailment/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-ailment/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-ailment/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_ailment_retrieve
app.get('/api/v2/move-ailment/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-ailment/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-ailment/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_battle_style_list
app.get('/api/v2/move-battle-style/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-battle-style/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-battle-style/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_battle_style_retrieve
app.get('/api/v2/move-battle-style/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-battle-style/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-battle-style/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_category_list
app.get('/api/v2/move-category/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-category/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-category/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_category_retrieve
app.get('/api/v2/move-category/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-category/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-category/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_damage_class_list
app.get('/api/v2/move-damage-class/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-damage-class/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-damage-class/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_damage_class_retrieve
app.get('/api/v2/move-damage-class/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-damage-class/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-damage-class/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_learn_method_list
app.get('/api/v2/move-learn-method/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-learn-method/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-learn-method/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_learn_method_retrieve
app.get('/api/v2/move-learn-method/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-learn-method/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-learn-method/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_target_list
app.get('/api/v2/move-target/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-target/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-target/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// move_target_retrieve
app.get('/api/v2/move-target/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/move-target/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/move-target/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// nature_list
app.get('/api/v2/nature/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/nature/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/nature/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// nature_retrieve
app.get('/api/v2/nature/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/nature/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/nature/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pal_park_area_list
app.get('/api/v2/pal-park-area/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pal-park-area/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pal-park-area/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pal_park_area_retrieve
app.get('/api/v2/pal-park-area/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pal-park-area/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pal-park-area/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokedex_list
app.get('/api/v2/pokedex/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokedex/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokedex/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokedex_retrieve
app.get('/api/v2/pokedex/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokedex/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokedex/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_list
app.get('/api/v2/pokemon/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_retrieve
app.get('/api/v2/pokemon/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_color_list
app.get('/api/v2/pokemon-color/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-color/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-color/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_color_retrieve
app.get('/api/v2/pokemon-color/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-color/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-color/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_form_list
app.get('/api/v2/pokemon-form/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-form/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-form/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_form_retrieve
app.get('/api/v2/pokemon-form/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-form/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-form/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_habitat_list
app.get('/api/v2/pokemon-habitat/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-habitat/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-habitat/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_habitat_retrieve
app.get('/api/v2/pokemon-habitat/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-habitat/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-habitat/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_shape_list
app.get('/api/v2/pokemon-shape/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-shape/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-shape/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_shape_retrieve
app.get('/api/v2/pokemon-shape/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-shape/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-shape/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_species_list
app.get('/api/v2/pokemon-species/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-species/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-species/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_species_retrieve
app.get('/api/v2/pokemon-species/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon-species/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon-species/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokeathlon_stat_list
app.get('/api/v2/pokeathlon-stat/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokeathlon-stat/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokeathlon-stat/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokeathlon_stat_retrieve
app.get('/api/v2/pokeathlon-stat/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokeathlon-stat/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokeathlon-stat/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// region_list
app.get('/api/v2/region/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/region/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/region/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// region_retrieve
app.get('/api/v2/region/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/region/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/region/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// stat_list
app.get('/api/v2/stat/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/stat/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/stat/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// stat_retrieve
app.get('/api/v2/stat/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/stat/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/stat/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// super_contest_effect_list
app.get('/api/v2/super-contest-effect/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/super-contest-effect/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/super-contest-effect/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// super_contest_effect_retrieve
app.get('/api/v2/super-contest-effect/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/super-contest-effect/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/super-contest-effect/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// type_list
app.get('/api/v2/type/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/type/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/type/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// type_retrieve
app.get('/api/v2/type/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/type/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/type/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// version_list
app.get('/api/v2/version/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/version/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/version/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// version_retrieve
app.get('/api/v2/version/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/version/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/version/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// version_group_list
app.get('/api/v2/version-group/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/version-group/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/version-group/',
    originalUrl: req.originalUrl,
    path: req.path,
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// version_group_retrieve
app.get('/api/v2/version-group/:id/', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/version-group/{id}/ and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/version-group/{id}/',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    id: req.params.id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});

// pokemon_encounters_retrieve
app.get('/api/v2/pokemon/:pokemon_id/encounters', (req, res) => {
  console.log(`Route matched: ${req.path} (Original URL: ${req.originalUrl})`);
  
  res.json({
    message: `I have received your GET for /api/v2/pokemon/{pokemon_id}/encounters and now all you have to do is add code here to process it`,
    method: 'GET',
    resource: '/api/v2/pokemon/{pokemon_id}/encounters',
    originalUrl: req.originalUrl,
    path: req.path,
  params: {
    pokemon_id: req.params.pokemon_id
  },
    user: req.user || {
      sub: 'unknown',
      username: 'unknown',
      groups: []
    },
    body: req.body || {},
    query: req.query || {}
  });
});


// Catch-all route handler for unmatched paths
app.use((req, res) => {
  console.log(`No route matched: ${req.path} (Method: ${req.method})`);
  res.status(404).json({
    error: 'Not Found',
    message: `No handler defined for ${req.method} ${req.path}`,
    path: req.path,
    method: req.method
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route NOT found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

const handler = serverless(app);
export { handler };