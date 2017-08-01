const sanitizedNames = {
  module: 'module$'
}

function sanitizeName( name ) {
  if ( !name ) return '';

  if ( name.indexOf( 'ruleSet-' ) === 0 )
    return name.substr( 8);

  return sanitizedNames[ name ] || name;
}

module.exports = {
  sanitizeName
}
