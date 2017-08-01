const _ = require( 'lodash' );
const ConfigNode = require( './config_node' );
const { type, scalar, extend } = require( './util' );

//condition
class ConditionNode extends ConfigNode {
  and( value ) {}

  exclude( value ) {}

  include( value ) {}

  not( value ) {}

  or( value ) {}

  test( value ) {}

}

//rule
class RuleNode extends ConfigNode {
  enforce( value ) {}

  exclude( value ) {}

  include( value ) {}

  issuer( value ) {}

  loader( value ) {}

  loaders( value ) {}

  oneOf( value ) {}

  options( value ) {}

  parser( value ) {}

  query( value ) {}

  resource( value ) {}

  resourceQuery( value ) {}

  compiler( value ) {}

  test( value ) {
    this.value.test = value;
  }

  use( value ) {
    this.value.use = value;
  }

}

//use-item
class UseItemNode extends ConfigNode {
  loader( value ) {}

  options( value ) {}

  query( value ) {}

}

//webpack.module$
class ModuleNode extends ConfigNode {
  exprContextCritical( value ) {}

  exprContextRecursive( value ) {}

  exprContextRegExp( value ) {}

  exprContextRequest( value ) {}

  loader( value ) {}

  noParse( value ) {}

  rule( value ) {
    this.value.rules = this.value.rules || [];
    this.value.rules.push( value );
  }

  unknownContextCritical( value ) {}

  unknownContextRecursive( value ) {}

  unknownContextRegExp( value ) {}

  unknownContextRequest( value ) {}

  unsafeCache( value ) {}

  wrappedContextCritical( value ) {}

  wrappedContextRecursive( value ) {}

  wrappedContextRegExp( value ) {}

  strictExportPresence( value ) {}

  strictThisContextOnImports( value ) {}

}

//webpack.node
class NodeNode extends ConfigNode {
  Buffer( value ) {}

  __dirname( value ) {}

  __filename( value ) {}

  console( value ) {}

  global( value ) {}

  process( value ) {}

}

//webpack.output.auxiliaryComment
class AuxiliaryCommentNode extends ConfigNode {
  amd( value ) {}

  commonjs( value ) {}

  commonjs2( value ) {}

  root( value ) {}

}

//webpack.output.devtoolLineToLine
class DevtoolLineToLineNode extends ConfigNode {
  exclude( value ) {}

  include( value ) {}

  test( value ) {}

}

//webpack.output.library
class LibraryNode extends ConfigNode {
  root( value ) {}

  amd( value ) {}

  commonjs( value ) {}

}

//webpack.output
class OutputNode extends ConfigNode {
  auxiliaryComment( value ) {}

  chunkFilename( value ) {}

  crossOriginLoading( value ) {}

  chunkLoadTimeout( value ) {}

  devtoolFallbackModuleFilenameTemplate( value ) {}

  devtoolLineToLine( value ) {}

  devtoolModuleFilenameTemplate( value ) {}

  filename( value ) {}

  hashDigest( value ) {}

  hashDigestLength( value ) {}

  hashFunction( value ) {}

  hashSalt( value ) {}

  hotUpdateChunkFilename( value ) {}

  hotUpdateFunction( value ) {}

  hotUpdateMainFilename( value ) {}

  jsonpFunction( value ) {}

  library( value ) {}

  libraryTarget( value ) {}

  libraryExport( value ) {}

  path( value ) {}

  pathinfo( value ) {}

  publicPath( value ) {}

  sourceMapFilename( value ) {}

  sourcePrefix( value ) {}

  strictModuleExceptionHandling( value ) {}

  umdNamedDefine( value ) {}

}

//webpack.performance
class PerformanceNode extends ConfigNode {
  assetFilter( value ) {}

  hints( value ) {}

  maxEntrypointSize( value ) {}

  maxAssetSize( value ) {}

}

//webpack.resolve.alias
class AliasNode extends ConfigNode {
  name( value ) {}

  onlyModule( value ) {}

}

//webpack.resolve
class ResolveNode extends ConfigNode {
  alias( value ) {}

  aliasField( value ) {}

  cachePredicate( value ) {}

  cacheWithContext( value ) {}

  descriptionFile( value ) {}

  enforceExtension( value ) {}

  enforceModuleExtension( value ) {}

  extension( value ) {}

  fileSystem( value ) {}

  mainField( value ) {}

  mainFile( value ) {}

  moduleExtension( value ) {}

  module$( value ) {
    this.value.module = _.extend( {}, this.value.module, value );
  }

  plugin( value ) {}

  resolver( value ) {}

  symlinks( value ) {}

  unsafeCache( value ) {}

  useSyncFileSystemCalls( value ) {}

}

//webpack.resolveLoader
class ResolveLoaderNode extends ConfigNode {
  alias( value ) {}

  aliasField( value ) {}

  cachePredicate( value ) {}

  cacheWithContext( value ) {}

  descriptionFile( value ) {}

