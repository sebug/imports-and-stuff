import '../libs/knockout.js';
import './edit-node.js';

ko.components.register('shell', {
    viewModel: function() {
	this.message = ko.observable("Hello from shell");
	this.node = {
	    parentName: ko.observable(),
	    name: ko.observable('initial name')
	};
    },
    template: '<main>' +
	'<h1><span data-bind="text: message"></span></h1>' +
	'<edit-node params="node: node"></edit-node>' +
	'</main>'
});


