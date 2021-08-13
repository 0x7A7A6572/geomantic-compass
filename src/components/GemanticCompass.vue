<template>
        <canvas>
        你的浏览器不支持HTML5 Canvas标签
        </canvas>
</template>

<script>
export default {
    name:"GemanticCompass",
    props:{
        winth:Number,
        height:Number
    },
      date:function(){
    return{
      centerXY:[0,0]
    }
  }
}
</script>

<style scoped>

</style>