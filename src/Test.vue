<template>
    <div>
        <div>
            <img :src="imageURl" :class="{imgs:isShow}" alt="示例图片">
            <button :title="myTitle">w3</button><br>
            <p :class="{content:isShow }" v-bind="css">class绑定</p> <!--{样式类名：boolean值}，如果boolean值为true，则添加样式，如果为false则不添加样式-->
        </div>
    </div>
</template>
<script>
export default{
    name:'TestView',
    data(){
       return{
        imageURl:'https://copyright.bdstatic.com/vcg/creative/cc9c744cf9f7c864889c563cbdeddce6.jpg@h_1280',
        myTitle:'Title',
        isShow:true,
        css:{class:'content',id:'div1'}
       }
    }
}
</script>
<style>
 .content{
    font-size: 20px;
    color:aqua
 }
 #div1{
    font-weight: bold;
 }
.imgs{
    width: 20px;
    height: 20px;
}
</style>