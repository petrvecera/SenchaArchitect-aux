Ext.define('Ext.ux.MySpecialTreePanel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.mytreepanel',

    requires: [
        'Ext.tree.View'
    ],


    height: 600,
    width: 400,
    title: 'This is special tree panel'

});