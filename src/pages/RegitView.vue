<template>
    <div>
      <input type="button" value="短信登录" @click="isSms=true"/>
      <input type="button" value="密码登录" @click="isSms=false"/> 
    <div v-show="isSms">
        <p>
            <label>手机号</label>
            <input type="text" placeholder="手机号" v-model="sms.phone">
        </p>
        <p>
            <label>验证码</label>
            <input type="text" placeholder="验证码" v-model="sms.code">
        </p>
    </div>
    <div v-show="!isSms">
        <p>
            <label>用户名</label>
            <input type="text" placeholder="用户名" v-model="info.username">
        </p>
        <p>
            <label>密码</label>
            <input type="password" placeholder="密码" v-model="info.password">
        </p>
    </div>
 
    <input type="button" value="登 录" @click="loginForm"/>

    <hr>
     <span v-html="password"></span>

    </div>
</template>

<script>
import axios from 'axios'
  export default{
    name:'RegitView',
        data(){
            return{
                isSms: false,
            info: {
                username: "",
                password: "",
            },
            sms: {
                mobile: "",
                code: ""
            }   
            }
        },

  methods:{
      loginForm(){
       // 1.获取用户输入的值
       let dataDict = this.isSms ? this.sms : this.info;//如果 isSmas 是true,则输出{sms}，false {info}
       console.log(dataDict);
 
 let url;
 if (this.isSms) {
     url = "https://api.luffycity.com/api/v1/auth/phone/login/?loginWay=phone";
 } else {
     url = "https://api.bitunix.one/web/test/login?userId="+this.info.password;
 }

 // 2.想某个地址发送网络请求 axios
 // https://api.luffycity.com/api/v1/auth/password/login/?loginWay=password
 // {"username":"alex123","password":"999"}

 // https://api.luffycity.com/api/v1/auth/phone/login/?loginWay=phone
 // {"phone":"18630087660","code":"123123"}
 axios({
     method: "get",
     url: url,
     data: dataDict,//{username: 'admin', password: '123'}
     headers: {
         "Content-Type": "application/json"
     }
 }).then(function (res) {
    //  if (res.data.code ==200) {
    //     //  alert(res.data.msg);
    //     console.log(res.data);
    //      return;
    //  }
    //  // 登录成功后跳转
    //  window.location.href = "https://www.luffycity.com"
    console.log(res);
 }).catch(function (error) {
     alert("请求异常，请重新操作。"+error)
 })

    }

  }
}
</script>