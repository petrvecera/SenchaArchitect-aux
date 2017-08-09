{
    classAlias: "widget.specialpanel",
    className: "Ext.ux.SpecialPanel", 
    // this specifies if it should iherit configs from some class
    inherits: "panel",
    autoName: "MySpecialPanel",

    // this specifies in which groups it's shown in the SA toolbox
    "toolbox": {
        "name": "Special Panel Extension",
        "category": "Containers",
        "groups": ["Containers", "Views"]
    },

    // you can define your custom configs (they are shown in the config panel in SA)
    configs: [
    {
        name: 'special',
        type: 'number',
        bindable: true,
        hidden: false,
        initialValue: 5000
    },{
        name: 'width',
        type: 'number',
        bindable: true,
        doc: 'This is help icon info',
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
    },{
    	name: 'customOptions',
    	type: 'string',
    	editor: 'options', // you can't edit options, you have to select one from the menu
        defaultValue: 'top',
    	options: ['top', 'bottom']
    },{
    	name: 'customCombo',
        type: "auto",
        allowBoolean: true,
        editor: "combo",
        options: [
            ['false', false],
            ['true', true],
            ['horizontal', 'horizontal'],
            ['vertical', 'vertical'],
            ['both', 'both']
        ]
    },{        
        name: 'shouldRender',
        type: 'boolean',
        alternates:[{
            type: 'object'
        }]
    }
    ]
}