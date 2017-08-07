{
    classAlias: "widget.mySpecialtreepanel",
    className: "Ext.ux.MySpecialTreePanel", 
    // this specifies if it should iherit configs from some class
    autoName: "MySpecialTreePanel",
    inherits: 'container',

    // this specifies under which namesm 
    "toolbox": {
        "name": "Special  TreePanel Extension",
        "category": "Containers",
        "groups": ["Containers","Views"]
    },

    // you can define your custom configs (they are shown in the config panel in SA)
    configs: [
    {
        name: 'TreePanelStore',
        type: 'store',
        storeSelector: 'treestore'
    },
    {
        name: 'special',
        type: 'number',
        hidden: false,
        initialValue: 5000
    },{
        name: 'width',
        type: 'number',
        hidden: false,
        initialValue: 743
    },{
        name: 'height',
        type: 'number',
        hidden: false,
        initialValue: 585
    },{
        name: 'myFunction',
        type: 'function',
        params: [{
            name: 'first'
        },{
            name: 'second'
        }]
    }]
}