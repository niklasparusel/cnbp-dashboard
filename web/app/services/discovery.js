/**
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

const config = require('../../config');
const Discovery = require('watson-developer-cloud/discovery/v1');
const discovery = new Discovery({
   version      : process.env.DISCOVERY_VERSION,
   version_date : process.env.DISCOVERY_VERSION_DATE
});

const utils = require('../util/utils');

/**
 * Query for 5 documents using the Watson Discovery Service
 * @param {string} topic - The topic to query for
 * @returns {promise}
 */
function query(topic) {
  
  var promise = new Promise(function(resolve, reject) {
    discovery.query({ environment_id: process.env.DISCOVERY_ENV_ID, collection_id: 'news-en', query: topic, count:5 }, function(error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
    });
  });
  
  return promise;
}

module.exports = {
  query : query
}
