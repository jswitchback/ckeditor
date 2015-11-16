/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 * More examples found in ckeditor module folder ckeditor.style.js
 */
if(typeof(CKEDITOR) !== 'undefined') {
    // alert('new one loaded');
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            // { name : 'Heading 2'		, element : 'h2' },
            // { name : 'Heading 3'		, element : 'h3' },
            // { name : 'Heading 4'		, element : 'h4' },

            /* Object Styles */

            {
                    name : 'Header 2',
                    element : 'h2',
                    attributes :
                    {
                            'class' : 'wys-section-title'
                    }
            },

            {
                    name : 'Header 2 Intro',
                    element : 'h2',
                    attributes :
                    {
                            'class' : 'wys-section-title intro-title'
                    }
            },

            {
                    name : 'Header 3',
                    element : 'h3',
                    attributes :
                    {
                            'class' : 'wys-subsection-title'
                    }
            },

            {
                    name : 'Header 3 Intro',
                    element : 'h2',
                    attributes :
                    {
                            'class' : 'wys-subsection-title intro-title'
                    }
            },

            {
                    name : 'Header 4',
                    element : 'h4',
                    attributes :
                    {
                            'class' : 'wys-paragraph-title'
                    }
            },

            {
                    name : 'Header 4 Intro',
                    element : 'h4',
                    attributes :
                    {
                            'class' : 'wys-paragraph-title intro-title'
                    }
            },

            { name : 'Paragraph'     , element : 'p' }
            // { name : 'Preformatted Text', element : 'pre' },
            // { name : 'Address'           , element : 'address' }
    ]);
}
