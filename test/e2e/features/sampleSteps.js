
var sampleSteps = function() {

	var ptor;

	this.Before(function (callback) {
		browser.ignoreSynchronization = true;

		//expect($('#login_field').waitReady()).toBeTruthy();

		//browser.manage().timeouts().pageLoadTimeout(40000);

		callback();
	});

	this.Given(/^this is the first sample$/, function (callback) {

		// http://assertselenium.com/2013/02/22/handling-iframes-using-webdriver/
		ptor = protractor.getInstance();

		ptor.get('/#').then(function(){

			//ptor.getTitle().then(function(val){
			//	console.log(val);
			//});

			ptor.findElement(protractor.By.css('.wellcomePlayer')).then(function(el) {

				if(el.isDisplayed()){
					callback();
				} else {
					callback.fail("wellcomePlayer div not found");
				}
			});

		});
	});

	this.Given(/^this is the second sample$/, function (callback) {
	  	this.greetings("everybody", callback);
	});

};

module.exports = sampleSteps;