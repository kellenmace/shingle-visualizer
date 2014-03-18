jQuery(document).ready(function ($) {

  // Initialize variables
  var sv_house_style   = '';
  var sv_shingle_style = '';
  var sv_shingle_color = '';

  /*
   *  Toggle house style dropdown
   */

  // When house style button is clicked
  $( '#sv_house_style_button' ).click( function() {

    // If shingle style or shingle color dropdown is visible
    if ( $( '#sv_shingle_style' ).is( ":visible" ) || $( '#sv_shingle_color' ).is( ":visible" )) {

      // Hide shingle style dropdown if visible
      if ( $( '#sv_shingle_style' ).is( ":visible" ) ) {
        sv_slideup( '#sv_shingle_style' );
      }

      // Hide shingle color dropdown if visible
      if ( $( '#sv_shingle_color' ).is( ":visible" ) ) {
        sv_slideup( '#sv_shingle_color' );
      }

      // Wait 250ms, then toggle house style dropdown
      setTimeout( function() {
        sv_dropdown_toggle( '#sv_house_style' );
      }, 250 );
    }

    // Else, if shingle style and shingle color dropdowns are hidden, immediately toggle house style dropdown
    else {
      sv_dropdown_toggle( '#sv_house_style' );
    }

    // Stop click event from bubbling up to html document
    event.stopPropagation();
  });


  /*
   *  Toggle shingle style dropdown
   */

  // When house style button is clicked
  $( '#sv_shingle_style_button' ).click( function() {

    // If house style or shingle color dropdown is visible
    if ( $( '#sv_house_style' ).is( ":visible" ) || $( '#sv_shingle_color' ).is( ":visible" )) {

      // Hide house style dropdown if visible
      if ( $( '#sv_house_style' ).is( ":visible" ) ) {
        sv_slideup( '#sv_house_style' );
      }

      // Hide shingle color dropdown if visible
      if ( $( '#sv_shingle_color' ).is( ":visible" ) ) {
        sv_slideup( '#sv_shingle_color' );
      }

      // Wait 250ms, then toggle shingle style dropdown
      setTimeout( function() {
        sv_dropdown_toggle( '#sv_shingle_style' );
      }, 250 );
    }

    // Else, if house style and shingle color dropdowns are hidden, immediately toggle shingle style dropdown
    else {
      sv_dropdown_toggle( '#sv_shingle_style' );
    }

    // Stop click event from bubbling up to html document
    event.stopPropagation();
  });


  /*
   *  Toggle shingle color dropdown
   */

  // When shingle color button is clicked
  $( '#sv_shingle_color_button' ).click( function() {

    // If house style or shingle style dropdown is visible
    if ( $( '#sv_house_style' ).is( ":visible" ) || $( '#sv_shingle_style' ).is( ":visible" )) {

      // Hide house style dropdown if visible
      if ( $( '#sv_house_style' ).is( ":visible" ) ) {
        sv_slideup( '#sv_house_style' );
      }

      // Hide shingle style dropdown if visible
      if ( $( '#sv_shingle_style' ).is( ":visible" ) ) {
        sv_slideup( '#sv_shingle_style' );
      }

      // Wait 250ms, then toggle shingle color dropdown
      setTimeout( function() {
        sv_dropdown_toggle( '#sv_shingle_color' );
      }, 250 );
    }

    // Else, if house style and shingle style dropdowns are hidden, immediately toggle shingle color dropdown
    else {
      sv_dropdown_toggle( '#sv_shingle_color' );
    }

    // Stop click event from bubbling up to html document
    event.stopPropagation();
  });


  // Slideup all divs if user clicks outside of plugin
  $('html').click(function() {
      sv_slideup( '#sv_house_style' );
      sv_slideup( '#sv_shingle_style' );
      sv_slideup( '#sv_shingle_color' );

  });


  // Function to toggle dropdowns to slide up or down
  var sv_dropdown_toggle = function( sv_toggle_arg ) {
    if ( $( sv_toggle_arg ).is( ":hidden" ) ) {
        $( sv_toggle_arg ).slideDown( 250 );
    }
    else {
        sv_slideup( sv_dropdown_id );
    }
  };


  // Function to slideup dropdown, if currently visible
  var sv_slideup = function( sv_arg ) {
    if ( $( sv_arg ).is( ":visible" ) ) {
      $( sv_arg ).slideUp(250);
    }
  };


  // When a house style is clicked
  $( '#sv_house_style img' ).click( function() {

    // If intro message is displayed, replace it with steps to complete
    sv_hide_intro_message();

    // Highlight selected house style in blue
    $( '#sv_house_style img' ).removeClass( 'sv_blue_outline' );
    $( this ).addClass( 'sv_blue_outline' );

    // Remove previous check mark icon
    var sv_previous_content = $( '#sv_house_style .sv_selected' ).contents();
    $( '#sv_house_style .sv_selected' ).replaceWith( sv_previous_content );

    // Display check mark icon over selected item
    $( this ).wrap( '<div class="sv_selected"></div>' );
    $( this ).after( $( '#sv_house_style .sv_check_mark' ).show() );

    // Remember which house style was chosen
    sv_house_style = $( this ).attr( 'id' );

    // Change styling of this step to let user know it has been completed
    $( '#sv_step_1' ).html( '\u2611 House style chosen' );
    $( '#sv_step_1' ).removeClass( 'sv_step_incomplete' );

    // Stop click event from bubbling up to the html document
    event.stopPropagation();

    // Change the main display based on what has been chosen so far
    sv_display_composite();
  });


  // When a shingle style is clicked
  $( '#sv_shingle_style img' ).click( function() {

    // If intro message is displayed, replace it with steps to complete
    sv_hide_intro_message();

    // Highlight selected shingle style in blue
    $( '#sv_shingle_style img' ).removeClass( 'sv_blue_outline' );
    $( this ).addClass( 'sv_blue_outline' );

    // Remove previous check mark icon
    var sv_previous_content = $( '#sv_shingle_style .sv_selected' ).contents();
    $( '#sv_shingle_style .sv_selected' ).replaceWith( sv_previous_content );

    // Display check mark icon over selected item
    $( this ).wrap( '<div class="sv_selected"></div>' );
    $( this ).after( $( '#sv_shingle_style .sv_check_mark' ).show() );

    // Remember which shingle style was chosen
    sv_shingle_style = $( this ).attr( 'id' );

    // Change styling of this step to let user know it has been completed
    $( '#sv_step_2' ).html( '\u2611 Shingle style chosen' );
    $( '#sv_step_2' ).removeClass( 'sv_step_incomplete' );

    // Stop click event from bubbling up to the html document
    event.stopPropagation();

    // Change the main display based on what has been chosen so far
    sv_display_composite();
  });


  // When a shingle color is clicked
  $( '#sv_shingle_color img' ).click( function() {

    // Bail out if user picks one of the currently inactive shingle colors
    if ( $( this ).attr( 'id' ) != 'beachwood' ) {
      alert( 'Only the left-most tan shingle color is currently active; try clicking that one' );
      return;
    }

    // If intro message is displayed, replace it with steps to complete
    sv_hide_intro_message();

    // Highlight selected shingle color in blue
    $( '#sv_shingle_color img' ).removeClass( 'sv_blue_outline' );
    $( this ).addClass( 'sv_blue_outline' );

    // Remove previous check mark icon
    var sv_previous_content = $( '#sv_shingle_color .sv_selected' ).contents();
    $( '#sv_shingle_color .sv_selected' ).replaceWith( sv_previous_content );

    // Display check mark icon over selected item
    $( this ).wrap( '<div class="sv_selected"></div>' );
    $( this ).after( $( '#sv_shingle_color .sv_check_mark' ).show() );

    // Remember which shingle color was chosen
    sv_shingle_color = $( this ).attr( 'id' );

    // Change styling of this step to let user know it has been completed
    $( '#sv_step_3' ).html( '\u2611 Shingle color chosen' );
    $( '#sv_step_3' ).removeClass( 'sv_step_incomplete' );

    // Stop click event from bubbling up to the html document
    event.stopPropagation();

    // Change the main display based on what has been chosen so far
    sv_display_composite();
  });


  // Function to hide intro message and replace with steps to complete
  var sv_hide_intro_message = function() {
    if ( $( '#sv_intro_message' ).is( ":visible" ) ) {
      $( '#sv_intro_message' ).hide();

      setTimeout( function() {
        $( '#sv_steps' ).removeClass( 'sv_steps_hidden' ).addClass( 'sv_steps_table' );
      }, 250 );
    }
  };


  // Function to display composite image of selected house with selected shingles in the background
  var sv_display_composite = function() {

    // If house style, shingle style and shingle color have all been chosen
    if ( sv_house_style !== '' && sv_shingle_style !== '' && sv_shingle_color !== '' ) {

      // Hide steps to complete
      $( '#sv_steps' ).removeClass( 'sv_steps_table' ).addClass( 'sv_steps_hidden' );

      // Slideup all dropdowns
      sv_slideup( '#sv_house_style' );
      sv_slideup( '#sv_shingle_style' );
      sv_slideup( '#sv_shingle_color' );

      // Change background of main content div to white
      $( '#sv_main_content' ).css("background-image", "none");

      // Display composite image div, and delete any old child elements it still contains
      $( '#sv_composite_image' ).empty().show();

      // Display composite image background (shingles)
      if ( sv_shingle_style == 'traditional' ) {
        if ( sv_shingle_color == 'beachwood' ) {
          $( '#sv_composite_image' ).append( '<img src="' + sv_plugin_images_dir + 'composite/iko_marathon_beachwood_solid.png" alt="Composite Image Background" id="sv_composite_backgound" />' );
        }
      }

      // Display composite image foreground (house)
      if ( sv_house_style == 'colonial' ) {
        $( '#sv_composite_image' ).append( '<img src="' + sv_plugin_images_dir + 'composite/colonial.png" alt="Composite Image Foreground" id="sv_composite_foreground" />' );
      }
      if ( sv_house_style == 'ranch' ) {
        $( '#sv_composite_image' ).append( '<img src="' + sv_plugin_images_dir + 'composite/ranch.png" alt="Composite Image" id="sv_composite_foreground" />' );
      }
    }
  };
});