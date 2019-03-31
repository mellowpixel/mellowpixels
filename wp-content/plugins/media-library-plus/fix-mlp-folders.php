<?php

/*
Plugin Name: Fix Media Library Plus Folders
Plugin URI: http://maxgalleria.com
Description: Plugin for fixing Media Library Plus folders
Author: Max Foundry
Author URI: http://maxfoundry.com
Version: 3.2.2
Copyright 2016 Max Foundry, LLC (http://maxfoundry.com)
*/

if(!defined('MG_FIX_FOLDERS_NONCE'))
	define ('MG_FIX_FOLDERS_NONCE', 'mg_fix_mlp_nonce');

function mlp_fix_table_menu() {
  add_menu_page('Fix Media Library Plus Folders', 'Fix Media Library Plus Folders', 'manage_options', 'fix-mlp-folders', 'fix_mlp_folders' );
  add_submenu_page('fix-mlp-folders', 'Update Folders Table', 'Update Folders Table', 'manage_options', 'update_folder_table', 'update_folder_table');
  add_submenu_page('fix-mlp-folders', 'Remove Extra Slashes', 'Remove Extra Slashes', 'manage_options', 'remove-slashes', 'remove_slashes');
//  add_submenu_page('fix-mlp-folders', 'Update Folder Records', 'Update Folder Records', 'manage_options', 'update-parent-id', 'update_parent_id');
}
add_action('admin_menu', 'mlp_fix_table_menu');

add_action('wp_ajax_nopriv_fmf_update_parent_id', 'fmf_update_parent_id');
add_action('wp_ajax_fmf_update_parent_id', 'fmf_update_parent_id');


function fix_mlp_folders() {
	?>

<h1>Fix Media Library Plus Folders</h1>

<p>First backup the mgmlp_folders table in your database and then click 'Update Folders Table' to fix folders with invalid parent IDs in your MLP folder database.</p>

  <?php
}

function update_folder_table() {
	
	global $wpdb;
		
	echo "<p>Starting folder table update...</p>";
	
  $upload_folder_id = get_option("mgmlp_upload_folder_id");
	
	if($upload_folder_id !== false) {
	
		$sql = "UPDATE {$wpdb->prefix}mgmlp_folders SET folder_id = REPLACE(folder_id, -1, {$upload_folder_id}) WHERE folder_id = -1;";
		//echo $sql;

		$total = $wpdb->query($sql);
		if($total > 0)
		  echo "<p>$total folders were updated.</p>";
		else
		  echo "<p>No invalid folders were found.</p>";
		
  } else {
		echo "Cound not find the ID of the uploades folder.";
	}
	
}

function remove_slashes() {

	global $wpdb;
		
	echo "<p>Checking for slashes...</p>";
	
    $sql = "select ID, pm.meta_value, pm.meta_id
from {$wpdb->prefix}posts 
LEFT JOIN {$wpdb->prefix}postmeta AS pm ON pm.post_id = {$wpdb->prefix}posts.ID
where post_type = 'attachment' 
or post_type = 'mgmlp_media_folder'
and pm.meta_key = '_wp_attached_file'
group by ID
order by meta_id";


  //echo $sql;

  $rows = $wpdb->get_results($sql);
	
	if($rows) {
    foreach($rows as $row) {
			if( $row->meta_value[0] == "/") {
				$new_meta = $row->meta_value;
				$new_meta = ltrim($new_meta, '/');
		    update_post_meta($row->ID, '_wp_attached_file', $new_meta);							
				echo "Updated row $row->ID: $new_meta<br>";
			}	
		}
	}	
	echo "Done<br>";	
}

function update_parent_id () {
	
	global $wpdb;
	?>

  <h1>Update Folder Records</h1>
	<p>Use this form to change the parent ID of a folder. View the folder and parent IDs using Media Library Plus Reset->View Folder Data.</p>

  <div id="folder-message"></div>
  <p>
		<label>Folder ID:</label> <input type="text" value="" id="folder_id" name="folder_id">&nbsp;
		<label>Parent ID:</label> <input type="text" value="" id="parent_id" name="parent_id">&nbsp;		
	</p>
	<p>
		<button id="mlp_update_folder">Update Folder</button>
	</p>
	
	<script>
		jQuery(document).ready(function(){
			
			jQuery("#mlp_update_folder").click(function(){
								
        var post_id = jQuery("#folder_id").val();      
        var $parent_id = jQuery("#parent_id").val(); 
								
				jQuery.ajax({
					type: "POST",
					async: true,
					data: { action: "fmf_update_parent_id", post_id: post_id, folder_id: $parent_id, nonce: '<?php echo MG_FIX_FOLDERS_NONCE; ?>' },
					url : '<?php echo admin_url( 'admin-ajax.php' ); ?>',
					dataType: "html",
					success: function (data) {
						jQuery("#folder-message").html(data);
					},
					error: function (err)
						{ 
							jQuery("#ajaxloader").hide();
						}
				});                
				
				
				
			});  
			
		});  
	</script>  
	
	
	<?php
		
}

function fmf_update_parent_id() {
		

		exit();
		
}