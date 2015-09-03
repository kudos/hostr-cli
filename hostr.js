#! /usr/bin/env node

import ConfigStore from 'configstore';
import request from 'superagent';
import fs from 'fs';

const config = new ConfigStore('hostr');

const apiBase = 'https://hostr.co/api';

request
  .post(apiBase + '/file')
  .auth(config.get('email'), config.get('password'))
  .attach('file', process.argv[2])
  .end(function(err, res) {
    if (err) {
      throw err;
    }
    console.log(res.body.href);
  });
