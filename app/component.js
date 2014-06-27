var AsyncReactComponent = {
  loadedComponent: null,

  load: function() {
    if (this.constructor.loadedComponent) {
      return;
    }

    System.import(this.bundle).then(function(component) {
      this.constructor.loadedComponent = component;
      this.forceUpdate();
    }).bind(this);
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
