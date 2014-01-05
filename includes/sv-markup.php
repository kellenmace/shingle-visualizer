<?php
	// Save plugin images directory path
	$sv_plugin_images_dir = plugin_dir_url() . 'shingle-visualizer/images/';
?>

<!-- Plugin title and buttons -->
<div id="sv_title">
	<h3>Shingle Visualizer</h3>
</div>
<div id="sv_container">
	<div id="sv_buttons">
		<input type="button" value="House Style" id="sv_house_style_button" />
		<input type="button" value="Shingle Style" id="sv_shingle_style_button" />
		<input type="button" value="Shingle Color" id="sv_shingle_color_button" />
	</div>

	<div id="sv_main_content">

		<!-- Intro message -->
		<div id="sv_intro_message">
			<h3>Use this tool for seeing what various shingle styles and colors look like on a home. Start by clicking the buttons above.</h3>
		</div>

		<!-- List of steps to complete -->
		<div id="sv_steps" class="sv_steps_hidden">
			<p id="sv_step_1" class="sv_step_incomplete">&#x2610 House style chosen</p>
			<p id="sv_step_2" class="sv_step_incomplete">&#x2610 Shingle style chosen</p>
			<p id="sv_step_3" class="sv_step_incomplete">&#x2610 Shingle color chosen</p>
		</div>

		<!-- House choices -->
		<div id="sv_house_style" class="sv_dropdown">
			<p>Choose house style</p>
			<img src="<?php echo( $sv_plugin_images_dir . 'colonial.jpg' ); ?>" alt="Colonial" id="colonial" />
			<img src="<?php echo( $sv_plugin_images_dir . 'ranch.jpg' ); ?>" alt="Ranch" id="ranch" />
			<img src="<?php echo( $sv_plugin_images_dir . 'check-mark-blue-48.png' ); ?>" alt="Check Mark" class="sv_check_mark" />		
		</div>

		<!-- Shingle style choices -->
		<div id="sv_shingle_style" class="sv_dropdown">
			<p>Choose shingle style</p>
			<img src="<?php echo( $sv_plugin_images_dir . 'iko_marathon_charcoal_grey.jpg' ); ?>" alt="Traditional" id="traditional" />
			<img src="<?php echo( $sv_plugin_images_dir . 'check-mark-blue-48.png' ); ?>" alt="Check Mark" class="sv_check_mark" />
		</div>

		<!-- Shingle color choices -->
		<div id="sv_shingle_color" class="sv_dropdown">
			<p>Choose shingle color</p>
			<img src="<?php echo( $sv_plugin_images_dir . 'iko_marathon_beachwood.jpg' ); ?>" alt="Beachwood" id="beachwood" />
			<img src="<?php echo( $sv_plugin_images_dir . 'iko_marathon_aged_redwood.jpg' ); ?>" alt="Aged Redwood" id="aged-redwood" />
			<img src="<?php echo( $sv_plugin_images_dir . 'iko_marathon_charcoal_grey.jpg' ); ?>" alt="Charcoal Grey" id="charcoal_grey" />
			<img src="<?php echo( $sv_plugin_images_dir . 'iko_marathon_driftwood.jpg' ); ?>" alt="Driftwood" id="driftwood" />
			<img src="<?php echo( $sv_plugin_images_dir . 'iko_marathon_dual_black' ); ?>" alt="Dual Black" id="dual_black" />
			<img src="<?php echo( $sv_plugin_images_dir . 'check-mark-blue-48.png' ); ?>" alt="Check Mark" class="sv_check_mark" />
		</div>

		<!-- Composite Image -->
		<div id="sv_composite_image"></div>
	</div>
</div>