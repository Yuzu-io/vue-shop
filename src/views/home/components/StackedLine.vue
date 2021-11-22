<template>
  <div class="echarts_div">
    <div class="stacked_line" ref="stackedline"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { debounce } from '../../../utils/debounce'
import { getDecrease } from '../../../utils/time'

export default {
  data () {
    return {
      stacked: null,
      echartsTime: []
    }
  },
  mounted () {
    this.time()
    this.stackedLine()
    window.addEventListener('resize', debounce(this.echartsSize, 200))
  },
  methods: {
    stackedLine () {
      this.stacked = echarts.init(this.$refs.stackedline)
      this.stacked.setOption({
        title: {
          text: '走势图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['New Visits', 'Messages', 'Purchases', 'Shoppings']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: this.echartsTime.reverse()
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'New Visits',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
            // smooth: true
          },
          {
            name: 'Messages',
            data: [1320, 1330, 1290, 934, 901, 932, 820],
            type: 'line'
            // smooth: true
          },
          {
            name: 'Purchases',
            data: [10, 50, 30, 100, 555, 666, 222],
            type: 'line'
            // smooth: true
          },
          {
            name: 'Shoppings',
            data: [153, 546, 789, 123, 1254, 331, 55],
            type: 'line'
            // smooth: true
          }
        ]
      })
    },
    echartsSize () {
      this.stacked.resize()
    },
    time () {
      for (let i = 0; i < 7; i++) {
        this.echartsTime.push(getDecrease(i, 'yyyy-MM-dd'))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.echarts_div {
  height: 350px;
  width: 100%;
  margin: 40px 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.stacked_line {
  height: 100%;
  padding: 10px;
  background-color: #fff;
}
</style>
