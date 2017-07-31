const _ = require( 'lodash' );
const ConfigNode = require( "./config_node" );
const { type, scalar, extend } = require( './util' );

//ruleSet-condition
class ConditionNode extends ConfigNode {}

//ruleSet-condition.and
class AndNode extends ConfigNode {}

//ruleSet-condition.exclude
class ExcludeNode extends ConfigNode {}

//ruleSet-condition.include
class IncludeNode extends ConfigNode {}

//ruleSet-condition.not
class NotNode extends ConfigNode {}

//ruleSet-condition.or
class OrNode extends ConfigNode {}

//ruleSet-condition.test
class TestNode extends ConfigNode {}

//ruleSet-condition
class RuleSetConditionNode extends ConfigNode {}

//ruleSet-rule
class RuleNode extends ConfigNode {}

//ruleSet-rule.enforce
class EnforceNode extends ConfigNode {}

//ruleSet-rule.issuer
class IssuerNode extends ConfigNode {}

//ruleSet-rule.loader
class LoaderNode extends ConfigNode {}

//ruleSet-rule.loaders
class LoadersNode extends ConfigNode {}

//ruleSet-rule.oneOf
class OneOfNode extends ConfigNode {}

//ruleSet-rule.options
class OptionsNode extends ConfigNode {}

//ruleSet-rule.parser
class ParserNode extends ConfigNode {}

//ruleSet-rule.query
class QueryNode extends ConfigNode {}

//ruleSet-rule.resource
class ResourceNode extends ConfigNode {}

//ruleSet-rule.resourceQuery
class ResourceQueryNode extends ConfigNode {}

//ruleSet-rule.compiler
class CompilerNode extends ConfigNode {}

//ruleSet-rule.use
class UseNode extends ConfigNode {}

//ruleSet-rule
class RuleSetRuleNode extends ConfigNode {}

//ruleSet-use-item
class UseItemNode extends ConfigNode {}

//ruleSet-use-item
class RuleSetUseItemNode extends ConfigNode {}

//webpack.amd
class AmdNode extends ConfigNode {}

//webpack.bail
class BailNode extends ConfigNode {}

//webpack.cache
class CacheNode extends ConfigNode {}

//webpack.context
class ContextNode extends ConfigNode {}

//webpack.dependencies
class DependencyNode extends ConfigNode {}

//webpack.devServer
class DevServerNode extends ConfigNode {}

//webpack.devtool
class DevtoolNode extends ConfigNode {}

//webpack.entry
class EntryNode extends ConfigNode {
  evaluate( context ) {
    let t1 = type( context.entry )
    let t2 = type( this.args )
    if ( context.entry ) {
      if ( ( t1 === 'object' && ( t2 === 'string' || t2 === 'array' ) ) ||
        ( t1 === 'array' && t2 === 'object' ) )
        throw new Error( `incompatible entry: ${t1} vs ${t2}` );
    }
    if ( t1 === 'object' ) {
      extend( context, this.args, 'entry' );
    } else if ( !context.entry ) {
      context.entry = this.args;
    } else {
      switch ( t1 ) {
        case 'string':
          context.entry = [ context.entry ];
          break;
      }
      context.entry = _.flatten( context.entry.concat( this.args ) );
      return context;
    }
  }
}

//webpack.externals
class ExternalsNode extends ConfigNode {}

//webpack.module.exprContextCritical
class ExprContextCriticalNode extends ConfigNode {}

//webpack.module.exprContextRecursive
class ExprContextRecursiveNode extends ConfigNode {}

//webpack.module.exprContextRegExp
class ExprContextRegExpNode extends ConfigNode {}

//webpack.module.exprContextRequest
class ExprContextRequestNode extends ConfigNode {}

//webpack.module.noParse
class NoParseNode extends ConfigNode {}

//webpack.module.unknownContextCritical
class UnknownContextCriticalNode extends ConfigNode {}

//webpack.module.unknownContextRecursive
class UnknownContextRecursiveNode extends ConfigNode {}

//webpack.module.unknownContextRegExp
class UnknownContextRegExpNode extends ConfigNode {}

//webpack.module.unknownContextRequest
class UnknownContextRequestNode extends ConfigNode {}

//webpack.module.unsafeCache
class UnsafeCacheNode extends ConfigNode {}

