const installer = require( './installer' );
const _ = require( 'lodash' );

function plugins( items = {}, opts ) {
  let pkgNames = _( items ).keys().map( _.kebabCase ).value();
	opts = _.extend({ dev: true}, opts);
	installer.install(pkgNames, opts);
}

module.exports = plugins;
