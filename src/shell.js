import '../libs/knockout.js';
import './edit-node.js';
import Node from './models/node.js';

class ShellViewModel {
    constructor() {
	this.message = ko.observable("Hello from shell");
	this.nodes = ko.observableArray([]);
	const firstNode = new Node();
	firstNode.name('as first element');
	this.nodes.push(firstNode);
    }

    addNode() {
	const nodeToAdd = new Node();
	this.nodes.push(nodeToAdd);
    }
}

ko.components.register('shell', {
    viewModel: ShellViewModel,
    template: '<main>' +
	'<h1><span data-bind="text: message"></span></h1>' +
	'<div data-bind="foreach: nodes">' +
    '<edit-node params="node: $data"></edit-node>' +
	'</div>' +
	'<button data-bind="click: addNode">Add Node</button>' +
	'</main>'
});


