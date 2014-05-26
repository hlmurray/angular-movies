(function () {
  'use strict';

  angular.module('myApp.directives')
    .directive('d3Bars', ['d3', function(d3) {
      return {
        restrict: 'EA',
        scope: {
          data: "=",
          label: "@",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {
          var svg = d3.select(iElement[0])
                      .append("svg")
                      .attr("width", "100%");

          // on window resize, re-render d3 canvas
          window.onresize = function() {
            return scope.$apply();
          };
          scope.$watch(function(){
              return angular.element(window)[0].innerWidth;
            }, function(){
              return scope.render(scope.data);
            }
          );

          // watch for data changes and re-render
          scope.$watch('data', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);

          // define render function
          scope.render = function(data){
            // remove all previous items before render
            svg.selectAll("*").remove();

            // setup variables
            var width, height, max;
            width = d3.select(iElement[0])[0][0].offsetWidth - 20;
              // 20 is for margins and can be changed
            height = 250;
              // 35 = 30(bar height) + 5(margin between bars)
            max = 1500;
              // this can also be found dynamically when the data is not static
              // max = Math.max.apply(Math, _.map(data, ((val)-> val.count)))
            var y = d3.scale.linear()
                      .range([height, 0])
                      .domain([0, d3.max(data, function(d) { return d.revenue; })]);

            // set the height based on the calculations above
            svg.attr('height', height);

            //create the rectangles for the bar chart
            svg.selectAll("rect")
              .data(data)
              .enter()
                .append("rect")
                .on("click", function(d, i){return scope.onClick({item: d});})
                .attr("height", function(d){
                  return height - y(d.revenue) * 5;
                }) // height of each bar
                .attr("width", function(){
                    return (width / data.length) - 1;
                }) // initial width of 0 for transition
                .attr("x", function(d, i){
                  return (width / data.length) * i;
                }) // half of the 20 side margin specified above
                .attr("y", function(d, i){
                    return y(d.revenue);
                }) // height + margin between bars
                .transition()
                  .duration(1000) // time of duration
                  .attr("height", function(d){
                    return height - y(d.revenue);
                  }); // width based on scale

            svg.selectAll("text")
              .data(data)
              .enter()
                .append("text")
                .on("click", function(d, i){return scope.onClick({item: d});})
                .attr("fill", "white")
                .attr("y", function(d, i){
                    return y(d.revenue) ;
                }    )
                .attr("x", function(d, i){
                  return (width / data.length) * i;
                })
                .attr("transform", function(d, i) {
                     return "rotate(90 "+((width / data.length) * i)+","+y(d.revenue)+")";
                 })
                .text(function(d){return d.title;});

          };
        }
      };
    }]);

}());
