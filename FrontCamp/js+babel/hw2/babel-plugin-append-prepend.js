/**
*
*  Transform node1.append(node2) into node1.appendChild(node2)
*  to support ie 11 and older...
*
*/

module.exports = function(babel) {
  return {
    visitor: {
      MemberExpression: function(path) {

        var rhs = path.node.right;

        if (rhs.name === "append") {
          rhs.name = "appendChild";
        }

        if (rhs.name === "prepend") {
          rhs.name = "prependChild";
        }

      }
    }
  };
}
