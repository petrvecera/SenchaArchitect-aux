Ext.define('Ext.ux.SpecialPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.specialpanel',

    requires: [
        'Ext.Toolbar',
        'Ext.Label',
        'Ext.Button',
        'Ext.ux.SpecialContainer'
    ],

    height: 592,
    width: 748,
    title: 'This is custom extension Panel',

    items: [
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
        },
        {
            xtype: 'specialcontainer'       
        }
    ]

});