//webpack.module.wrappedContextCritical
class WrappedContextCriticalNode extends ConfigNode {}

//webpack.module.wrappedContextRecursive
class WrappedContextRecursiveNode extends ConfigNode {}

//webpack.module.wrappedContextRegExp
class WrappedContextRegExpNode extends ConfigNode {}

//webpack.module.strictExportPresence
class StrictExportPresenceNode extends ConfigNode {}

//webpack.module.strictThisContextOnImports
class StrictThisContextOnImportsNode extends ConfigNode {}

//webpack.module
class ModuleNode extends ConfigNode {}

//webpack.name
class NameNode extends ConfigNode {}

//webpack.node.Buffer
class BufferNode extends ConfigNode {}

//webpack.node.__dirname
class DirnameNode extends ConfigNode {}

//webpack.node.__filename
class FilenameNode extends ConfigNode {}

//webpack.node.console
class ConsoleNode extends ConfigNode {}

//webpack.node.global
class GlobalNode extends ConfigNode {}

//webpack.node.process
class ProcessNode extends ConfigNode {}

//webpack.node
class NodeNode extends ConfigNode {}

//webpack.output.auxiliaryComment.commonjs
class CommonjsNode extends ConfigNode {}

//webpack.output.auxiliaryComment.commonjs2
class Commonjs2Node extends ConfigNode {}

//webpack.output.auxiliaryComment.root
class RootNode extends ConfigNode {}

//webpack.output.auxiliaryComment
class AuxiliaryCommentNode extends ConfigNode {}

//webpack.output.chunkFilename
class ChunkFilenameNode extends ConfigNode {}

//webpack.output.crossOriginLoading
class CrossOriginLoadingNode extends ConfigNode {}

//webpack.output.chunkLoadTimeout
class ChunkLoadTimeoutNode extends ConfigNode {}

//webpack.output.devtoolFallbackModuleFilenameTemplate
class DevtoolFallbackModuleFilenameTemplateNode extends ConfigNode {}

//webpack.output.devtoolLineToLine
class DevtoolLineToLineNode extends ConfigNode {}

//webpack.output.devtoolModuleFilenameTemplate
class DevtoolModuleFilenameTemplateNode extends ConfigNode {}

//webpack.output.hashDigest
class HashDigestNode extends ConfigNode {}

//webpack.output.hashDigestLength
class HashDigestLengthNode extends ConfigNode {}

//webpack.output.hashFunction
class HashFunctionNode extends ConfigNode {}

//webpack.output.hashSalt
class HashSaltNode extends ConfigNode {}

//webpack.output.hotUpdateChunkFilename
class HotUpdateChunkFilenameNode extends ConfigNode {}

//webpack.output.hotUpdateFunction
class HotUpdateFunctionNode extends ConfigNode {}

//webpack.output.hotUpdateMainFilename
class HotUpdateMainFilenameNode extends ConfigNode {}

//webpack.output.jsonpFunction
class JsonpFunctionNode extends ConfigNode {}

//webpack.output.library
class LibraryNode extends ConfigNode {}

//webpack.output.libraryTarget
class LibraryTargetNode extends ConfigNode {}

//webpack.output.libraryExport
class LibraryExportNode extends ConfigNode {}

//webpack.output.path
class PathNode extends ConfigNode {}

//webpack.output.pathinfo
class PathinfoNode extends ConfigNode {}

//webpack.output.publicPath
class PublicPathNode extends ConfigNode {}

//webpack.output.sourceMapFilename
class SourceMapFilenameNode extends ConfigNode {}

//webpack.output.sourcePrefix
class SourcePrefixNode extends ConfigNode {}

//webpack.output.strictModuleExceptionHandling
class StrictModuleExceptionHandlingNode extends ConfigNode {}

//webpack.output.umdNamedDefine
class UmdNamedDefineNode extends ConfigNode {}

//webpack.output
class OutputNode extends ConfigNode {}

//webpack.performance.assetFilter
class AssetFilterNode extends ConfigNode {}

//webpack.performance.hints
class HintsNode extends ConfigNode {}

//webpack.performance.maxEntrypointSize
class MaxEntrypointSizeNode extends ConfigNode {}

//webpack.performance.maxAssetSize
class MaxAssetSizeNode extends ConfigNode {}

//webpack.performance
class PerformanceNode extends ConfigNode {}

