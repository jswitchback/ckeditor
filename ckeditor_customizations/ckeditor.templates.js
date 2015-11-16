/* Duplicate of overridden js in libraries/ckeditor/plugins/templates/templates/default.js
/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.addTemplates("default",{imagesPath:"/",templates:
[
{
    title:"Button",
    description:"Link styled as a button.",
    html:'<a href="" class="btn">DOUBLE CLICK ME TO EDIT</a>'
},
{
    title:"1 - 2 - 4 column",
    description:"One column on mobile, 2 on tablet, 4 on desktop.",
    html:'<div class="container"><div class="row"><div class="col-sm-6 col-lg-3 col-margin-x3">Column 1</div><div class="col-sm-6 col-lg-3 col-margin-x3">Column 2</div><div class="col-sm-6 col-lg-3 col-margin-x3">Column 3</div><div class="col-sm-6 col-lg-3 col-margin-x3">Column 4</div></div></div>'
},
{
    title:"1 - 1 - 4 column",
    description:"One column on mobile, 1 on tablet, 4 on desktop.",
    html:'<div class="container"><div class="row"><div class="col-lg-3 col-margin-x3">Column 1</div><div class="col-lg-3 col-margin-x3">Column 2</div><div class="col-lg-3 col-margin-x3">Column 3</div><div class="col-lg-3 col-margin-x3">Column 4</div></div></div>'
},
{
    title:"1 - 1 - 3 column",
    description:"One column on mobile, 1 on tablet, 3 on desktop.",
    html:'<div class="container"><div class="row"><div class="col-lg-4 col-margin-x3">Column 1</div><div class="col-lg-4 col-margin-x3">Column 2</div><div class="col-lg-4 col-margin-x3">Column 3</div></div></div>'
},
{
    title:"1 - 2 - 2 column",
    description:"One column on mobile, 2 on tablet, 2 on desktop.",
    html:'<div class="container"><div class="row"><div class="col-lg-6 col-margin-x3">Column 1</div><div class="col-lg-6 col-margin-x3">Column 2</div></div></div>'
},
{
    title:"1 - 2 - 2 (33:66) column",
    description:"One column on mobile, 2 on tablet, 2 on desktop. Columns have a 33/66 split.",
    html:'<div class="container"><div class="row"><div class="col-md-4 col-margin-x3">Column 1</div><div class="col-md-8 col-margin-x3">Column 2</div></div></div>'
},
{
    title:"1 - 2 - 2 (66:33) column",
    description:"One column on mobile, 2 on tablet, 2 on desktop. Columns have a 66/33 split.",
    html:'<div class="container"><div class="row"><div class="col-md-8 col-margin-x3">Column 1</div><div class="col-md-4 col-margin-x3">Column 2</div></div></div>'
},
{
    title:"1 - 2 - 2 (25:75) column",
    description:"One column on mobile, 2 on tablet, 2 on desktop. Columns have a 25/75 split.",
    html:'<div class="container"><div class="row"><div class="col-lg-3 col-margin-x3">Column 1</div><div class="col-lg-9 col-margin-x3">Column 2</div></div></div>'
},
{
    title:"1 - 2 - 2 (75:25) column",
    description:"One column on mobile, 2 on tablet, 2 on desktop. Columns have a 75/25 split.",
    html:'<div class="container"><div class="row"><div class="col-lg-9 col-margin-x3">Column 1</div><div class="col-lg-3 col-margin-x3">Column 2</div></div></div>'
},
{
    title:"Image Align Right with Text Wrap",
    description:"Aligns column right with left column text wrapping on desktop screen widths.",
    html:'<div class="clearfix col-margin-x3"><div style="float:right;"><img src="/" alt="" height="100px" width="100px"></div><p>Add wrapping content here.</p></div>'
},
{
    title:"Image Align Left with Text Wrap",
    description:"Aligns column right with left column text wrapping on desktop screen widths.",
    html:'<div class="cleafix col-margin-x3"><div style="float:left;"><img src="/" alt="" height="100px" width="100px"></div><p>Add wrapping content here.</p></div>'
},
{
    title:"Responsive video embed container",
    description:"Insert iframe video in here for auto resizing on small screen widths.",
    html:'<div class="video-container"><iframe frameborder="0" height="100%" src="" width="100%"></iframe></div>'
},
{
    title:"Responsive Table",
    description:"Horizontally scrolling table.",
    html:'<div class="table-responsive"><table><thead><tr><th>Title 1</th><th>Title 1</th><th>Title 3</th></tr></thead><tbody><tr><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td></tr><tr><td>Table data</td><td>Table data</td><td>Table data</td></tr></tbody></table></div>'
},
{
    title:"Accented Box",
    description:"Grey box and title.",
    html:'<div class="box-list"><h2 class="wys-section-title intro-title"></h2><p>Add content here</p></div>'
},
// {
//     title:"Example Table",
//     image:"sites/all/themes/oam_zen/ckeditor_customizations/images/example.gif", // Default images found at /sites/all/libraries/ckeditor/plugins/templates/templates/images/
//     description:"Example table.",
//     html:'<div class="table-responsive"><table><strong>Table title</strong></caption><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table></div>'
// }

// {title:"Image and Title",image:"template1.gif",description:"One main image with a title and text that surround the image.",html:'<h3><img src=" " alt="" style="margin-right: 10px" height="100" width="100" align="left" />Type the title here</h3><p>Type the text here</p>'},
// {title:"Strange Template",image:"template2.gif",description:"A template that defines two colums, each one with a title, and some text.",html:'<table cellspacing="0" cellpadding="0" style="width:100%" border="0"><tr><td style="width:50%"><h3>Title 1</h3></td><td></td><td style="width:50%"><h3>Title 2</h3></td></tr><tr><td>Text 1</td><td></td><td>Text 2</td></tr></table><p>More text goes here.</p>'},
// {title:"Text and Table",image:"template3.gif",description:"A title with some text and a table.",html:'<div style="width: 80%"><h3>Title goes here</h3><table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1"><caption style="border:solid 1px black"><strong>Table title</strong></caption><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table><p>Type the text here</p></div>'}
]
});
