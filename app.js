
angular.module('flightApp', [])
  .controller('FlightController', function($scope) {
    $scope.flights = [
      { name: 'Flight 001', departure: 'Phnom Penh', destination: 'Seam Reab', price: 120, status: 'available' },
      { name: 'Flight 002', departure: 'New York', destination: 'Dubai', price: 600, status: 'reserved' },
    ];

    $scope.reserveFlight = function(flight) {
      flight.status = 'reserved';
    };
  });