  enforceExtension( value ) {}

  enforceModuleExtension( value ) {}

  extension( value ) {}

  fileSystem( value ) {}

  mainField( value ) {}

  mainFile( value ) {}

  moduleExtension( value ) {}

  module$( value ) {}

  plugin( value ) {}

  resolver( value ) {}

  symlinks( value ) {}

  unsafeCache( value ) {}

  useSyncFileSystemCalls( value ) {}

}

//webpack.stats
class StatsNode extends ConfigNode {
  context( value ) {}

  hash( value ) {}

  version( value ) {}

  timings( value ) {}

  assets( value ) {}

  chunks( value ) {}

  chunkModules( value ) {}

  modules( value ) {}

  children( value ) {}

  cached( value ) {}

  reasons( value ) {}

  source( value ) {}

  warningsFilter( value ) {}

  errorDetails( value ) {}

  chunkOrigins( value ) {}

  modulesSort( value ) {}

  moduleTrace( value ) {}

  chunksSort( value ) {}

  assetsSort( value ) {}

  providedExports( value ) {}

  usedExports( value ) {}

  optimizationBailout( value ) {}

}

//webpack.watchOptions
class WatchOptionsNode extends ConfigNode {
  aggregateTimeout( value ) {}

  poll( value ) {}

}

//webpack
class WebpackNode extends ConfigNode {
  amd( value ) {}

  bail( value ) {}

  cache( value ) {}

  context( value ) {}

  dependency( value ) {}

  devServer( value ) {}

  devtool( value ) {}

  entry( value ) {
    extend( this.value, value, 'entry' );
  }

  externals( value ) {}

  loader( value ) {}

  module$( value ) {
    this.value.module = _.extend( {}, this.value.module, value );
  }

  name( value ) {}

  node( value ) {}

  output( value ) {}

  performance( value ) {}

  plugin( value ) {
    this.value.plugins = this.value.plugins || [];
    this.value.plugins.push(value);
  }

  profile( value ) {}

  recordsInputPath( value ) {}

  recordsOutputPath( value ) {}

  recordsPath( value ) {}

  resolve( value ) {}

  resolveLoader( value ) {}

  stats( value ) {}

  target( value ) {}

  watch( value ) {}

  watchOptions( value ) {}

}

