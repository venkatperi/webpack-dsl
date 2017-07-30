// Generated source file
const BaseItem = require("./base_item");
 const { FactoryBuilderSupport, AbstractFactory } = require( 'node-factory-builder' );
//webpack.amd: Set the value of &#x60;require.amd&#x60; and &#x60;define.amd&#x60;.
class Amd extends BaseItem {
  constructor(args) {
    super("amd", "webpack.amd", args);
  }
}


// factory for amd tag
class AmdFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Amd(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.bail: Report the first error as a hard error instead of tolerating it.
class Bail extends BaseItem {
  constructor(args) {
    super("bail", "webpack.bail", args);
  }
}


// factory for bail tag
class BailFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Bail(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.cache: Cache generated modules and chunks to improve performance for multiple incremental builds.
class Cache extends BaseItem {
  constructor(args) {
    super("cache", "webpack.cache", args);
  }
}


// factory for cache tag
class CacheFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Cache(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.context: The base directory (absolute path!) for resolving the &#x60;entry&#x60; option. If &#x60;output.pathinfo&#x60; is set, the included pathinfo is shortened to this directory.
class Context extends BaseItem {
  constructor(args) {
    super("context", "webpack.context", args);
  }
}


// factory for context tag
class ContextFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Context(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.dependency: 
class Dependency extends BaseItem {
  constructor(args) {
    super("dependency", "webpack.dependency", args);
  }
}


// factory for dependency tag
class DependencyFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Dependency(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.devServer: 
class DevServer extends BaseItem {
  constructor(args) {
    super("devServer", "webpack.devServer", args);
  }
}


// factory for devServer tag
class DevServerFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new DevServer(args);
  }
  getBuilder(parent) {
    return new DevServerBuilder(parent);
  }
}

// builder for devServer
class DevServerBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
  }
}

//webpack.devtool: A developer tool to enhance debugging.
class Devtool extends BaseItem {
  constructor(args) {
    super("devtool", "webpack.devtool", args);
  }
}


// factory for devtool tag
class DevtoolFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Devtool(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.entry: The entry point(s) of the compilation.
class Entry extends BaseItem {
  constructor(args) {
    super("entry", "webpack.entry", args);
  }
}


// factory for entry tag
class EntryFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Entry(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.externals: Specify dependencies that shouldn&#x27;t be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on &#x60;output.libraryTarget&#x60;.
class Externals extends BaseItem {
  constructor(args) {
    super("externals", "webpack.externals", args);
  }
}


// factory for externals tag
class ExternalsFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Externals(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.loader: Custom values available in the loader context.
class Loader extends BaseItem {
  constructor(args) {
    super("loader", "webpack.loader", args);
  }
}


// factory for loader tag
class LoaderFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Loader(args);
  }
  getBuilder(parent) {
    return new LoaderBuilder(parent);
  }
}

// builder for loader
class LoaderBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
  }
}

//webpack.module.exprContextCritical: 
class ExprContextCritical extends BaseItem {
  constructor(args) {
    super("exprContextCritical", "webpack.module.exprContextCritical", args);
  }
}


// factory for exprContextCritical tag
class ExprContextCriticalFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ExprContextCritical(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.exprContextRecursive: 
class ExprContextRecursive extends BaseItem {
  constructor(args) {
    super("exprContextRecursive", "webpack.module.exprContextRecursive", args);
  }
}


// factory for exprContextRecursive tag
class ExprContextRecursiveFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ExprContextRecursive(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.exprContextRegExp: 
class ExprContextRegExp extends BaseItem {
  constructor(args) {
    super("exprContextRegExp", "webpack.module.exprContextRegExp", args);
  }
}


// factory for exprContextRegExp tag
class ExprContextRegExpFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ExprContextRegExp(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.exprContextRequest: 
class ExprContextRequest extends BaseItem {
  constructor(args) {
    super("exprContextRequest", "webpack.module.exprContextRequest", args);
  }
}


// factory for exprContextRequest tag
class ExprContextRequestFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ExprContextRequest(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.loader: 
class Loader1 extends BaseItem {
  constructor(args) {
    super("loader1", "webpack.module.loader", args);
  }
}


// factory for loader1 tag
class Loader1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Loader1(args);
  }
  getBuilder(parent) {
    return new Loader1Builder(parent);
  }
}

// builder for loader1
class Loader1Builder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
    this.registerFactory('enforce', new EnforceFactory());
    this.registerFactory('exclude', new ExcludeFactory());
    this.registerFactory('include', new IncludeFactory());
    this.registerFactory('issuer', new IssuerFactory());
    this.registerFactory('loader', new LoaderFactory());
    this.registerFactory('loaders', new LoadersFactory());
    this.registerFactory('oneOf', new OneOfFactory());
    this.registerFactory('options', new OptionsFactory());
    this.registerFactory('parser', new ParserFactory());
    this.registerFactory('query', new QueryFactory());
    this.registerFactory('resource', new ResourceFactory());
    this.registerFactory('resourceQuery', new ResourceQueryFactory());
    this.registerFactory('compiler', new CompilerFactory());
    this.registerFactory('rules', new RulesFactory());
    this.registerFactory('test', new TestFactory());
    this.registerFactory('use', new UseFactory());
  }
}

