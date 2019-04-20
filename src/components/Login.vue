<template>
  <div class="login">
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="80px">
      <img src="../assets/avatar.jpg" alt="">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" >
         <el-input v-model="form.password" type="password"></el-input>
       </el-form-item>
     <el-form-item>
        <el-button  type="primary"  @click="login('form')" >登录</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 9, message: "用户名在 3 到 9 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 9, message: "密码在 3 到 9 个字符", trigger: "blur" }
          
        ]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 发送ajax请求
          let res = await this.axios.post('login', this.form
          );
          const {data, meta}=res.data
         if(meta.status===200){
           this.$message({message:'登录成功', type:'success'})
           localStorage.setItem('token',data.token)
           this.$router.push('/home')
         } else {
         this.$message({message:'登录失败', type:'warning'})
          return false;
         }
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang='less' scoped>
.login {
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    margin: 200px auto;
    padding: 75px 40px 15px 40px;
    position: relative;
    img {
      position: absolute;
      top: -80px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      border: 10px solid #fff;
    }
  }
}
</style>
