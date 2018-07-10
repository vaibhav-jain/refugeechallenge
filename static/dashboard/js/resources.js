/**
 * REST API Resources
 */

'use strict';

/* Graph API */
app.factory('GraphAPI',
  ['Restangular',
    function (Restangular) {
      return Restangular.service('graphql');
    }
  ]
);
