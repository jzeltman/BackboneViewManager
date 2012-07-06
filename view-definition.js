// This is a scaffold view to be used as a base for all of your views.
// These declarations are the minimum requirements for using the Backbone ViewManager
var myView = Backbone.View.extend({
	tagName : "div",
	className : "myViewClass",
	template : _.template($("#my-template-id").html()),
	render : function() {
		$(this.el).html(this.template(this.model()));
		return this;
	}
});