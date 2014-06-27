var AsyncReactComponent = {
  loadedComponent: null,

  load: function() {
    if (this.constructor.loadedComponent) {
      return;
    }

    var self = this;
    System.import(this.bundle).then(function(router) {
      self.constructor.loadedComponent = component;
      self.forceUpdate();
    });
  },

  componentDidMount: function() {
    setTimeout(this.load, 500);
  },

  render: function() {
    var component = this.constructor.loadedComponent;
    return component ? component(this.props) : this.preRender();
  }
};

export default AsyncReactComponent;
