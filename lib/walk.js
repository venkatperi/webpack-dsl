const schema = require( '../webpackOptionsSchema.json' );
const createVisitor = require( 'json-schema-visitor' );

const visitor = createVisitor( {

  object: ( schema, callback ) => {
    callback( schema )
    if ( schema && schema.properties )
      Object.keys( schema.properties )
      .map( key => schema.properties[ key ] )
      .forEach( childSchema => visitor( childSchema, callback ) )
  },
  array: ( schema, callback ) => {
    //callback( schema )
    visitor( schema.items, callback )
  },
  allOf: ( schema, callback ) => {
    //callback( schema )
    schema.allOf.forEach( childSchema => visitor( childSchema, callback ) )
  },
  anyOf: ( schema, callback ) => {
    //callback( schema )
    schema.anyOf.forEach( childSchema => visitor( childSchema, callback ) )
  },
  oneOf: ( schema, callback ) => {
    //callback( schema )
    schema.oneOf.forEach( childSchema => visitor( childSchema, callback ) )
  },
  any: ( schema, callback ) => {
    //callback( schema )
  }
} )

visitor( schema, schema => console.log( schema ) )
