#!/usr/bin/env node
/*
 * DDoS Stress
 * https://github.com/mlazarov/ddos-stress
 *
 * Copyright (c) 2015, Martin Lazarov
 * Licensed under the MIT license.
 */

/**
 * Module dependencies.
 */

var Stress = require('./');
var addresses = require('./addresses.json');

addresses.forEach(addr => {
  (new Stress()).run(addr, 100);
});
