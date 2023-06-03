
<template>
    <div class="registration-form" style="background-image: url('https://pic1.zhimg.com/v2-01c786166ba98e1b32396fb39d046e2a_r.jpg?source=1940ef5c');">
      <h1>报名缴费</h1>
  
      <form @submit="submitForm">
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
  
        <div class="form-group">
          <label for="SID">学号</label>
          <input type="SID" id="SID" v-model="formData.SID" required>
        </div>
  
        <div class="form-group">
          <label for="course">考试</label>
          <select id="course" v-model="formData.course" required>
            <option value="">请选择考试场次</option>
            <option value="course1">场次1</option>
            <option value="course2">场次2</option>
            <option value="course3">场次3</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="paymentMethod">支付方式</label>
          <select id="paymentMethod" v-model="formData.paymentMethod" required>
            <option value="">请选择支付方式</option>
            <option value="alipay">支付宝</option>
            <option value="wechat">微信支付</option>
            <option value="creditCard">信用卡</option>
          </select>
        </div>
  
        <button type="submit">提交</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          SID: '',
          course: '',
          paymentMethod: ''
        }
      };
    },
    methods: {
      submitForm() {
        // 在这里处理表单提交逻辑
        console.log(this.formData);
      }
    }
  };
  </script>
  
  <style>
  body {
    background-color: #646262; /* 将整个网页的背景颜色变浅 */
  }
  </style>

  <style scoped>
  body {
    background-color: #646262; /* 将整个网页的背景颜色变浅 */
  }

  .registration-form {
    max-width: 600px;
    margin: 30px;
    margin-left: 50%; /* 将表单调整到页面的一半长度的位置 */
    transform: translateX(-50%);
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 5px hsla(0, 0%, 100%, 0.941);
    border: 1px solid #a4a1a1; /* 添加边框 */
  }


  h1 {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #323232;
    margin-bottom: 30px;
    background-color: hwb(0 100% 0%);
    padding: 20px;
    box-shadow: 0 2px 5px rgba(169, 167, 167, 0.5);
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    border: 1px solid #a4a1a1; /* 添加边框 */
  }




  .form-group {
    margin-bottom: 20px;
    border: 1px solid #a4a1a1; /* 添加边框 */
    border-radius: 3px;
    padding: 10px;
  }

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #212121;
  }

  input[type="text"],
  input[type="SID"],
  select {
    width: 95%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #a4a1a1;
    border-radius: 3px;
    background-color: #fffefe;
    color: #424242;
  }

  button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: 1px solid #a4a1a1; /* 添加边框 */
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
  }


  button[type="submit"]:hover {
    background-color: #0069d9;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }


  </style> 