//webpack.module.loaders: An array of automatically applied loaders.
class Loaders extends BaseItem {
  constructor(args) {
    super("loaders", "webpack.module.loaders", args);
  }
}


// factory for loaders tag
class LoadersFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Loaders(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.noParse: Don&#x27;t parse files matching. It&#x27;s matched against the full resolved request.
class NoParse extends BaseItem {
  constructor(args) {
    super("noParse", "webpack.module.noParse", args);
  }
}


// factory for noParse tag
class NoParseFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new NoParse(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.rule: 
class Rule extends BaseItem {
  constructor(args) {
    super("rule", "webpack.module.rule", args);
  }
}


// factory for rule tag
class RuleFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Rule(args);
  }
  getBuilder(parent) {
    return new RuleBuilder(parent);
  }
}

// builder for rule
class RuleBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
    this.registerFactory('enforce', new EnforceFactory());
    this.registerFactory('exclude', new ExcludeFactory());
    this.registerFactory('include', new IncludeFactory());
    this.registerFactory('issuer', new IssuerFactory());
    this.registerFactory('loader', new LoaderFactory());
    this.registerFactory('loaders', new LoadersFactory());
    this.registerFactory('oneOf', new OneOfFactory());
    this.registerFactory('options', new OptionsFactory());
    this.registerFactory('parser', new ParserFactory());
    this.registerFactory('query', new QueryFactory());
    this.registerFactory('resource', new ResourceFactory());
    this.registerFactory('resourceQuery', new ResourceQueryFactory());
    this.registerFactory('compiler', new CompilerFactory());
    this.registerFactory('rules', new RulesFactory());
    this.registerFactory('test', new TestFactory());
    this.registerFactory('use', new UseFactory());
  }
}

//webpack.module.rules: An array of rules applied for modules.
class Rules extends BaseItem {
  constructor(args) {
    super("rules", "webpack.module.rules", args);
  }
}


