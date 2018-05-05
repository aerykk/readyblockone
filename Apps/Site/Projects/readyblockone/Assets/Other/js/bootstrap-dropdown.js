/* ============================================================
 * bootstrap-dropdown.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function( $ ){

  "use strict"

 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle="dropdown"]'
    , Dropdown = function ( element ) {
        //var $el = $(element).on('mouseover.dropdown.data-api', this.toggle)
        //console.log($el)
        //$el.parent().on('mouseout.dropdown.data-api', function () {
        //  console.log($el)
        //  $el.next().stop(0, 1).fadeOut(100).parent().removeClass('open')
        //})
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function ( e ) {
      var $this = $(this)
        , selector = $this.attr('data-target')
        , $parent
        , isActive

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      //$this.data('selector', selector);

      $parent = $(selector)
      $parent.length || ($parent = $this.parent())

      isActive = $this.next().stop(0, 1).is(':visible')

      
      if(!isActive) {
        clearMenus()
        $this.next().hide().stop(0, 1).fadeToggle(300).parent().toggleClass('open')
      }

      $(selector).on('click', function(e) {
        clearMenus();
      });

      $(selector).on('mouseover', function(e) {
        //e.stopPropagation();
        //e.preventDefault();

        //$this.off('mouseover');

        //$('body').on('mouseout.dropdown.data-api', $(this), clearMenus, function() { if($(this).is(selector)) clearMenus(); })

        $('#content').on('mouseover', function() { clearMenus(); });
      });

      return false
    }

  }

  function clearMenus() {
      $(toggle).next().stop(0, 1).fadeOut(100).parent().removeClass('open')
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    //$('body').on('mouseover.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    //$('body').on('mouseout.dropdown.data-api', clearMenus)
    $(toggle).on('mouseover', Dropdown.prototype.toggle);
  })

}( window.jQuery )
