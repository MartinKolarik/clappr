// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Plugin = require('./plugin');
var UIObject = require('./ui_object');

var UIPlugin = UIObject.extend(Plugin).extend({
  type: 'ui',
  enable: function() {
    UIPlugin.prototype.super.call(this, 'enable');
    this.$el.show();
  },
  disable: function() {
    UIPlugin.prototype.super.call(this, 'disable');
    this.$el.hide();
  },
  bindEvents: function() {}
}); 

module.exports = UIPlugin;

