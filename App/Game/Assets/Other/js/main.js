window.site = jQuery.extend(true, window.site ? window.site : {}, {
	ajax_mode: true,
	slide_mode: true,
	slide_existing_speed: 200,
	slide_nonexisting_speed: 1000,
	slide_buffer_size: 2
});

jQuery.fn.extend({
	random: function() {
		return this.get(Math.floor(this.length * (Math.random() % 1)));
	},
	randomBetween: function(min, max) {
		return this.get(min + jQuery.random(max - min + 1));
	}
});

var random = 0;

jQuery.extend(jQuery.expr[':'], {
	random: function(a, i, m, r) {
		if (i == 0) {
				random = Math.floor(Math.random() * r.length);
		};

		return i == random;
	}
});

window.site.on_resize;
window.site.on_load = function() {

};


var show_loading_indicator = function() {
	jQuery('#loading').animate({'right': '+=' + (jQuery('#loading').width() - 5) + 'px'}, 300);
};

var hide_loading_indicator = function() {
	jQuery('#loading').animate({'right': '-=' + (jQuery('#loading').width() + 5) + 'px'}, 300);
};



jQuery(document).ready(function($) {
	$('#loading').css({'right': '-' + ($('#loading').width() + 5) + 'px'}).show();

	$(document).bind("ajaxStart", function() {
		show_loading_indicator();
	}).bind("ajaxStop", function() {
		hide_loading_indicator();
	});


	// make code pretty
	window.prettyPrint && prettyPrint();
});

function reload_syntax_highlighting() {
  prettyPrint();
}

function reload_commenting_system(path) {
	try {
		DISQUS.reset({
			reload: true,
			config: function () {
				var url = window.location.protocol + '//' + window.location.host + path;
				var identifier = $.base64.encode(url);
				identifier = identifier.substr(0, identifier.length - 2);

				this.page.identifier = identifier;
				this.page.url = url;
			}
		});
	} catch(ex) {}
}

jQuery(document).ready(function($) {
	var location = new String(window.location);

	var update_links = function(params) {
		params = $.extend({
			target: $('body')
		}, params);

		// convert full path
		$('a[href^="' + site_url.substr(0, site_url.length-1) + '"][data-ajax!="none"]', params.target).each(function() {
			var href = $(this).attr('href');

			if(href === site_url || href === site_url.substr(0, site_url.length-1)) {
				href = '/';
			}
			else {
				href = href.replace(site_url, '/');
			}

			$(this).attr('href', href);
		});

		$('a[href^="/"][data-ajax!="none"]', params.target).address();

		$('a[href^="http"]', params.target).attr('target', '_blank');
	};

	var pane_target = $('#content');

	var last_hash_change = null;


	var on_hash_change = function(current_hash_change) {
		if((last_hash_change !== null && last_hash_change.path.replace(/\/$/gi, '') === current_hash_change.path.replace(/\/$/gi, ''))
			 || (last_hash_change === null && window.location.pathname.replace(/\/$/gi, '') === window.root_url.replace(/\/$/gi, ''))) {
			last_hash_change = current_hash_change;

			return; // we're already on that page
		}

		last_hash_change = current_hash_change;

		var params = {};

		var name = current_hash_change ? current_hash_change.path.replace(/\/$/gi, '') : window.location.pathname.replace(/\/$/gi, '') + '';

		var sanitized_name = name.replace(/\//gi, '').replace(/\_+/gi, '');

		name = sanitized_name ? name : '/';

		var id = sanitized_name ? sanitized_name : 'home';

		if(!$('#' + id).length) {
			var html = '';

			for(var i = 0, l = site.slide_buffer_size; i < l; ++i)
				html += '<li><section></section></li>';

			html += '<li><section id="' + id + '"></section></li>';

			$(innerShiv(html)).appendTo($('> ul', pane_target));

			window.site.on_resize({reposition: false});
		}

		$('section', pane_target).removeClass('active');

		var section_target = pane_target.find('#' + id);

		if(section_target.html()) { // section is already good to go
			$.address.title($('.content-header h1', section_target).html() + ' - Eric Muyser');

			section_target.addClass('active');

			$('#commenting-system').appendTo($('.comment-container', section_target));

			reload_commenting_system(name);

			window.site.on_resize({reposition: false});

			var speed = site.slide_mode ? site.slide_existing_speed : 0;

			pane_target.scrollTo(section_target.parent(), speed);

			return;
		}

		$.extend(params, {
			update: {},
			onSuccess: function() {
				$.address.title($('.content-header h1', section_target).html() + ' - ' + window.site_title);

				section_target.addClass('active');

				update_links({target: section_target});

				$('#commenting-system').appendTo($('.comment-container', section_target));

				reload_commenting_system(name);
        		reload_syntax_highlighting();

				window.site.on_resize({reposition: false});

				var speed = site.slide_mode ? site.slide_nonexisting_speed : 0;

				pane_target.scrollTo(section_target.parent(), speed);
			}
		}, true);

		params['update'][id] = 'wp_cms_page';

		WP.sendRequest(name, params);
	};

	$('#navigation-social').menu({
		on_click: function(a, callback) {
			callback();
		}
	});

	$('#navigation-social > ul > li > a').hover(function() {
		$(this).animate({'background-color': '#111'}, 500);
	},
	function() {
		$(this).stop().animate({'background-color': '#262626'}, 500, function() {	});
	});

	window.site.on_resize = function(params) {
		params = $.extend({
			reposition: true
		}, params);

		$('section.active .content-body-wrapper', pane_target).css('height', function() {
			return $(window).height() - $('section.active .content-header', pane_target).height() - 70 - 20 - 20 - 40; // 20 padding/margin
		});

		$('#navigation-social').css('height', function() {
			return $(window).height() - 10 - 20; // 20 padding/margin
		});

		$('.pane > ul').css({
			width: parseInt($(window).width()) * 5 + 'px',
			height: parseInt($(window).height()) * 5 + 'px'
		});

		$('.pane > ul > li').each(function() {
			$(this).css({
				width: $(window).width(),
				height: $(window).height()
			});
		});

		$('section.active .content-body', pane_target).jScrollPane();

		if(!$('section.active .content-fade').length) // already init?
			$('section.active .content-body .jspContainer').prepend('<div class="content-fade top"></div>').append('<div class="content-fade bottom"></div>');

		if(params.reposition) {
			var section_target = $('section.active', pane_target);

			pane_target.scrollTo(section_target.parent());
		}
	};

	$(window).bind('resize', window.site.on_resize);

	if(!site.ajax_mode)
		return;

	var initialize_ajax_mode = function() {
		$('#commenting-system').appendTo($('.comment-container', $('section', pane_target))); // assume one

		$.address.state('/').init(function(event) {
			update_links();

			window.site.on_resize({reposition: false});

			//$.address.internalChange(on_hash_change);
			//$.address.externalChange(on_hash_change);
			$.address.change(on_hash_change);

			$(window).load(function() {
				if(!last_hash_change)
					on_hash_change();
			});
		});

		var dsq_height = 0;

		var check_comments = function() {
			if(!window['DISQUS'])
				return setTimeout(check_comments, 300);

			var height = $('#commenting-system').height();

			if(height != dsq_height) {
				$('section.active .content-body', pane_target).jScrollPane();

				dsq_height = height;
			}

			setTimeout(check_comments, 300);
		};

		setTimeout(check_comments, 300);
	};

	initialize_ajax_mode();
});
