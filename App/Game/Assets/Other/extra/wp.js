window.WP = {
	sendRequest: function(url, params) {
		params['data'] = [];

		$.ajax({
			url: url,
			type: 'POST',
			data: params['data'],
			beforeSend: function(xhr) {
				xhr.setRequestHeader('WP-AJAX', '1');
			},
			success: function(response) {
				for(update_element_id in params['update']) {
					$('#' + update_element_id).html(response);
				}

				if(params['onSuccess'])
					params['onSuccess'](response);
			}
		});
	}
}