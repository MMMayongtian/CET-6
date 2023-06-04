
<template>
  <div class="page">
    <div class="registration-form" style="background-color: white;">
      <h1>报名缴费</h1>
      <el-form ref="addOrderFormRef" :model="orderFrom" :rules="orderFromRules" label-width="80px">
        <el-form-item label="用户姓名">
          <el-input v-model="orderFrom.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="考生编号">
          <el-input v-model="orderFrom.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="考生邮箱">
          <el-input v-model="orderFrom.email" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="考试场次" :rules="[{ required: true }]">
          <el-select v-model="orderFrom.order_fapiao_content" placeholder="请选择考试场次">
            <el-option v-for="goods in goodsList" :key="goods.goods_id" :label="goods.goods_name"
              :value="goods.goods_name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="支付方式" :rules="[{ required: true }]">
          <el-select v-model="orderFrom.payment" placeholder="请选择支付方式">
            <!-- <el-option label="支付宝" value="zhifubao"></el-option> -->
            <el-option label="微信" value="weixin"></el-option>
            <!-- <el-option label="银行卡" value="card"></el-option> -->
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="dialogVisible = true">缴费报名</el-button>
          <el-button @click="back">取消</el-button>
        </el-form-item>
      </el-form>

    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <img class="payp" src="../../assets/images/wan.jpg">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
  
<script>
let uid = localStorage.getItem("uid");
let uname = localStorage.getItem("name");
let email = localStorage.getItem("email");
import { getGoodsListRequest } from "network/goods";
import { addOrderRequest } from "network/order";
export default {
  data() {
    return {
      dialogVisible: false,
      orderFrom: {
        name: uname,
        id: uid,
        email: email,
        payment: '',
        order_number: uid,
        order_price: 50,
        order_pay: '是',
        pay_status: 1,
        order_fapiao_content: '',
      },
      orderFromRules: {
        order_fapiao_content: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      },
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 99
      },
      goodsList: [],
      total: 0,
    }
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    // 修改订单数据
    addOrder() {
      this.$refs.addOrderFormRef.validate(valid => {
        if (!valid) return;
        let orderFrom = this.orderFrom;
        addOrderRequest({
          user_id: 111,
          sid: uid,
          order_price: orderFrom.order_price,
          order_fapiao_content: orderFrom.order_fapiao_content,
          is_send: orderFrom.is_send === '是' ? '1' : '0',
          pay_status: orderFrom.pay_status,
        }).then(res => {
          let result = res.data;
          console.log(result)
          if (result.meta.status !== 201) {
            return this.alertMessage('修改失败', 'error');
          }
        })
      })
    },
    getGoodsList() {
      getGoodsListRequest(this.queryInfo).then(res => {
        let result = res.data;
        if (result.meta.status !== 200) {
          return this.alertMessage('获取商品数据失败', 'error');
        }
        this.goodsList = result.data.goods;
        this.total = result.data.total;
      });
    },
    back() {
      this.$router.push('/front');
    },
    onSubmit() {
      this.addOrder()
      this.$message({
        message: '报名缴费成功！！',
        type: 'success'
      });
      this.$router.push('/front');
      console.log('submit!');
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
}
</script>
  

<style lang="scss" scoped>
.page {
  overflow:hidden;
  width:100%;
  height: 100%;
  background-image: url("~assets/images/6663.jpg");

}

.registration-form {
  margin-top: 100px;
  max-width: 400px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 35px;
  border-radius: 10px;
  border: 0.5px solid #a4a1a1;
  /* 添加边框 */
}
.payp {
  width: 50%;
  transform: translateX(-50%);
  margin-left: 50%;
}

h1 {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #323232;
  margin-top: 0px;
  background-color: hwb(0 100% 0%);
  padding: 10px;
  font-family: 'Roboto', sans-serif;

}
</style> 



