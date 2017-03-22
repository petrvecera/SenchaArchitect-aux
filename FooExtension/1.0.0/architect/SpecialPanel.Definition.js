{
    classAlias: "widget.specialpanel",
    className: "Ext.ux.SpecialPanel", 
    // this specifies if it should iherit configs from some class
    inherits: "panel",
    autoName: "MySpecialPanel",

    // this specifies under which namesm 
    "toolbox": {
        "name": "Special Panel Extension",
        "category": "Containers",
        "groups": ["Containers","Views"]
    },

    // you can define your custom configs (they are shown in the config panel in SA)
    configs: [
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
    }]
}