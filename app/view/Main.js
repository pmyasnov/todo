Ext.define('TODO.view.Main', {
   extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'TODOs',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Projects'
                },

                html: [
                    "There is no projects added yet!"
                ].join("")
            },
            {
                title: 'About',
                iconCls: 'info',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'About'
                    },
                    {
                        xtype: 'video',
                        
                    }
                ]
            }
        ]
    }
});
