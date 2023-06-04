<template>
  <div>
    <el-table :data="orderList" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="考生编号" prop="order_number"></el-table-column>
      <el-table-column label="考试场次" prop="order_fapiao_content"></el-table-column>
      <el-table-column label="缴费金额" prop="order_price" width="80px"></el-table-column>
      <el-table-column label="是否付款" prop="order_pay" width="80px">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.pay_status === '1'" type="success">已付款</el-tag>
          <el-tag v-else type="danger">未付款</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="参加考试" prop="is_send" width="80px"></el-table-column>
      <el-table-column label="缴费时间" prop="create_time">
        <template slot-scope="scope">
          {{scope.row.create_time | dateFormat}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 修改按钮组件 -->
          <order-edit :order-id="scope.row.order_id" @order-list="updateOrderList"/>

          <!-- 查询物流进度 -->
          <order-progress/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

  import OrderEdit from "./OrderEdit";
  import OrderProgress from "./OrderProgress";

  export default {
    name: "OrderTable",
    components: {
      OrderEdit,
      OrderProgress
    },
    props: {
      orderList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      updateOrderList() {
        this.$emit('order-list');
      }
    }
  }
</script>

<style scoped>

</style>
