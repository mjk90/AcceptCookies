
	AcceptCookies - A jQuery Cookie Acceptance Plugin
	Created by Matt Kelly - https://mjk90.github.io/

	To Use:

		- Add the JS and CSS files to your project.
		- Link to the JS and CSS files, eg:
			- <link rel="stylesheet" type="text/css" href="./acceptcookies/accept-cookies-min.css">
			- <script src="./acceptcookies/accept-cookies-min.js"></script>
		- Add this line of JS to your page to activate the plugin:
			- $.acceptCookies()

	To customize:

		- Add an options object to the above JS. Eg:

			var options = {
			     "title": "This website uses cookies",
			     "text": "By using this site, you agree to our use of cookies.",
			     "theme": "dark",
			     "learnMore": true,
			     "position": "bottom"
			};
			$.acceptCookies(options);

	Options:

		- The plugin accepts the following parameters:

			Parameter 		 		Type
			
			title					string
			text					string
			acceptButtonText		string
			learnMoreButtonText		string
			learnMoreInfoText		string
			theme					string
			position				string
			learnMore				bool
			onAccept				callback


	For a live demo and easy customizer, visit: https://mjk90.github.io/AcceptCookies/