<template>
    <canvas ref="barChart" width="400" height="400"></canvas>
</template>

<script>

export default {
    props:['propsdata'],
    mounted(){
        var ctx = this.$refs.barChart;
        var myChart = new this.$_Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                onClick: function(){
                    this.$emit('refresh:chart');
                }
            }
        });
  },
  created(){

  }
}
</script>

<style>

</style>