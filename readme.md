# Backbone ViewManager - BVM
- Written by Joshua Zeltman
- @joshuazeltman
- joshuazeltman.com

## Summary
Backbone's view setup is extremely powerful, but can get even experienced coders into trouble quickly. The Backbone ViewManager is designed to help keep your code clean, while keeping you sane at the same time. The BVM does this by taking the heavy lifting of placing and removing views from the DOM for you and lets you focus on the more important things of your application.

## Dependencies
Backbone, Underscore, jQuery

## Usage
When creating a new View definition, use the default provided in the view-definition.js file. Here's a sample of how to use the BVM while creating a new model and view:

	var myModel = new CleverModelName()
	  , myView = new CleverView({model:myModel});
	  
	Backbone.ViewManager.Add(myView);
	
## Advanced Usage
The BVM currently provides 2 methods - Add() and Remove() - 2 prototype methods for all views - close() and name() - and a Visible[] array for knowing what is on the screen. 

## Add(view, params)
	view - required - object - the view object to add
	params - optional 
		selector - string - DOM element by ID, will be used as such $(selector)…
		keepView - boolean - if true, will not remove the current view from the DOM via the close() method
		action - string - currently only one option - "append". This changes the insertion from a replace (jQuery's .html()) method to an append (jQuery's .append()) method.
		callback - method name - a method to call, within the View definition to be completed after the insertion of the View into the DOM
		
## Remove(view, close)
	view - required - object - the view object to remove from the Visible array
	close - optional - boolean - will run the close() function in addition to removing the view from the Visible array
		
## Advanced Usage example

	var BVM = Backbone.ViewManager
	  , myModel = new CleverModelName()
	  , myView = new CleverView({model:myModel})
	  , params = {
	  	selector : "#my-great-id",
	  	action : "append",
	  	callback : this.myCallbackMethod
	  }
	  
	BVM.Add(myView, params);
	
## Additional Notes
	This version also ship with Mustache style templating enabled. This means that in your templates, your should now use {{ variables }} instead of the underscore defaults <%= %> ERB style.