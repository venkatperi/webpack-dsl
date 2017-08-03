const _ = require( 'lodash' );
const ConfigNode = require( './config_node' );
const { type, scalar, extend } = require( './util' );

//condition
class ConditionNode extends ConfigNode {
  constructor( opts, args ) {
    super( opts, args );
    [ 'include', 'exclude', 'and', 'not', 'or', 'test' ].forEach( ( t ) =>
      this._memberType[ t ] = 'array' )
  }
}

//rule
class RuleNode extends ConfigNode {
  constructor( opts, args ) {
    super( opts, args );
    [ 'include', 'exclude', 'issuer', 'resourece', 'resourceQuery',
      'compiler', 'test'
    ].forEach( ( t ) =>
      this._memberType[ t ] = 'array' )
  }
}

//webpack.module$
class ModuleNode extends ConfigNode {
  rule( ...args ) {
    this._push( 'rules', ...args );
  }
}

//webpack.output.devtoolLineToLine
class DevtoolLineToLineNode extends ConfigNode {
  constructor( opts, args ) {
    super( opts, args );
    [ 'include', 'exclude', 'test' ].forEach( ( t ) =>
      this._memberType[ t ] = 'array' )
  }
}

//webpack.resolve
class ResolveNode extends ConfigNode {
  constructor( opts, args ) {
    super( opts, args );
    [ 'module$' ].forEach( ( t ) =>
      this._memberType[ t ] = 'object' );
    [ 'plugin' ].forEach( ( t ) =>
      this._memberType[ t ] = 'array' )
  }

}

//webpack.resolveLoader
class ResolveLoaderNode extends ConfigNode {
  constructor( opts, args ) {
    super( opts, args );
    [ 'module$' ].forEach( ( t ) =>
      this._memberType[ t ] = 'object' );
    [ 'plugin' ].forEach( ( t ) =>
      this._memberType[ t ] = 'array' )
  }
}

//webpack.stats
class StatsNode extends ConfigNode {}

//webpack.watchOptions
class WatchOptionsNode extends ConfigNode {

}

//webpack.plugins
class PluginNode extends ConfigNode {
  evaluate() {
    let args = this.args;
    let id = args.shift();
    let plugin = id;
    args = scalar( args );

    switch ( type( id ) ) {
      case 'string':
        let klass = require( id );
        this.value = new klass( args );
        break;

      case 'function':
        //hack to check if function is a constructor
        this.value = id.prototype ? new id( args ) : id( args )
        break;

      default:
        this.value = id
    }
    return super.evaluate();
  }
}

//webpack
class WebpackNode extends ConfigNode {
  constructor( opts, args ) {
    super( opts, args );
    [ 'entry' ].forEach( ( t ) =>
      this._memberType[ t ] = 'object' );
  }

  plugin( ...args ) {
    this._push( 'plugins', ...args );
  }

  module$( ...args ) {
    this._merge( ...args.map( ( x ) => _.set( {}, 'module', x ) ) )
  }

  entry( ...args ) {
    this._merge( ...args.map( ( x ) => _.set( {}, 'entry', x ) ) )
  }

}

const _k = () => class extends ConfigNode {}

