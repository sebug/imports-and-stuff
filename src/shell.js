import '../libs/knockout.js';
import './edit-node.js';
import Node from './models/node.js';

ko.components.register('shell', {
    viewModel: function() {
	this.message = ko.observable("Hello from shell");
	this.node = ko.observable(new Node());
	this.node().name('from class instance');
    },
    template: '<main>' +
	'<h1><span data-bind="text: message"></span></h1>' +
	'<edit-node params="node: node"></edit-node>' +
	'</main>'
});


