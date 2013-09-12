Package.describe({
	summary: "FitText packaged for Meteor."
});

Package.on_use(function (api) {
	api.use('jquery', 'client');
	api.add_files('lib/jquery.fittext.js', 'client');
});