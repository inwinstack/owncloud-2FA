/**
 * Copyright (c) 2015
 *  Vincent Petry <pvince81@owncloud.com>
 *  Jan-Christoph Borchardt, http://jancborchardt.net
 * This file is licensed under the Affero General Public License version 3 or later.
 * See the COPYING-README file.
 */

/**
 * @namespace
 * @memberOf OC
 */
OC.Login = _.extend(OC.Login || {}, {
	onLogin: function () {
	    var check = localStorage['verify'];
	    console.log(check);
	    if (check == 'false') {
	        $('#errMsg').text('請勾選驗證方塊');
	        return false;
	    }
	}
});

$(document).ready(function() {
	$('form[name=login]').submit(OC.Login.onLogin);
});
