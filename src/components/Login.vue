<template>
<div class="login">
    <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="demo-form">
      <img src="../assets/avatar.jpg" alt="">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="submitForm('form')">登录</el-button>
    <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          name: '',
          password: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang='less' scoped>
.login{
  height: 100%;
  background-color: #2D434C;
  overflow: hidden;
  .el-form{
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    margin:200px auto;
    padding: 75px 40px 15px 40px;
    position: relative;
    img{
    position: absolute;
    top:-80px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    border:10px solid #fff
    }
  }
}
</style>