//webpack.plugins
class PluginNode extends ConfigNode {
  evaluate( context ) {
    let args = this.args;
    let id = args.shift();
    let plugin = id;
    args = scalar( args );

    switch ( type( id ) ) {
      case 'string':
        let klass = require( id );
        plugin = new klass( args );
        break;

      case 'function':
        plugin = new id( args );
        break;
    }

    context.plugins = context.plugins || [];
    context.plugins.push( plugin );
    return context;
  }
}

//webpack.profile
class ProfileNode extends ConfigNode {}

//webpack.recordsInputPath
class RecordsInputPathNode extends ConfigNode {}

//webpack.recordsOutputPath
class RecordsOutputPathNode extends ConfigNode {}

//webpack.recordsPath
class RecordsPathNode extends ConfigNode {}

//webpack.resolve.alias.<array>.onlyModule
class OnlyModuleNode extends ConfigNode {}

//webpack.resolve.alias
class AliasNode extends ConfigNode {}

//webpack.resolve.aliasFields
class AliasFieldNode extends ConfigNode {}

//webpack.resolve.cachePredicate
class CachePredicateNode extends ConfigNode {}

//webpack.resolve.cacheWithContext
class CacheWithContextNode extends ConfigNode {}

//webpack.resolve.descriptionFiles
class DescriptionFileNode extends ConfigNode {}

//webpack.resolve.enforceExtension
class EnforceExtensionNode extends ConfigNode {}

//webpack.resolve.enforceModuleExtension
class EnforceModuleExtensionNode extends ConfigNode {}

//webpack.resolve.extensions
class ExtensionNode extends ConfigNode {}

//webpack.resolve.fileSystem
class FileSystemNode extends ConfigNode {}

//webpack.resolve.mainFields
class MainFieldNode extends ConfigNode {}

//webpack.resolve.mainFiles
class MainFileNode extends ConfigNode {}

//webpack.resolve.moduleExtensions
class ModuleExtensionNode extends ConfigNode {}

//webpack.resolve.resolver
class ResolverNode extends ConfigNode {}

//webpack.resolve.symlinks
class SymlinksNode extends ConfigNode {}

//webpack.resolve.useSyncFileSystemCalls
class UseSyncFileSystemCallsNode extends ConfigNode {}

//webpack.resolve
class ResolveNode extends ConfigNode {}

//webpack.resolveLoader
class ResolveLoaderNode extends ConfigNode {}

//webpack.stats.hash
class HashNode extends ConfigNode {}

//webpack.stats.version
class VersionNode extends ConfigNode {}

//webpack.stats.timings
class TimingsNode extends ConfigNode {}

//webpack.stats.assets
class AssetsNode extends ConfigNode {}

//webpack.stats.chunks
class ChunksNode extends ConfigNode {}

//webpack.stats.chunkModules
class ChunkModulesNode extends ConfigNode {}

//webpack.stats.modules
class ModulesNode extends ConfigNode {}

//webpack.stats.children
class ChildrenNode extends ConfigNode {}

//webpack.stats.cached
class CachedNode extends ConfigNode {}

//webpack.stats.reasons
class ReasonsNode extends ConfigNode {}

//webpack.stats.source
class SourceNode extends ConfigNode {}

//webpack.stats.warningsFilter
class WarningsFilterNode extends ConfigNode {}

//webpack.stats.errorDetails
class ErrorDetailsNode extends ConfigNode {}

//webpack.stats.chunkOrigins
class ChunkOriginsNode extends ConfigNode {}

//webpack.stats.modulesSort
class ModulesSortNode extends ConfigNode {}

//webpack.stats.moduleTrace
class ModuleTraceNode extends ConfigNode {}

//webpack.stats.chunksSort
class ChunksSortNode extends ConfigNode {}

//webpack.stats.assetsSort
class AssetsSortNode extends ConfigNode {}

//webpack.stats.providedExports
class ProvidedExportsNode extends ConfigNode {}

//webpack.stats.usedExports
class UsedExportsNode extends ConfigNode {}

//webpack.stats.optimizationBailout
class OptimizationBailoutNode extends ConfigNode {}

//webpack.stats
class StatsNode extends ConfigNode {}

//webpack.target
class TargetNode extends ConfigNode {}

//webpack.watch
class WatchNode extends ConfigNode {}