// factory for rules tag
class RulesFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Rules(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.unknownContextCritical: 
class UnknownContextCritical extends BaseItem {
  constructor(args) {
    super("unknownContextCritical", "webpack.module.unknownContextCritical", args);
  }
}


// factory for unknownContextCritical tag
class UnknownContextCriticalFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UnknownContextCritical(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.unknownContextRecursive: 
class UnknownContextRecursive extends BaseItem {
  constructor(args) {
    super("unknownContextRecursive", "webpack.module.unknownContextRecursive", args);
  }
}


// factory for unknownContextRecursive tag
class UnknownContextRecursiveFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UnknownContextRecursive(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.unknownContextRegExp: 
class UnknownContextRegExp extends BaseItem {
  constructor(args) {
    super("unknownContextRegExp", "webpack.module.unknownContextRegExp", args);
  }
}


// factory for unknownContextRegExp tag
class UnknownContextRegExpFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UnknownContextRegExp(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.unknownContextRequest: 
class UnknownContextRequest extends BaseItem {
  constructor(args) {
    super("unknownContextRequest", "webpack.module.unknownContextRequest", args);
  }
}


// factory for unknownContextRequest tag
class UnknownContextRequestFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UnknownContextRequest(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.unsafeCache: 
class UnsafeCache extends BaseItem {
  constructor(args) {
    super("unsafeCache", "webpack.module.unsafeCache", args);
  }
}


// factory for unsafeCache tag
class UnsafeCacheFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UnsafeCache(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.wrappedContextCritical: 
class WrappedContextCritical extends BaseItem {
  constructor(args) {
    super("wrappedContextCritical", "webpack.module.wrappedContextCritical", args);
  }
}


// factory for wrappedContextCritical tag
class WrappedContextCriticalFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new WrappedContextCritical(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.wrappedContextRecursive: 
class WrappedContextRecursive extends BaseItem {
  constructor(args) {
    super("wrappedContextRecursive", "webpack.module.wrappedContextRecursive", args);
  }
}


// factory for wrappedContextRecursive tag
class WrappedContextRecursiveFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new WrappedContextRecursive(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.wrappedContextRegExp: 
class WrappedContextRegExp extends BaseItem {
  constructor(args) {
    super("wrappedContextRegExp", "webpack.module.wrappedContextRegExp", args);
  }
}


// factory for wrappedContextRegExp tag
class WrappedContextRegExpFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new WrappedContextRegExp(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.strictExportPresence: 
class StrictExportPresence extends BaseItem {
  constructor(args) {
    super("strictExportPresence", "webpack.module.strictExportPresence", args);
  }
}


// factory for strictExportPresence tag
class StrictExportPresenceFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new StrictExportPresence(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module.strictThisContextOnImports: 
class StrictThisContextOnImports extends BaseItem {
  constructor(args) {
    super("strictThisContextOnImports", "webpack.module.strictThisContextOnImports", args);
  }
}


// factory for strictThisContextOnImports tag
class StrictThisContextOnImportsFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new StrictThisContextOnImports(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.module: Options affecting the normal modules (&#x60;NormalModuleFactory&#x60;).
class Module extends BaseItem {
  constructor(args) {
    super("module", "webpack.module", args);
  }
}


// factory for module tag
class ModuleFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Module(args);
  }
  getBuilder(parent) {
    return new ModuleBuilder(parent);
  }
}

// builder for module
class ModuleBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
    this.registerFactory('exprContextCritical', new ExprContextCriticalFactory());
    this.registerFactory('exprContextRecursive', new ExprContextRecursiveFactory());
    this.registerFactory('exprContextRegExp', new ExprContextRegExpFactory());
    this.registerFactory('exprContextRequest', new ExprContextRequestFactory());
    this.registerFactory('loaders', new LoadersFactory());
    this.registerFactory('noParse', new NoParseFactory());
    this.registerFactory('rules', new RulesFactory());
    this.registerFactory('unknownContextCritical', new UnknownContextCriticalFactory());
    this.registerFactory('unknownContextRecursive', new UnknownContextRecursiveFactory());
    this.registerFactory('unknownContextRegExp', new UnknownContextRegExpFactory());
    this.registerFactory('unknownContextRequest', new UnknownContextRequestFactory());
    this.registerFactory('unsafeCache', new UnsafeCacheFactory());
    this.registerFactory('wrappedContextCritical', new WrappedContextCriticalFactory());
    this.registerFactory('wrappedContextRecursive', new WrappedContextRecursiveFactory());
    this.registerFactory('wrappedContextRegExp', new WrappedContextRegExpFactory());
    this.registerFactory('strictExportPresence', new StrictExportPresenceFactory());
    this.registerFactory('strictThisContextOnImports', new StrictThisContextOnImportsFactory());
  }
}

//webpack.name: Name of the configuration. Used when loading multiple configurations.
class Name extends BaseItem {
  constructor(args) {
    super("name", "webpack.name", args);
  }
}


// factory for name tag
class NameFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Name(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.node: Include polyfills or mocks for various node stuff.
class Node extends BaseItem {
  constructor(args) {
    super("node", "webpack.node", args);
  }
}


// factory for node tag
class NodeFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Node(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.auxiliaryComment: Add a comment in the UMD wrapper.
class AuxiliaryComment extends BaseItem {
  constructor(args) {
    super("auxiliaryComment", "webpack.output.auxiliaryComment", args);
  }
}


// factory for auxiliaryComment tag
class AuxiliaryCommentFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new AuxiliaryComment(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.chunkFilename: The filename of non-entry chunks as relative path inside the &#x60;output.path&#x60; directory.
class ChunkFilename extends BaseItem {
  constructor(args) {
    super("chunkFilename", "webpack.output.chunkFilename", args);
  }
}


// factory for chunkFilename tag
class ChunkFilenameFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ChunkFilename(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.crossOriginLoading: This option enables cross-origin loading of chunks.
class CrossOriginLoading extends BaseItem {
  constructor(args) {
    super("crossOriginLoading", "webpack.output.crossOriginLoading", args);
  }
}


// factory for crossOriginLoading tag
class CrossOriginLoadingFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new CrossOriginLoading(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.chunkLoadTimeout: Number of milliseconds before chunk request expires
class ChunkLoadTimeout extends BaseItem {
  constructor(args) {
    super("chunkLoadTimeout", "webpack.output.chunkLoadTimeout", args);
  }
}


// factory for chunkLoadTimeout tag
class ChunkLoadTimeoutFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ChunkLoadTimeout(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.devtoolFallbackModuleFilenameTemplate: Similar to &#x60;output.devtoolModuleFilenameTemplate&#x60;, but used in the case of duplicate module identifiers.
class DevtoolFallbackModuleFilenameTemplate extends BaseItem {
  constructor(args) {
    super("devtoolFallbackModuleFilenameTemplate", "webpack.output.devtoolFallbackModuleFilenameTemplate", args);
  }
}


// factory for devtoolFallbackModuleFilenameTemplate tag
class DevtoolFallbackModuleFilenameTemplateFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new DevtoolFallbackModuleFilenameTemplate(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.devtoolLineToLine: Enable line to line mapped mode for all/specified modules. Line to line mapped mode uses a simple SourceMap where each line of the generated source is mapped to the same line of the original source. It’s a performance optimization. Only use it if your performance need to be better and you are sure that input lines match which generated lines.
class DevtoolLineToLine extends BaseItem {
  constructor(args) {
    super("devtoolLineToLine", "webpack.output.devtoolLineToLine", args);
  }
}


// factory for devtoolLineToLine tag
class DevtoolLineToLineFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new DevtoolLineToLine(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.devtoolModuleFilenameTemplate: Filename template string of function for the sources array in a generated SourceMap.
class DevtoolModuleFilenameTemplate extends BaseItem {
  constructor(args) {
    super("devtoolModuleFilenameTemplate", "webpack.output.devtoolModuleFilenameTemplate", args);
  }
}


// factory for devtoolModuleFilenameTemplate tag
class DevtoolModuleFilenameTemplateFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new DevtoolModuleFilenameTemplate(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.filename: Specifies the name of each output file on disk. You must **not** specify an absolute path here! The &#x60;output.path&#x60; option determines the location on disk the files are written to, filename is used solely for naming the individual files.
class Filename extends BaseItem {
  constructor(args) {
    super("filename", "webpack.output.filename", args);
  }
}


// factory for filename tag
class FilenameFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Filename(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.hashDigest: 
class HashDigest extends BaseItem {
  constructor(args) {
    super("hashDigest", "webpack.output.hashDigest", args);
  }
}


// factory for hashDigest tag
class HashDigestFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new HashDigest(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.hashDigestLength: 
class HashDigestLength extends BaseItem {
  constructor(args) {
    super("hashDigestLength", "webpack.output.hashDigestLength", args);
  }
}


// factory for hashDigestLength tag
class HashDigestLengthFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new HashDigestLength(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.hashFunction: 
class HashFunction extends BaseItem {
  constructor(args) {
    super("hashFunction", "webpack.output.hashFunction", args);
  }
}


// factory for hashFunction tag
class HashFunctionFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new HashFunction(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.hashSalt: 
class HashSalt extends BaseItem {
  constructor(args) {
    super("hashSalt", "webpack.output.hashSalt", args);
  }
}


// factory for hashSalt tag
class HashSaltFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new HashSalt(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.hotUpdateChunkFilename: The filename of the Hot Update Chunks. They are inside the output.path directory.
class HotUpdateChunkFilename extends BaseItem {
  constructor(args) {
    super("hotUpdateChunkFilename", "webpack.output.hotUpdateChunkFilename", args);
  }
}


// factory for hotUpdateChunkFilename tag
class HotUpdateChunkFilenameFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new HotUpdateChunkFilename(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.hotUpdateFunction: The JSONP function used by webpack for async loading of hot update chunks.
class HotUpdateFunction extends BaseItem {
  constructor(args) {
    super("hotUpdateFunction", "webpack.output.hotUpdateFunction", args);
  }
}


// factory for hotUpdateFunction tag
class HotUpdateFunctionFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new HotUpdateFunction(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.hotUpdateMainFilename: The filename of the Hot Update Main File. It is inside the &#x60;output.path&#x60; directory.
class HotUpdateMainFilename extends BaseItem {
  constructor(args) {
    super("hotUpdateMainFilename", "webpack.output.hotUpdateMainFilename", args);
  }
}


// factory for hotUpdateMainFilename tag
class HotUpdateMainFilenameFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new HotUpdateMainFilename(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.jsonpFunction: The JSONP function used by webpack for async loading of chunks.
class JsonpFunction extends BaseItem {
  constructor(args) {
    super("jsonpFunction", "webpack.output.jsonpFunction", args);
  }
}


// factory for jsonpFunction tag
class JsonpFunctionFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new JsonpFunction(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.library: If set, export the bundle as library. &#x60;output.library&#x60; is the name.
class Library extends BaseItem {
  constructor(args) {
    super("library", "webpack.output.library", args);
  }
}


// factory for library tag
class LibraryFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Library(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.libraryTarget: 
class LibraryTarget extends BaseItem {
  constructor(args) {
    super("libraryTarget", "webpack.output.libraryTarget", args);
  }
}


// factory for libraryTarget tag
class LibraryTargetFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new LibraryTarget(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.libraryExport: 
class LibraryExport extends BaseItem {
  constructor(args) {
    super("libraryExport", "webpack.output.libraryExport", args);
  }
}


// factory for libraryExport tag
class LibraryExportFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new LibraryExport(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.path: The output directory as **absolute path** (required).
class Path extends BaseItem {
  constructor(args) {
    super("path", "webpack.output.path", args);
  }
}


// factory for path tag
class PathFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Path(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.pathinfo: Include comments with information about the modules.
class Pathinfo extends BaseItem {
  constructor(args) {
    super("pathinfo", "webpack.output.pathinfo", args);
  }
}


// factory for pathinfo tag
class PathinfoFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Pathinfo(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.publicPath: The &#x60;publicPath&#x60; specifies the public URL address of the output files when referenced in a browser.
class PublicPath extends BaseItem {
  constructor(args) {
    super("publicPath", "webpack.output.publicPath", args);
  }
}


// factory for publicPath tag
class PublicPathFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new PublicPath(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.sourceMapFilename: The filename of the SourceMaps for the JavaScript files. They are inside the &#x60;output.path&#x60; directory.
class SourceMapFilename extends BaseItem {
  constructor(args) {
    super("sourceMapFilename", "webpack.output.sourceMapFilename", args);
  }
}


// factory for sourceMapFilename tag
class SourceMapFilenameFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new SourceMapFilename(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.sourcePrefix: Prefixes every line of the source in the bundle with this string.
class SourcePrefix extends BaseItem {
  constructor(args) {
    super("sourcePrefix", "webpack.output.sourcePrefix", args);
  }
}


// factory for sourcePrefix tag
class SourcePrefixFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new SourcePrefix(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.strictModuleExceptionHandling: Handles exceptions in module loading correctly at a performance cost.
class StrictModuleExceptionHandling extends BaseItem {
  constructor(args) {
    super("strictModuleExceptionHandling", "webpack.output.strictModuleExceptionHandling", args);
  }
}


// factory for strictModuleExceptionHandling tag
class StrictModuleExceptionHandlingFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new StrictModuleExceptionHandling(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output.umdNamedDefine: If &#x60;output.libraryTarget&#x60; is set to umd and &#x60;output.library&#x60; is set, setting this to true will name the AMD module.
class UmdNamedDefine extends BaseItem {
  constructor(args) {
    super("umdNamedDefine", "webpack.output.umdNamedDefine", args);
  }
}


// factory for umdNamedDefine tag
class UmdNamedDefineFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UmdNamedDefine(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.output: Options affecting the output of the compilation. &#x60;output&#x60; options tell webpack how to write the compiled files to disk.
class Output extends BaseItem {
  constructor(args) {
    super("output", "webpack.output", args);
  }
}


// factory for output tag
class OutputFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Output(args);
  }
  getBuilder(parent) {
    return new OutputBuilder(parent);
  }
}

// builder for output
class OutputBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
    this.registerFactory('auxiliaryComment', new AuxiliaryCommentFactory());
    this.registerFactory('chunkFilename', new ChunkFilenameFactory());
    this.registerFactory('crossOriginLoading', new CrossOriginLoadingFactory());
    this.registerFactory('chunkLoadTimeout', new ChunkLoadTimeoutFactory());
    this.registerFactory('devtoolFallbackModuleFilenameTemplate', new DevtoolFallbackModuleFilenameTemplateFactory());
    this.registerFactory('devtoolLineToLine', new DevtoolLineToLineFactory());
    this.registerFactory('devtoolModuleFilenameTemplate', new DevtoolModuleFilenameTemplateFactory());
    this.registerFactory('filename', new FilenameFactory());
    this.registerFactory('hashDigest', new HashDigestFactory());
    this.registerFactory('hashDigestLength', new HashDigestLengthFactory());
    this.registerFactory('hashFunction', new HashFunctionFactory());
    this.registerFactory('hashSalt', new HashSaltFactory());
    this.registerFactory('hotUpdateChunkFilename', new HotUpdateChunkFilenameFactory());
    this.registerFactory('hotUpdateFunction', new HotUpdateFunctionFactory());
    this.registerFactory('hotUpdateMainFilename', new HotUpdateMainFilenameFactory());
    this.registerFactory('jsonpFunction', new JsonpFunctionFactory());
    this.registerFactory('library', new LibraryFactory());
    this.registerFactory('libraryTarget', new LibraryTargetFactory());
    this.registerFactory('libraryExport', new LibraryExportFactory());
    this.registerFactory('path', new PathFactory());
    this.registerFactory('pathinfo', new PathinfoFactory());
    this.registerFactory('publicPath', new PublicPathFactory());
    this.registerFactory('sourceMapFilename', new SourceMapFilenameFactory());
    this.registerFactory('sourcePrefix', new SourcePrefixFactory());
    this.registerFactory('strictModuleExceptionHandling', new StrictModuleExceptionHandlingFactory());
    this.registerFactory('umdNamedDefine', new UmdNamedDefineFactory());
  }
}

//webpack.performance: Configuration for web performance recommendations.
class Performance extends BaseItem {
  constructor(args) {
    super("performance", "webpack.performance", args);
  }
}


// factory for performance tag
class PerformanceFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Performance(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.profile: Capture timing information for each module.
class Profile extends BaseItem {
  constructor(args) {
    super("profile", "webpack.profile", args);
  }
}


// factory for profile tag
class ProfileFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Profile(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.recordsInputPath: Store compiler state to a json file.
class RecordsInputPath extends BaseItem {
  constructor(args) {
    super("recordsInputPath", "webpack.recordsInputPath", args);
  }
}


// factory for recordsInputPath tag
class RecordsInputPathFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new RecordsInputPath(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.recordsOutputPath: Load compiler state from a json file.
class RecordsOutputPath extends BaseItem {
  constructor(args) {
    super("recordsOutputPath", "webpack.recordsOutputPath", args);
  }
}


// factory for recordsOutputPath tag
class RecordsOutputPathFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new RecordsOutputPath(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.recordsPath: Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. &#x60;recordsPath&#x60; is used for &#x60;recordsInputPath&#x60; and &#x60;recordsOutputPath&#x60; if they left undefined.
class RecordsPath extends BaseItem {
  constructor(args) {
    super("recordsPath", "webpack.recordsPath", args);
  }
}


// factory for recordsPath tag
class RecordsPathFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new RecordsPath(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.alias: 
class Alias extends BaseItem {
  constructor(args) {
    super("alias", "webpack.resolve.alias", args);
  }
}


// factory for alias tag
class AliasFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Alias(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.aliasField: 
class AliasField extends BaseItem {
  constructor(args) {
    super("aliasField", "webpack.resolve.aliasField", args);
  }
}


// factory for aliasField tag
class AliasFieldFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new AliasField(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.cachePredicate: 
class CachePredicate extends BaseItem {
  constructor(args) {
    super("cachePredicate", "webpack.resolve.cachePredicate", args);
  }
}


// factory for cachePredicate tag
class CachePredicateFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new CachePredicate(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.cacheWithContext: 
class CacheWithContext extends BaseItem {
  constructor(args) {
    super("cacheWithContext", "webpack.resolve.cacheWithContext", args);
  }
}


// factory for cacheWithContext tag
class CacheWithContextFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new CacheWithContext(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.descriptionFile: 
class DescriptionFile extends BaseItem {
  constructor(args) {
    super("descriptionFile", "webpack.resolve.descriptionFile", args);
  }
}


// factory for descriptionFile tag
class DescriptionFileFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new DescriptionFile(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.enforceExtension: 
class EnforceExtension extends BaseItem {
  constructor(args) {
    super("enforceExtension", "webpack.resolve.enforceExtension", args);
  }
}


// factory for enforceExtension tag
class EnforceExtensionFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new EnforceExtension(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.enforceModuleExtension: 
class EnforceModuleExtension extends BaseItem {
  constructor(args) {
    super("enforceModuleExtension", "webpack.resolve.enforceModuleExtension", args);
  }
}


// factory for enforceModuleExtension tag
class EnforceModuleExtensionFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new EnforceModuleExtension(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.extension: 
class Extension extends BaseItem {
  constructor(args) {
    super("extension", "webpack.resolve.extension", args);
  }
}


// factory for extension tag
class ExtensionFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Extension(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.fileSystem: 
class FileSystem extends BaseItem {
  constructor(args) {
    super("fileSystem", "webpack.resolve.fileSystem", args);
  }
}


// factory for fileSystem tag
class FileSystemFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new FileSystem(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.mainField: 
class MainField extends BaseItem {
  constructor(args) {
    super("mainField", "webpack.resolve.mainField", args);
  }
}


// factory for mainField tag
class MainFieldFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new MainField(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.mainFile: 
class MainFile extends BaseItem {
  constructor(args) {
    super("mainFile", "webpack.resolve.mainFile", args);
  }
}


// factory for mainFile tag
class MainFileFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new MainFile(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.moduleExtension: 
class ModuleExtension extends BaseItem {
  constructor(args) {
    super("moduleExtension", "webpack.resolve.moduleExtension", args);
  }
}


// factory for moduleExtension tag
class ModuleExtensionFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ModuleExtension(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.module: 
class Module1 extends BaseItem {
  constructor(args) {
    super("module1", "webpack.resolve.module", args);
  }
}


// factory for module1 tag
class Module1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Module1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.resolver: 
class Resolver extends BaseItem {
  constructor(args) {
    super("resolver", "webpack.resolve.resolver", args);
  }
}


// factory for resolver tag
class ResolverFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Resolver(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.symlinks: 
class Symlinks extends BaseItem {
  constructor(args) {
    super("symlinks", "webpack.resolve.symlinks", args);
  }
}


// factory for symlinks tag
class SymlinksFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Symlinks(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.unsafeCache: 
class UnsafeCache1 extends BaseItem {
  constructor(args) {
    super("unsafeCache1", "webpack.resolve.unsafeCache", args);
  }
}


// factory for unsafeCache1 tag
class UnsafeCache1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UnsafeCache1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve.useSyncFileSystemCalls: 
class UseSyncFileSystemCalls extends BaseItem {
  constructor(args) {
    super("useSyncFileSystemCalls", "webpack.resolve.useSyncFileSystemCalls", args);
  }
}


// factory for useSyncFileSystemCalls tag
class UseSyncFileSystemCallsFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UseSyncFileSystemCalls(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolve: 
class Resolve extends BaseItem {
  constructor(args) {
    super("resolve", "webpack.resolve", args);
  }
}


// factory for resolve tag
class ResolveFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Resolve(args);
  }
  getBuilder(parent) {
    return new ResolveBuilder(parent);
  }
}

// builder for resolve
class ResolveBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
    this.registerFactory('alias', new AliasFactory());
    this.registerFactory('aliasFields', new AliasFieldsFactory());
    this.registerFactory('cachePredicate', new CachePredicateFactory());
    this.registerFactory('cacheWithContext', new CacheWithContextFactory());
    this.registerFactory('descriptionFiles', new DescriptionFilesFactory());
    this.registerFactory('enforceExtension', new EnforceExtensionFactory());
    this.registerFactory('enforceModuleExtension', new EnforceModuleExtensionFactory());
    this.registerFactory('extensions', new ExtensionsFactory());
    this.registerFactory('fileSystem', new FileSystemFactory());
    this.registerFactory('mainFields', new MainFieldsFactory());
    this.registerFactory('mainFiles', new MainFilesFactory());
    this.registerFactory('moduleExtensions', new ModuleExtensionsFactory());
    this.registerFactory('modules', new ModulesFactory());
    this.registerFactory('plugins', new PluginsFactory());
    this.registerFactory('resolver', new ResolverFactory());
    this.registerFactory('symlinks', new SymlinksFactory());
    this.registerFactory('unsafeCache', new UnsafeCacheFactory());
    this.registerFactory('useSyncFileSystemCalls', new UseSyncFileSystemCallsFactory());
  }
}

//webpack.resolveLoader.alias: 
class Alias1 extends BaseItem {
  constructor(args) {
    super("alias1", "webpack.resolveLoader.alias", args);
  }
}


// factory for alias1 tag
class Alias1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Alias1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.aliasField: 
class AliasField1 extends BaseItem {
  constructor(args) {
    super("aliasField1", "webpack.resolveLoader.aliasField", args);
  }
}


// factory for aliasField1 tag
class AliasField1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new AliasField1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.cachePredicate: 
class CachePredicate1 extends BaseItem {
  constructor(args) {
    super("cachePredicate1", "webpack.resolveLoader.cachePredicate", args);
  }
}


// factory for cachePredicate1 tag
class CachePredicate1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new CachePredicate1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.cacheWithContext: 
class CacheWithContext1 extends BaseItem {
  constructor(args) {
    super("cacheWithContext1", "webpack.resolveLoader.cacheWithContext", args);
  }
}


// factory for cacheWithContext1 tag
class CacheWithContext1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new CacheWithContext1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.descriptionFile: 
class DescriptionFile1 extends BaseItem {
  constructor(args) {
    super("descriptionFile1", "webpack.resolveLoader.descriptionFile", args);
  }
}


// factory for descriptionFile1 tag
class DescriptionFile1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new DescriptionFile1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.enforceExtension: 
class EnforceExtension1 extends BaseItem {
  constructor(args) {
    super("enforceExtension1", "webpack.resolveLoader.enforceExtension", args);
  }
}


// factory for enforceExtension1 tag
class EnforceExtension1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new EnforceExtension1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.enforceModuleExtension: 
class EnforceModuleExtension1 extends BaseItem {
  constructor(args) {
    super("enforceModuleExtension1", "webpack.resolveLoader.enforceModuleExtension", args);
  }
}


// factory for enforceModuleExtension1 tag
class EnforceModuleExtension1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new EnforceModuleExtension1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.extension: 
class Extension1 extends BaseItem {
  constructor(args) {
    super("extension1", "webpack.resolveLoader.extension", args);
  }
}


// factory for extension1 tag
class Extension1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Extension1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.fileSystem: 
class FileSystem1 extends BaseItem {
  constructor(args) {
    super("fileSystem1", "webpack.resolveLoader.fileSystem", args);
  }
}


// factory for fileSystem1 tag
class FileSystem1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new FileSystem1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.mainField: 
class MainField1 extends BaseItem {
  constructor(args) {
    super("mainField1", "webpack.resolveLoader.mainField", args);
  }
}


// factory for mainField1 tag
class MainField1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new MainField1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.mainFile: 
class MainFile1 extends BaseItem {
  constructor(args) {
    super("mainFile1", "webpack.resolveLoader.mainFile", args);
  }
}


// factory for mainFile1 tag
class MainFile1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new MainFile1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.moduleExtension: 
class ModuleExtension1 extends BaseItem {
  constructor(args) {
    super("moduleExtension1", "webpack.resolveLoader.moduleExtension", args);
  }
}


// factory for moduleExtension1 tag
class ModuleExtension1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ModuleExtension1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.module: 
class Module2 extends BaseItem {
  constructor(args) {
    super("module2", "webpack.resolveLoader.module", args);
  }
}


// factory for module2 tag
class Module2Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Module2(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.resolver: 
class Resolver1 extends BaseItem {
  constructor(args) {
    super("resolver1", "webpack.resolveLoader.resolver", args);
  }
}


// factory for resolver1 tag
class Resolver1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Resolver1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.symlinks: 
class Symlinks1 extends BaseItem {
  constructor(args) {
    super("symlinks1", "webpack.resolveLoader.symlinks", args);
  }
}


// factory for symlinks1 tag
class Symlinks1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Symlinks1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.unsafeCache: 
class UnsafeCache2 extends BaseItem {
  constructor(args) {
    super("unsafeCache2", "webpack.resolveLoader.unsafeCache", args);
  }
}


// factory for unsafeCache2 tag
class UnsafeCache2Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UnsafeCache2(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader.useSyncFileSystemCalls: 
class UseSyncFileSystemCalls1 extends BaseItem {
  constructor(args) {
    super("useSyncFileSystemCalls1", "webpack.resolveLoader.useSyncFileSystemCalls", args);
  }
}


// factory for useSyncFileSystemCalls1 tag
class UseSyncFileSystemCalls1Factory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new UseSyncFileSystemCalls1(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.resolveLoader: 
class ResolveLoader extends BaseItem {
  constructor(args) {
    super("resolveLoader", "webpack.resolveLoader", args);
  }
}


// factory for resolveLoader tag
class ResolveLoaderFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new ResolveLoader(args);
  }
  getBuilder(parent) {
    return new ResolveLoaderBuilder(parent);
  }
}

// builder for resolveLoader
class ResolveLoaderBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
    this.registerFactory('alias', new AliasFactory());
    this.registerFactory('aliasFields', new AliasFieldsFactory());
    this.registerFactory('cachePredicate', new CachePredicateFactory());
    this.registerFactory('cacheWithContext', new CacheWithContextFactory());
    this.registerFactory('descriptionFiles', new DescriptionFilesFactory());
    this.registerFactory('enforceExtension', new EnforceExtensionFactory());
    this.registerFactory('enforceModuleExtension', new EnforceModuleExtensionFactory());
    this.registerFactory('extensions', new ExtensionsFactory());
    this.registerFactory('fileSystem', new FileSystemFactory());
    this.registerFactory('mainFields', new MainFieldsFactory());
    this.registerFactory('mainFiles', new MainFilesFactory());
    this.registerFactory('moduleExtensions', new ModuleExtensionsFactory());
    this.registerFactory('modules', new ModulesFactory());
    this.registerFactory('plugins', new PluginsFactory());
    this.registerFactory('resolver', new ResolverFactory());
    this.registerFactory('symlinks', new SymlinksFactory());
    this.registerFactory('unsafeCache', new UnsafeCacheFactory());
    this.registerFactory('useSyncFileSystemCalls', new UseSyncFileSystemCallsFactory());
  }
}

//webpack.stats: Used by the webpack CLI program to pass stats options.
class Stats extends BaseItem {
  constructor(args) {
    super("stats", "webpack.stats", args);
  }
}


// factory for stats tag
class StatsFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Stats(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.target: 
class Target extends BaseItem {
  constructor(args) {
    super("target", "webpack.target", args);
  }
}


// factory for target tag
class TargetFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Target(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.watch: Enter watch mode, which rebuilds on file change.
class Watch extends BaseItem {
  constructor(args) {
    super("watch", "webpack.watch", args);
  }
}


// factory for watch tag
class WatchFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Watch(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.watchOptions.aggregateTimeout: Delay the rebuilt after the first change. Value is a time in ms.
class AggregateTimeout extends BaseItem {
  constructor(args) {
    super("aggregateTimeout", "webpack.watchOptions.aggregateTimeout", args);
  }
}


// factory for aggregateTimeout tag
class AggregateTimeoutFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new AggregateTimeout(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.watchOptions.poll: 
class Poll extends BaseItem {
  constructor(args) {
    super("poll", "webpack.watchOptions.poll", args);
  }
}


// factory for poll tag
class PollFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Poll(args);
  }
  isLeaf() {
    return true;
  }
}


//webpack.watchOptions: 
class WatchOptions extends BaseItem {
  constructor(args) {
    super("watchOptions", "webpack.watchOptions", args);
  }
}


// factory for watchOptions tag
class WatchOptionsFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new WatchOptions(args);
  }
  getBuilder(parent) {
    return new WatchOptionsBuilder(parent);
  }
}

// builder for watchOptions
class WatchOptionsBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
    this.registerFactory('aggregateTimeout', new AggregateTimeoutFactory());
    this.registerFactory('poll', new PollFactory());
  }
}

//webpack: 
class Webpack extends BaseItem {
  constructor(args) {
    super("webpack", "webpack", args);
  }
}


// factory for webpack tag
class WebpackFactory extends AbstractFactory {
  newInstance(builder, name, args) {
    return new Webpack(args);
  }
  getBuilder(parent) {
    return new WebpackBuilder(parent);
  }
}

// builder for webpack
class WebpackBuilder extends FactoryBuilderSupport {
  constructor(parent) {
    super(parent);
    this.registerFactory('amd', new AmdFactory());
    this.registerFactory('bail', new BailFactory());
    this.registerFactory('cache', new CacheFactory());
    this.registerFactory('context', new ContextFactory());
    this.registerFactory('dependencies', new DependenciesFactory());
    this.registerFactory('devServer', new DevServerFactory());
    this.registerFactory('devtool', new DevtoolFactory());
    this.registerFactory('entry', new EntryFactory());
    this.registerFactory('externals', new ExternalsFactory());
    this.registerFactory('loader', new LoaderFactory());
    this.registerFactory('module', new ModuleFactory());
    this.registerFactory('name', new NameFactory());
    this.registerFactory('node', new NodeFactory());
    this.registerFactory('output', new OutputFactory());
    this.registerFactory('performance', new PerformanceFactory());
    this.registerFactory('plugins', new PluginsFactory());
    this.registerFactory('profile', new ProfileFactory());
    this.registerFactory('recordsInputPath', new RecordsInputPathFactory());
    this.registerFactory('recordsOutputPath', new RecordsOutputPathFactory());
    this.registerFactory('recordsPath', new RecordsPathFactory());
    this.registerFactory('resolve', new ResolveFactory());
    this.registerFactory('resolveLoader', new ResolveLoaderFactory());
    this.registerFactory('stats', new StatsFactory());
    this.registerFactory('target', new TargetFactory());
    this.registerFactory('watch', new WatchFactory());
    this.registerFactory('watchOptions', new WatchOptionsFactory());
  }
}

module.exports = {
  WebpackBuilder
}