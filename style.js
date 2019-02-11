(function (blink) {
    'use strict';

    var NombreEstiloStyle = function () {
            blink.theme.styles.basic.apply(this, arguments);
        },
        page = blink.currentPage;

NombreEstiloStyle.prototype = {
        parent: blink.theme.styles.basic.prototype,
        bodyClassName: 'content_type_clase_nombre_estilo',
        extraPlugins: ['image2'],
        ckEditorStyles: {
            name: 'oxford-flipped-secundaria-dev',
            styles: []
        },

        init: function () {
            this.parent.init.call(this);
        },
    };

    NombreEstiloStyle.prototype = _.extend({}, new blink.theme.styles.basic(), NombreEstiloStyle.prototype);

    blink.theme.styles['oxford-flipped-secundaria-dev'] = NombreEstiloStyle;

})( blink );
