/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.editorConfig = function( config )
{
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    config.uiColor = '#F1F5F2';
    // 文件浏览
    config.filebrowserImageBrowseUrl = "../include/dialog/select_images.php";
    config.filebrowserFlashBrowseUrl = "../include/dialog/select_media.php";
    config.filebrowserImageUploadUrl  = "../include/dialog/select_images_post.php";
	
	config.autoParagraph = false;
	 config.toolbar = 'Full';// 工具栏风格Full,Basic
    config.enterMode = CKEDITOR.ENTER_P;
	config.shiftEnterMode = CKEDITOR.ENTER_BR; 
};
