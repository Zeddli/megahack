import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Swagger configuration options
 * This defines the metadata for our API documentation
 */
const swaggerOptions: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Farm Protection API',
      version: '1.0.0',
      description: 'REST API for Farm Protection agricultural insurance platform',
      contact: {
        name: 'API Support',
        email: 'support@farm-protection.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Development server'
      },
      {
        url: 'https://api.farm-protection.com/api',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  // Path to the API docs
  apis: ['./src/routes/*.ts', './src/models/*.ts']
};

/**
 * Initialize swagger-jsdoc -> returns validated swagger spec in JSON format
 */
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec; 