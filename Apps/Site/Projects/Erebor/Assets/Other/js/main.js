window.site = jQuery.extend(true, window.site ? window.site : {}, {
    ajaxMode: true,
    slideMode: true,
    slideExistingSpeed: 200,
    slideNonexistingSpeed: 1000,
    slideBufferSize: 2
})

jQuery.fn.extend({
    random: function() {
        return this.get(Math.floor(this.length * (Math.random() % 1)))
    },
    randomBetween: function(min, max) {
        return this.get(min + jQuery.random(max - min + 1))
    }
})

let random = 0

jQuery.extend(jQuery.expr[':'], {
    random: function(a, i, m, r) {
        if (i == 0) {
            random = Math.floor(Math.random() * r.length)
        }

        return i == random
    }
})

let showLoadingIndicator = function() {
    jQuery('#loading').animate({'right': '+=' + (jQuery('#loading').width() - 5) + 'px'}, 300)
}

let hideLoadingIndicator = function() {
    jQuery('#loading').animate({'right': '-=' + (jQuery('#loading').width() + 5) + 'px'}, 300)
}



jQuery(document).ready(function($) {
    $('#loading').css({'right': '-' + ($('#loading').width() + 5) + 'px'}).show()

    $(document)
      .bind('ajaxStart', function() {
          showLoadingIndicator()
      })
      .bind('ajaxStop', function() {
          hideLoadingIndicator()
      })


    // make code pretty
    window.prettyPrint && prettyPrint()
})

function reloadSyntaxHighlighting() {
  prettyPrint()
}

function reloadCommentingSystem(path) {
    try {
        DISQUS.reset({
            reload: true,
            config: function () {
                var url = window.location.protocol + '//' + window.location.host + path
                var identifier = $.base64.encode(url)
                identifier = identifier.substr(0, identifier.length - 2)

                this.page.identifier = identifier
                this.page.url = url
            }
        })
    } catch(ex) {}
}

jQuery(document).ready(function($) {
  setTimeout(function() {
    let location = new String(window.location)
    let paneTarget = $('#content')
    let lastHashChange = null

    let onHashChange = function() {
        reloadCommentingSystem(name)

        window.site.onResize({reposition: false})
    }

    $('#navigation-social').menu({
        on_click: function(a, callback) {
            callback()
        }
    })

    $('#navigation-social > ul > li > a').hover(
        function() {
            $(this).animate({'background-color': '#111'}, 500)
        },
        function() {
            $(this).stop().animate({'background-color': '#262626'}, 500, function() {    })
        }
    )

    window.site.onResize = function(params) {
        params = $.extend({
            reposition: true
        }, params)

        $('section.active .content-body-wrapper', paneTarget).css('height', function() {
            return $(window).height() - $('section.active .content-header', paneTarget).height() - 70 - 20 - 20 - 40 // 20 padding/margin
        })

        $('#navigation-social').css('height', function() {
            return $(window).height() - 10 - 20 // 20 padding/margin
        })

        $('.pane > ul').css({
            width: parseInt($(window).width()) * 5 + 'px',
            height: parseInt($(window).height()) * 5 + 'px'
        })

        $('.pane > ul > li').each(function() {
            $(this).css({
                width: $(window).width(),
                height: $(window).height()
            })
        })

        $('section.active .content-body', paneTarget).jScrollPane()

        if(!$('section.active .content-fade').length) // already init?
            $('section.active .content-body .jspContainer').prepend('<div class="content-fade top"></div>').append('<div class="content-fade bottom"></div>')

        if(params.reposition) {
            let sectionTarget = $('section.active', paneTarget)

            paneTarget.scrollTo(sectionTarget.parent())
        }
    }

    $(window).bind('resize', window.site.onResize)

    if(!site.ajaxMode) {
        return
    }

    let initializeAjaxMode = function() {
        $('#commenting-system').appendTo($('.comment-container', $('section', paneTarget))) // assume one

        window.site.onResize({reposition: false})

        // Monkey patch history pushState
        var pushState = window.history.pushState
        window.history.pushState = function(state) {
            console.log('History change')
            onHashChange()

            return pushState.apply(window.history, arguments)
        }

        $(window).load(function() {
            onHashChange()
        })

        let dsq_height = 0

        let checkComments = function() {
            if(!window['DISQUS'])
                return setTimeout(checkComments, 50)

            let height = $('#commenting-system').height()

            if(height != dsq_height) {
                $('section.active .content-body', paneTarget).jScrollPane()

                dsq_height = height
            }

            setTimeout(checkComments, 50)
        }

        setTimeout(checkComments, 50)
    }

    initializeAjaxMode()
  }, 1000)
})