//webpack.watchOptions.aggregateTimeout
class AggregateTimeoutNode extends ConfigNode {}

//webpack.watchOptions.poll
class PollNode extends ConfigNode {}

//webpack.watchOptions
class WatchOptionsNode extends ConfigNode {}

//webpack
class WebpackNode extends ConfigNode {}

module.exports = {
  ConditionNode,
  AndNode,
  ExcludeNode,
  IncludeNode,
  NotNode,
  OrNode,
  TestNode,
  RuleSetConditionNode,
  RuleNode,
  EnforceNode,
  IssuerNode,
  LoaderNode,
  LoadersNode,
  OneOfNode,
  OptionsNode,
  ParserNode,
  QueryNode,
  ResourceNode,
  ResourceQueryNode,
  CompilerNode,
  UseNode,
  RuleSetRuleNode,
  UseItemNode,
  RuleSetUseItemNode,
  AmdNode,
  BailNode,
  CacheNode,
  ContextNode,
  DependencyNode,
  DevServerNode,
  DevtoolNode,
  EntryNode,
  ExternalsNode,
  ExprContextCriticalNode,
  ExprContextRecursiveNode,
  ExprContextRegExpNode,
  ExprContextRequestNode,
  NoParseNode,
  UnknownContextCriticalNode,
  UnknownContextRecursiveNode,
  UnknownContextRegExpNode,
  UnknownContextRequestNode,
  UnsafeCacheNode,
  WrappedContextCriticalNode,
  WrappedContextRecursiveNode,
  WrappedContextRegExpNode,
  StrictExportPresenceNode,
  StrictThisContextOnImportsNode,
  ModuleNode,
  NameNode,
  BufferNode,
  DirnameNode,
  FilenameNode,
  ConsoleNode,
  GlobalNode,
  ProcessNode,
  NodeNode,
  CommonjsNode,
  Commonjs2Node,
  RootNode,
  AuxiliaryCommentNode,
  ChunkFilenameNode,
  CrossOriginLoadingNode,
  ChunkLoadTimeoutNode,
  DevtoolFallbackModuleFilenameTemplateNode,
  DevtoolLineToLineNode,
  DevtoolModuleFilenameTemplateNode,
  HashDigestNode,
  HashDigestLengthNode,
  HashFunctionNode,
  HashSaltNode,
  HotUpdateChunkFilenameNode,
  HotUpdateFunctionNode,
  HotUpdateMainFilenameNode,
  JsonpFunctionNode,
  LibraryNode,
  LibraryTargetNode,
  LibraryExportNode,
  PathNode,
  PathinfoNode,
  PublicPathNode,
  SourceMapFilenameNode,
  SourcePrefixNode,
  StrictModuleExceptionHandlingNode,
  UmdNamedDefineNode,
  OutputNode,
  AssetFilterNode,
  HintsNode,
  MaxEntrypointSizeNode,
  MaxAssetSizeNode,
  PerformanceNode,
  PluginNode,
  ProfileNode,
  RecordsInputPathNode,
  RecordsOutputPathNode,
  RecordsPathNode,
  OnlyModuleNode,
  AliasNode,
  AliasFieldNode,
  CachePredicateNode,
  CacheWithContextNode,
  DescriptionFileNode,
  EnforceExtensionNode,
  EnforceModuleExtensionNode,
  ExtensionNode,
  FileSystemNode,
  MainFieldNode,
  MainFileNode,
  ModuleExtensionNode,
  ResolverNode,
  SymlinksNode,
  UseSyncFileSystemCallsNode,
  ResolveNode,
  ResolveLoaderNode,
  HashNode,
  VersionNode,
  TimingsNode,
  AssetsNode,
  ChunksNode,
  ChunkModulesNode,
  ModulesNode,
  ChildrenNode,
  CachedNode,
  ReasonsNode,
  SourceNode,
  WarningsFilterNode,
  ErrorDetailsNode,
  ChunkOriginsNode,
  ModulesSortNode,
  ModuleTraceNode,
  ChunksSortNode,
  AssetsSortNode,
  ProvidedExportsNode,
  UsedExportsNode,
  OptimizationBailoutNode,
  StatsNode,
  TargetNode,
  WatchNode,
  AggregateTimeoutNode,
  PollNode,
  WatchOptionsNode,
  WebpackNode
}
