/**
 * Refugee Controllers
 */

'use strict';

/* Refugee Controller */
app.controller('RefugeeController',
  function ($scope, $modal, GraphService) {
    $scope.amount = 0;
    $scope.refugee = {};

    var payload = {
      "operationName":null,
      "query": "{refugee(id: \"anyidwilldo\") { id first_name last_name email image bio origin_country goals profile_color}}",
      "variables":null
    };
    GraphService.one().customPOST(payload).then(
      function (success) {
        $scope.refugee = success.data.refugee;
      },
      function (error) {
      }
    );

    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'donationModal',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (amount) {
        $scope.amount = amount;
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };

  }
);

app.controller('ModalInstanceCtrl',
  function($scope, $modalInstance, toaster) {
    $scope.amount = 0;
    $scope.toaster = {
      type: 'success',
      title: 'Thanks for your contribution',
      text: 'Donation received successfully'
    };

    $scope.ok = function () {
      toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
      $modalInstance.close($scope.amount);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }
);
