<template>
  <div class="page">
    <div class="pdf">
      <div class="show">
        <pdf ref="pdf" :src="pdfUrl" :page="pageNum" :rotate="pageRotate" @password="password"
          @progress="loadedRatio = $event" @page-loaded="pageLoaded($event)" @num-pages="pageTotalNum = $event"
          @error="pdfError($event)" @link-clicked="page = $event">
        </pdf>
      </div>

      <div class="pdf_footer">
        <div class="info">
          <div>当前页数/总页数: {{ pageNum }}/{{ pageTotalNum }}</div>
          <div>进度: {{ loadedRatio }}</div>
        </div>
        <div class="operate">
          <div class="btn" @click.stop="prePage">上一页</div>
          <div class="btn" @click.stop="nextPage">下一页</div>
          <div class="btn" @click="scaleD">放大</div>
          <div class="btn" @click="scaleX">缩小</div>
          <div class="btn" @click="fileDownload(pdfUrl, 'pdf文件')">下载</div>
        </div>
      </div>
    </div>


    <div class="answer-card">
      <h3>答题卡</h3>
      <el-form ref="form" label-width="30px">

        <el-form-item label="1.">
          <el-radio-group v-model="form.radio1">
            <el-radio label="A">A</el-radio>
            <el-radio label="B">B</el-radio>
            <el-radio label="C">C</el-radio>
            <el-radio label="D">D</el-radio>
          </el-radio-group>
        </el-form-item>


        <el-form-item label="2.">
          <el-radio-group v-model="form.radio2">
            <el-radio label="A">A</el-radio>
            <el-radio label="B">B</el-radio>
            <el-radio label="C">C</el-radio>
            <el-radio label="D">D</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="3.">
          <el-radio-group v-model="form.radio3">
            <el-radio label="A">A</el-radio>
            <el-radio label="B">B</el-radio>
            <el-radio label="C">C</el-radio>
            <el-radio label="D">D</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="4.">
          <el-input v-model="form.blank1"></el-input>
        </el-form-item>

        <el-form-item label="5.">
          <el-input v-model="form.blank2"></el-input>
        </el-form-item>

        <el-form-item label="6.">
          <el-input type="textarea" v-model="form.blank3"></el-input>
        </el-form-item>


        <el-button type="primary" @click="onSubmit" style="width: 50%;margin-left: 50%;transform: translateX(-50%);">提交</el-button>

      </el-form>
    </div>
  </div>
</template>


