//Set the value of &#x60;require.amd&#x60; and &#x60;define.amd&#x60;.
class Amd extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Report the first error as a hard error instead of tolerating it.
class Bail extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Cache generated modules and chunks to improve performance for multiple incremental builds.
class Cache extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//The base directory (absolute path!) for resolving the &#x60;entry&#x60; option. If &#x60;output.pathinfo&#x60; is set, the included pathinfo is shortened to this directory.
class Context extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//References to other configurations to depend on.
class Dependencies extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//
class Devserver extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//A developer tool to enhance debugging.
class Devtool extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//The entry point(s) of the compilation.
class Entry extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Specify dependencies that shouldn&#x27;t be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on &#x60;output.libraryTarget&#x60;.
class Externals extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Custom values available in the loader context.
class Loader extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Options affecting the normal modules (&#x60;NormalModuleFactory&#x60;).
class Module extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Name of the configuration. Used when loading multiple configurations.
class Name extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Include polyfills or mocks for various node stuff.
class Node extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Options affecting the output of the compilation. &#x60;output&#x60; options tell webpack how to write the compiled files to disk.
class Output extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Configuration for web performance recommendations.
class Performance extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Add additional plugins to the compiler.
class Plugins extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Capture timing information for each module.
class Profile extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Store compiler state to a json file.
class Recordsinputpath extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Load compiler state from a json file.
class Recordsoutputpath extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. &#x60;recordsPath&#x60; is used for &#x60;recordsInputPath&#x60; and &#x60;recordsOutputPath&#x60; if they left undefined.
class Recordspath extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//
class Resolve extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//
class Resolveloader extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Used by the webpack CLI program to pass stats options.
class Stats extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//
class Target extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//Enter watch mode, which rebuilds on file change.
class Watch extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}


//
class Watchoptions extends Element {
  constructor(args) {
    super();
    this.args = args;
  }
}