module.exports = {
  ConditionNode: ConditionNode,
  AndNode: _k(),
  ExcludeNode: _k(),
  IncludeNode: _k(),
  NotNode: _k(),
  OrNode: _k(),
  TestNode: _k(),
  RuleNode: RuleNode,
  EnforceNode: _k(),
  IssuerNode: _k(),
  LoaderNode: _k(),
  LoadersNode: _k(),
  OneOfNode: _k(),
  OptionsNode: _k(),
  ParserNode: _k(),
  QueryNode: _k(),
  ResourceNode: _k(),
  ResourceQueryNode: _k(),
  CompilerNode: _k(),
  UseNode: _k(),
  UseItemNode: _k(),
  AmdNode: _k(),
  BailNode: _k(),
  CacheNode: _k(),
  ContextNode: _k(),
  DependencyNode: _k(),
  DevServerNode: _k(),
  DevtoolNode: _k(),
  EntryNode: _k(),
  ExternalsNode: _k(),
  ExprContextCriticalNode: _k(),
  ExprContextRecursiveNode: _k(),
  ExprContextRegExpNode: _k(),
  ExprContextRequestNode: _k(),
  NoParseNode: _k(),
  UnknownContextCriticalNode: _k(),
  UnknownContextRecursiveNode: _k(),
  UnknownContextRegExpNode: _k(),
  UnknownContextRequestNode: _k(),
  UnsafeCacheNode: _k(),
  WrappedContextCriticalNode: _k(),
  WrappedContextRecursiveNode: _k(),
  WrappedContextRegExpNode: _k(),
  StrictExportPresenceNode: _k(),
  StrictThisContextOnImportsNode: _k(),
  ModuleNode: ModuleNode,
  NameNode: _k(),
  BufferNode: _k(),
  DirnameNode: _k(),
  FilenameNode: _k(),
  ConsoleNode: _k(),
  GlobalNode: _k(),
  ProcessNode: _k(),
  NodeNode: _k(),
  CommonjsNode: _k(),
  Commonjs2Node: _k(),
  RootNode: _k(),
  AuxiliaryCommentNode: _k(),
  ChunkFilenameNode: _k(),
  CrossOriginLoadingNode: _k(),
  ChunkLoadTimeoutNode: _k(),
  DevtoolFallbackModuleFilenameTemplateNode: _k(),
  DevtoolLineToLineNode: DevtoolLineToLineNode,
  DevtoolModuleFilenameTemplateNode: _k(),
  HashDigestNode: _k(),
  HashDigestLengthNode: _k(),
  HashFunctionNode: _k(),
  HashSaltNode: _k(),
  HotUpdateChunkFilenameNode: _k(),
  HotUpdateFunctionNode: _k(),
  HotUpdateMainFilenameNode: _k(),
  JsonpFunctionNode: _k(),
  LibraryTargetNode: _k(),
  LibraryNode: _k(),
  LibraryExportNode: _k(),
  PathNode: _k(),
  PathinfoNode: _k(),
  PublicPathNode: _k(),
  SourceMapFilenameNode: _k(),
  SourcePrefixNode: _k(),
  StrictModuleExceptionHandlingNode: _k(),
  UmdNamedDefineNode: _k(),
  OutputNode: _k(),
  AssetFilterNode: _k(),
  HintsNode: _k(),
  MaxEntrypointSizeNode: _k(),
  MaxAssetSizeNode: _k(),
  PluginNode: PluginNode || _klass(),
  PerformanceNode: _k(),
  ProfileNode: _k(),
  RecordsInputPathNode: _k(),
  RecordsOutputPathNode: _k(),
  RecordsPathNode: _k(),
  OnlyModuleNode: _k(),
  AliasFieldNode: _k(),
  AliasNode: _k(),
  CachePredicateNode: _k(),
  CacheWithContextNode: _k(),
  DescriptionFileNode: _k(),
  EnforceExtensionNode: _k(),
  EnforceModuleExtensionNode: _k(),
  ExtensionNode: _k(),
  FileSystemNode: _k(),
  MainFieldNode: _k(),
  MainFileNode: _k(),
  ModuleExtensionNode: _k(),
  ResolverNode: _k(),
  SymlinksNode: _k(),
  UseSyncFileSystemCallsNode: _k(),
  ResolveNode: ResolveNode,
  ResolveLoaderNode: ResolveLoaderNode,
  HashNode: _k(),
  VersionNode: _k(),
  TimingsNode: _k(),
  AssetsNode: _k(),
  ChunksNode: _k(),
  ChunkModulesNode: _k(),
  ModulesNode: _k(),
  ChildrenNode: _k(),
  CachedNode: _k(),
  ReasonsNode: _k(),
  SourceNode: _k(),
  WarningsFilterNode: _k(),
  ErrorDetailsNode: _k(),
  ChunkOriginsNode: _k(),
  ModulesSortNode: _k(),
  ModuleTraceNode: _k(),
  ChunksSortNode: _k(),
  AssetsSortNode: _k(),
  ProvidedExportsNode: _k(),
  UsedExportsNode: _k(),
  OptimizationBailoutNode: _k(),
  StatsNode: StatsNode,
  TargetNode: _k(),
  WatchNode: _k(),
  AggregateTimeoutNode: _k(),
  PollNode: _k(),
  WatchOptionsNode: WatchOptionsNode,
  WebpackNode: WebpackNode
}