<script>
/* eslint-disable */
import pdf from "vue-pdf";
export default {
  name: "vue_pdf_preview",
  props: {
    // 当前pdf路径
    pdfUrl: {
      type: String,
      default:
        "https://pan.uvooc.com/d/Learn/CET/CET6/2016%E5%B9%B4-2020%E5%B9%B4%E8%8B%B1%E8%AF%AD%E5%85%AD%E7%BA%A7%E7%9C%9F%E9%A2%98%E5%8F%8A%E8%A7%A3%E6%9E%90/2016%E5%B9%B406%E6%9C%88%E5%A4%A7%E5%AD%A6%E8%8B%B1%E8%AF%AD6%E7%BA%A7%E7%9C%9F%E9%A2%98%E5%8F%8A%E8%A7%A3%E6%9E%90%EF%BC%88%E5%8D%B7%E4%B8%80%EF%BC%89.pdf?sign=KftQyeEFwfHsT9jSOEi-59Uha_6UCvIbq9heDy658_w=:1685897954",
    },
  },
  components: {
    pdf,
  },
  data() {
    return {
      form: {
        radio1: '',
        radio2: '',
        radio3: '',
        blank1: '',
        blank2: '',
        blank3: '',
      },
      // 总页数
      pageTotalNum: 1,
      // 当前页数
      pageNum: 1,
      // 加载进度
      loadedRatio: 0,
      // 页面加载完成
      curPageNum: 0,
      // 放大系数 默认百分百
      scale: 100,
      // 旋转角度 ‘90’的倍数才有效
      pageRotate: 0,
      // 单击内部链接时触发 (目前我没有遇到使用场景)
      page: 0,
    };
  },
  watch: {},
  computed: {},
  created() { },
  mounted() { },
  methods: {
    //下载PDF
    fileDownload(data, fileName) {
      let blob = new Blob([data], {
        //type类型后端返回来的数据中会有，根据自己实际进行修改
        type: "application/pdf;charset-UTF-8",
      });
      let filename = fileName || "pdf.pdf";
      if (typeof window.navigator.msSaveBlob !== "undefined") {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        var blobURL = window.URL.createObjectURL(blob);
        // 创建隐藏<a>标签进行下载
        var tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = blobURL;
        tempLink.setAttribute("download", filename);
        if (typeof tempLink.download === "undefined") {
          tempLink.setAttribute("target", "_blank");
        }
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
      }
    },

    //放大
    scaleD() {
      this.scale += 5;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    //缩小
    scaleX() {
      // scale 是百分百展示 不建议缩放
      if (this.scale == 100) {
        return;
      }
      this.scale += -5;
      console.log(parseInt(this.scale) + "%");
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    // 切换上一页
    prePage() {
      var p = this.pageNum;
      p = p > 1 ? p - 1 : this.pageTotalNum;
      this.pageNum = p;
    },
    // 切换下一页
    nextPage() {
      var p = this.pageNum;
      p = p < this.pageTotalNum ? p + 1 : 1;
      this.pageNum = p;
    },
    // pdf 有密码 则需要输入秘密
    password(updatePassword, reason) {
      updatePassword(prompt('password is "test"'));
      console.log("...reason...");
      console.log(reason);
      console.log("...reason...");
    },
    // 页面加载成功  当前页数
    pageLoaded(e) {
      this.$emit("current", e);
      this.curPageNum = e;
    },
    // 异常监听
    pdfError(error) {
      console.error(error);
    },
    // 获取当前页面pdf的文字信息内容
    logContent() {
      this.$refs.pdf.pdf.forEachPage(function (page) {
        return page.getTextContent().then(function (content) {
          let text = content.items.map((item) => item.str);
          let allStr = content.items.reduce(
            (initVal, item) => (initVal += item.str),
            ""
          );
          console.log(allStr); // 内容字符串
          console.log(text); // 内容数组
        });
      });
    },
    onSubmit(){
      console.log("提交个P!");
    },
  },
};
</script>

<style>
body {
  overflow: hidden;

}
.page{
  width: 100%;
  height: 100%;
  display: flex;
}
.answer-card {
  width: 20%;
  height: 500px;
  overflow: auto;
  z-index: 999;
  margin-top: 80px;

  margin-right: 30px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px hsla(0, 0%, 100%, 0.941);
  border: 0.5px solid #a4a1a1;
  /* 添加边框 */
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}


.pdf {
  z-index: 1;
  overflow: hidden;
  padding: 20px;
  height: 100%;
  width: 80%;
}

.pdf .show {
  overflow: auto;
  max-width: 100%;
  height: 80vh;
  /* max-height: 530px; */
}

.pdf ::-webkit-scrollbar {
  width: 0px;
}

.pdf .show ::-webkit-scrollbar {
  width: 0px;
}


.pdf .pdf_footer {
  position: absolute;
  bottom: 0;
  margin-left: 35%;
  margin-bottom: 10px;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.5);
}

.pdf .pdf_footer .info {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

.pdf .pdf_footer .info div {
  width: 30%;
}

.pdf .pdf_footer .operate {
  margin: 10px 0 0;
  display: flex;
  flex-wrap: wrap;
}

.pdf .pdf_footer .operate div {
  /* width: 80px; */
  text-align: center;
  font-size: 15px;
}

.pdf .pdf_footer .operate .btn {
  cursor: pointer;
  margin: 5px 10px;
  width: 120px;
  border-radius: 10px;
  padding: 5px;
  color: #fff;
  background-color: #3dcbbc;
}
</style>

