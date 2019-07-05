import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

import { ChartData } from '../models/ChartData';


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input() data: ChartData[];
  @Input() title: string;

  total: number = 0;

  constructor() { }

  ngOnInit() {
    this.data = [
      new ChartData('Tablet', 1200, '#13ba15'),
      new ChartData('Smartphone', 2300, '#7cde7d'),
    ];

    this.title = 'Revenue';
    this.total = this.data.reduce((a,b) => a + b.value, 0);


    this.makeChart();
  }

  makeChart(){
    debugger
    let data = this.data.map(d => {
      let result = {};
      return result[d.key] = d.value;
    });

    let width = 450;
    let height = 450;
    let margin = 40;

    let radius = Math.min(width, height) / 2 - margin;

    let svg = d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let color = d3.scaleOrdinal().domain(Object.keys(data)).range([this.data[0].color, this.data[1].color]) //Chart Colors Refactor

    let pie = d3.pie().value( (d) => {return d.value});

    let data_ready = pie(d3.entries(data));

    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(170)         // This is the size of the donut hole
        .outerRadius(radius)
      )
      .attr('fill', function (d) { return (color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

      //Text inside chart
      svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '4em')
      .attr('fill', '#dadbd5')
      .attr('y', -60)
      .text(this.title);

      svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '4em')
      .attr('y', 10)
      .text(this.formatTotal(this.total.toString()));
      this.orderData();
  }

  getClass(index:number) {
    return index % 2 == 0 ? 'col-3 offset-sm-3' : 'col-3 offset-sm-2';
  }
  orderData() {
    this.data.sort((a, b) => {
      if (a.value < b.value)
        return -1;
      if (a.value > b.value)
        return 1;
      return 0;
    });
  }

  formatTotal(str) {
    return (str.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '€');
  }

}
