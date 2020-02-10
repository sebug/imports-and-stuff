import '../libs/knockout.js';

const shellComponent = ko.components.register('shell', {
    viewModel: function() {
	this.message = ko.observable("Hello from shell");
    },
    template: '<main><h1><span data-bind="text: message"></span></h1></main>'
});

export default shellComponent;