module.exports = {
  ConditionNode: ConditionNode,
  AndNode: class extends ConfigNode {},
  ExcludeNode: class extends ConfigNode {},
  IncludeNode: class extends ConfigNode {},
  NotNode: class extends ConfigNode {},
  OrNode: class extends ConfigNode {},
  TestNode: class extends ConfigNode {},
  RuleNode: RuleNode,
  EnforceNode: class extends ConfigNode {},
  IssuerNode: class extends ConfigNode {},
  LoaderNode: class extends ConfigNode {},
  LoadersNode: class extends ConfigNode {},
  OneOfNode: class extends ConfigNode {},
  OptionsNode: class extends ConfigNode {},
  ParserNode: class extends ConfigNode {},
  QueryNode: class extends ConfigNode {},
  ResourceNode: class extends ConfigNode {},
  ResourceQueryNode: class extends ConfigNode {},
  CompilerNode: class extends ConfigNode {},
  UseNode: class extends ConfigNode {},
  UseItemNode: UseItemNode,
  AmdNode: class extends ConfigNode {},
  BailNode: class extends ConfigNode {},
  CacheNode: class extends ConfigNode {},
  ContextNode: class extends ConfigNode {},
  DependencyNode: class extends ConfigNode {},
  DevServerNode: class extends ConfigNode {},
  DevtoolNode: class extends ConfigNode {},
  EntryNode: class extends ConfigNode {},
  ExternalsNode: class extends ConfigNode {},
  ExprContextCriticalNode: class extends ConfigNode {},
  ExprContextRecursiveNode: class extends ConfigNode {},
  ExprContextRegExpNode: class extends ConfigNode {},
  ExprContextRequestNode: class extends ConfigNode {},
  NoParseNode: class extends ConfigNode {},
  UnknownContextCriticalNode: class extends ConfigNode {},
  UnknownContextRecursiveNode: class extends ConfigNode {},
  UnknownContextRegExpNode: class extends ConfigNode {},
  UnknownContextRequestNode: class extends ConfigNode {},
  UnsafeCacheNode: class extends ConfigNode {},
  WrappedContextCriticalNode: class extends ConfigNode {},
  WrappedContextRecursiveNode: class extends ConfigNode {},
  WrappedContextRegExpNode: class extends ConfigNode {},
  StrictExportPresenceNode: class extends ConfigNode {},
  StrictThisContextOnImportsNode: class extends ConfigNode {},
  ModuleNode: ModuleNode,
  NameNode: class extends ConfigNode {},
  BufferNode: class extends ConfigNode {},
  DirnameNode: class extends ConfigNode {},
  FilenameNode: class extends ConfigNode {},
  ConsoleNode: class extends ConfigNode {},
  GlobalNode: class extends ConfigNode {},
  ProcessNode: class extends ConfigNode {},
  NodeNode: NodeNode,
  CommonjsNode: class extends ConfigNode {},
  Commonjs2Node: class extends ConfigNode {},
  RootNode: class extends ConfigNode {},
  AuxiliaryCommentNode: AuxiliaryCommentNode,
  ChunkFilenameNode: class extends ConfigNode {},
  CrossOriginLoadingNode: class extends ConfigNode {},
  ChunkLoadTimeoutNode: class extends ConfigNode {},
  DevtoolFallbackModuleFilenameTemplateNode: class extends ConfigNode {},
  DevtoolLineToLineNode: DevtoolLineToLineNode,
  DevtoolModuleFilenameTemplateNode: class extends ConfigNode {},
  HashDigestNode: class extends ConfigNode {},
  HashDigestLengthNode: class extends ConfigNode {},
  HashFunctionNode: class extends ConfigNode {},
  HashSaltNode: class extends ConfigNode {},
  HotUpdateChunkFilenameNode: class extends ConfigNode {},
  HotUpdateFunctionNode: class extends ConfigNode {},
  HotUpdateMainFilenameNode: class extends ConfigNode {},
  JsonpFunctionNode: class extends ConfigNode {},
  LibraryNode: LibraryNode,
  LibraryTargetNode: class extends ConfigNode {},
  LibraryExportNode: class extends ConfigNode {},
  PathNode: class extends ConfigNode {},
  PathinfoNode: class extends ConfigNode {},
  PublicPathNode: class extends ConfigNode {},
  SourceMapFilenameNode: class extends ConfigNode {},
  SourcePrefixNode: class extends ConfigNode {},
  StrictModuleExceptionHandlingNode: class extends ConfigNode {},
  UmdNamedDefineNode: class extends ConfigNode {},
  OutputNode: OutputNode,
  AssetFilterNode: class extends ConfigNode {},
  HintsNode: class extends ConfigNode {},
  MaxEntrypointSizeNode: class extends ConfigNode {},
  MaxAssetSizeNode: class extends ConfigNode {},
  PerformanceNode: PerformanceNode,
  PluginNode: class extends ConfigNode {},
  ProfileNode: class extends ConfigNode {},
  RecordsInputPathNode: class extends ConfigNode {},
  RecordsOutputPathNode: class extends ConfigNode {},
  RecordsPathNode: class extends ConfigNode {},
  OnlyModuleNode: class extends ConfigNode {},
  AliasNode: AliasNode,
  AliasFieldNode: class extends ConfigNode {},
  CachePredicateNode: class extends ConfigNode {},
  CacheWithContextNode: class extends ConfigNode {},
  DescriptionFileNode: class extends ConfigNode {},
  EnforceExtensionNode: class extends ConfigNode {},
  EnforceModuleExtensionNode: class extends ConfigNode {},
  ExtensionNode: class extends ConfigNode {},
  FileSystemNode: class extends ConfigNode {},
  MainFieldNode: class extends ConfigNode {},
  MainFileNode: class extends ConfigNode {},
  ModuleExtensionNode: class extends ConfigNode {},
  ResolverNode: class extends ConfigNode {},
  SymlinksNode: class extends ConfigNode {},
  UseSyncFileSystemCallsNode: class extends ConfigNode {},
  ResolveNode: ResolveNode,
  ResolveLoaderNode: ResolveLoaderNode,
  HashNode: class extends ConfigNode {},
  VersionNode: class extends ConfigNode {},
  TimingsNode: class extends ConfigNode {},
  AssetsNode: class extends ConfigNode {},
  ChunksNode: class extends ConfigNode {},
  ChunkModulesNode: class extends ConfigNode {},
  ModulesNode: class extends ConfigNode {},
  ChildrenNode: class extends ConfigNode {},
  CachedNode: class extends ConfigNode {},
  ReasonsNode: class extends ConfigNode {},
  SourceNode: class extends ConfigNode {},
  WarningsFilterNode: class extends ConfigNode {},
  ErrorDetailsNode: class extends ConfigNode {},
  ChunkOriginsNode: class extends ConfigNode {},
  ModulesSortNode: class extends ConfigNode {},
  ModuleTraceNode: class extends ConfigNode {},
  ChunksSortNode: class extends ConfigNode {},
  AssetsSortNode: class extends ConfigNode {},
  ProvidedExportsNode: class extends ConfigNode {},
  UsedExportsNode: class extends ConfigNode {},
  OptimizationBailoutNode: class extends ConfigNode {},
  StatsNode: StatsNode,
  TargetNode: class extends ConfigNode {},
  WatchNode: class extends ConfigNode {},
  AggregateTimeoutNode: class extends ConfigNode {},
  PollNode: class extends ConfigNode {},
  WatchOptionsNode: WatchOptionsNode,
  WebpackNode: WebpackNode
}
