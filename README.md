<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css"></link>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

    <g:evaluate>
        var rawData = [];

        var incident = new GlideRecord('incident');
        incident.orderBy('priority');
        incident.query();

        while(incident.next()){
            rawData.push({
                sys_created_on: incident.getDisplayValue('sys_created_on'),
                priority: incident.getDisplayValue('priority')
            });
        }

        var dataStr = JSON.stringify(rawData);
    </g:evaluate>
    
    <div class="container">
        <div class="row">
            <h1>Header</h1>
        </div>
     	<div class="row">
            <canvas id="sample-chart" width="400" height="200"></canvas>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.3/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>

    <script>
        (function($){
            var ctx = document.getElementById("sample-chart").getContext('2d');

            var data = $[dataStr];

            var groupedData = _.groupBy(data, function(rec){
                return rec.sys_created_on.split(" ")[0];
            }); 

            var secondDimension = _.uniq(_.map(data, function(obj){
                return obj.priority;
            }));

            var datasets = _.map(secondDimension, function(dimension){
                var counts = _.map(groupedData, function(obj, key){ 
                    return _.filter(obj, function(subObj){
                        return subObj.priority == dimension;
                    }).length;
                });

                return {
                    data: counts,
                    backgroundColor: getRandomColor(),
                    label: dimension,
                    fill: false
                }

            });

            var labels = _.map(groupedData, function(obj, key){ return key});
            var data = _.map(groupedData, function(obj, key){ return obj.length});

            new Chart(ctx, {
                type: 'bar',
                'data': {
                    'labels': _.map(groupedData, function(obj, key){ return key}),
                    'datasets': datasets
                },
                options: {
                   scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            }); 

            function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i != 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
            }

        })(jQuery)

    </script>

</j:jelly>
