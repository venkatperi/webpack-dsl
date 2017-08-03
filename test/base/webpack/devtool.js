notEnvironments( [ 'production' ], () =>
  devtool( 'cheap-module-source-map' )
)

production( () =>
  devtool( false )
)
