Ext.define('Ext.ux.SpecialPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.specialpanel',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.button.Button'
    ],

    height: 592,
    width: 748,
    title: 'This is custom extension Panel',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'label',
                    text: 'Click on the butto to invoke the fucntion from external.js script -->'
                },
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        // this function is defined in the external file special.js
                        thisIsSupaFunction();
                    },
                    text: 'Click me'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'container',
            cls: 'special-container',
            height: '100%',
            html: '<div align="center">I Have custom css class</div>',
            width: '100%'
        }
    ]

});