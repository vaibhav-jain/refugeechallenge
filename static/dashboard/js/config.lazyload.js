
app.constant(
  'JQ_CONFIG', {
    screenfull: [
      '/vendors/screenfull/js/screenfull.min.js'
    ],
    slimScroll: [
      'https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js'
    ]
  })
  .config(
    function($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config(
        {
          modules: [
            {
              name: 'toaster',
              files: [
                'https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/0.4.181/toaster.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/0.4.181/toaster.min.css'
              ]
            }
          ]
        }
      );
    }
  );