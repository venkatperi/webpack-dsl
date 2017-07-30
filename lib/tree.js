class Node {
  constructor( type, name, args, cfg ) {
    this.type = type;
    this.name = name;
    this.args = args;
    this.cfg = cfg;
    this.children = [];
    this.parent = null;
  }

  addChild( node ) {
    if ( !node ) return;

    this.children.push( node );
    node.parent = this;
  }

  walk( visitor, context = null ) {
    if ( visitor.beforeNode ) {
      visitor.beforeNode.call( context, this );
    }
    if ( visitor.beforeChildren ) {
      visitor.beforeChildren.call( context, this );
    }
    this.children.forEach( ( c ) => {
      visitor.visit.call( context, c );
    } );
    if ( visitor.afterChildren ) {
      visitor.afterChildren.call( context, this );
    }
    if ( visitor.afterNode ) {
      visitor.afterNode.call( context, this );
    }
  }
}

class FactoryBuilderSupport {
  createNode( name, attributes, value ) {}
  registerFactory( name, factory ) {}
  setParent( parent, child ) {}
  build( closure ) {}
}

class AbstractFactory {

  isLeaf() {
    return false;
  }

  newInstance( builder, name, value, attributes ) {}
  setChild( builder, parent, child ) {}
  setParent( builder, parent, child ) {}
  onNodeCompleted( builder, parent, node ) {}
  onHandleNodeAttributes( builder, node, attributes ) {}
}

let tree = seed()

tree( 'A', () => {
  tree( 'B', () => {
    tree( 'C', () => {
      tree( 'D' )
      tree( 'E' )
    } )
    tree( 'F' )
  } )
  tree( 'G' )
} )

display( tree.peek() )

function seed() {
  let peak = { forest: [] }

  function tree( value, closure = () => {} ) {
    let newTree = { value: value, forest: [] }
    peak.forest.push( newTree )
    let prev = peak
    peak = newTree
    closure()
    peak = prev
  }
  tree.peek = () => peak.forest[ 0 ]
  return tree
}
