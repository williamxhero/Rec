const { register } = require('hexo-unique-post-path');

register('new2_post_title', function(option) {
    var now = new Date();
    var tf = function(i){return (i < 10 ? '0' : '') + i}; 

    var yy = now.getFullYear(); //年
    var mm = now.getMonth() + 1; //月
    var dd = now.getDate(); //日

    let size = option.size || 64;
    let prefix = option.prefix || ""+tf(yy)+tf(mm)+tf(dd)+"-";
    return function(title) {
        return prefix + title.toLowerCase().replace(/[\\\/\:\*\?\"\|\s]/g, '_').substring(0, size);
    };
});