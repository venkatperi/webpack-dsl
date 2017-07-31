const sanitizedNames = {
  module: 'module$'
}

function sanitizeName( name ) {
  return sanitizedNames[ name ] || name;
}

module.exports = {
  sanitizeName
}
