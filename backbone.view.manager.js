// ==========================================================
// 	Close() prototype method
// ==========================================================
Backbone.View.prototype.close = function() {
	this.remove();
	this.unbind();
}

// ==========================================================
// 	Name() prototype method
// ==========================================================
Backbone.View.prototype.name = function() {
	this.class = this.className ? this.className : "view";
	this.name = this.class + "-" + this.cid;
	return this.name;
}

// ==========================================================
// 	Use Mustache style {{ variables }}
// ==========================================================
_.templateSettings = {
	interpolate : /\{\{(.+?)\}\}/g
};


// ==========================================================
// ==========================================================
// 	Backbone View Manager
// ==========================================================
// ==========================================================
Backbone.ViewManager = {

	// Views that are currently visible
	Visible : [],
	
	// The ViewManager Add() method requires a view to be passed
	// but also accepts an optional params object
	Add : function(view, params) {
			
		// Setup the target with the passed selector or assign it to the body
		var target = params && params.selector ? params.selector : "body";
		
		// If there is a current view, and you didn't pass keepView to keep the current view
		if (this.currentView && !params.keepView){
			this.currentView.close();
		}
		
		// Make the passed view the current view, then render the current view
		this.currentView = view;
		this.currentView.render();
		
		// Add this view to the Visible array
		this.Visible.push(view);
		
		// Use the passed action if there is one
		if ( !params || params && !params.action ) $(target).html(this.currentView.el);
		else if ( params && params.action == "append" ) $(target).append(this.currentView.el);
		
		// if there is a passed callback, call it now
		if ( params && params.callback ) params.callback();
		
		// Return the view back to where it was called
		return this.currentView;
	},
	
	// The ViewManager Remove() method requires a view to be passed
	Remove : function(view, close) {
		// Loop through the views, and remove the view from the Visible array
		for ( var i = 0; i < this.Visible.length; i++ ) {
			if ( view.name == this.Visible[i].name ) {
				this.Visible.splice(i,1);
				if ( close ) view.close();
			}
		};
	}
	
}