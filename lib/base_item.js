
class BaseItem {
  constructor(type, path, args) {
    this.__type = type;
    this.__path = path;
    this.args = args;
  }
}
module.exports = BaseItem;
