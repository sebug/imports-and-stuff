import '../libs/knockout.js';

const editNodeComponent = ko.components.register('edit-node', {
    viewModel: function(params) {
	this.node = params.node;
	if (typeof this.node !== 'function') {
	    this.node = ko.observable(this.node);
	}
    },
    template: '<p data-bind="with: node"><label>' +
	'Parent: <input data-bind="value: parentName" />' +
	'<label>' +
	'<label>Element: ' +
	'<input data-bind="value: name" />' +
	'</label>' +
	'</p>'
});

export default editNodeComponent;
