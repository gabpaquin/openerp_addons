openerp.crm = function(openerp) {

    // basic initialization code (e.g. templates loading)
    openerp.example.SomeClass = openerp.base.Class.extend(
        /** @lends openerp.example.SomeClass# */{
        /**
         * Description for SomeClass's constructor here
         *
         * @constructs
         */
        init: function () {
            // SomeClass initialization code
        }
        // rest of SomeClass
    });

    // access an object in an other addon namespace to replace it
    openerp.base.ListView = openerp.base.ListView.extend({
        // If defined, the init method will be used as the constructor
        init: function () {
            //If you want to pass all original arguments to the _super method just use apply
            this._super.apply(this, arguments);
            console.log('List view initialized');
        }
    });
}

/**
	openerp.webclient.on_logout.add_first(
		function() {
			alert('thatsme!');
		}
	);**/

	//openerp.web.views.on_inserted.add_first(
		//openerp.web.ListView.on_loaded.add_first(
		/**  If set null then at the template level Qweb nothing will be displayed**/
		/** openerp.web.ListView.prototype.options.addable = null; **/
	//	function() {
	//		openerp.web.ListView.prototype.defaults.addable = null;
	//	}
	//);

/** 
in Javascript the prototype represent the class and object are create off the prototype
In each method this._super refers to the method being overwritten **/

/** 
openerp.web.ListView

Core class for list-type displays.
*
* As a view, needs a number of view-related parameters to be correctly
* instantiated, provides options and overridable methods for behavioral
* customization.

* @constructs openerp.web.ListView
* @extends openerp.web.View

/////
openerp.web.ListView.List

* @constructs openerp.web.ListView.List
* @extends openerp.web.Class

* List display for the ListView, handles basic DOM events and transforms
* them in the relevant higher-level events, to which the list view (or
* other consumers) can subscribe.

* Events on this object are registered via jQuery.

* Available events: