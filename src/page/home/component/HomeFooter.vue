<template>
<transition>
   <div class="Homefooter">
       <div class="HomefooterL">
           <p>Contact Us</p>
           <p>地址:浙江省杭州市蓝都科创园</p>
           <p>0571-5656-7488</p>
           <p>0571-5656-7488</p>
           <p>邮箱:kefu@yuwei.com</p>
       </div>
       <div class="HomefooterR">
          <form @submit.prevent="submit" action="https://vuejs.org/" method="post" >
<div class="formPackage">
      <div class="formPackageA" :class="{ 'form-group--error': $v.user.name.$error }">
    <input  @blur="$v.user.name.$touch()" class="input-line" v-model.trim="$v.user.name.$model"
    placeholder="请填写客户名*"/>
  <div class="formDiv form-group__message" v-if="!$v.user.name.required">客户名是必须的</div>
  <div class="formDiv error form-group__message" v-if="!$v.user.name.nameZn"> 客户名格式错误</div>
  </div>

<div class="formPackageA" :class="{ 'form-group--error': $v.user.phone.$error }">
    <input v-model.trim="$v.user.phone.$model" 
           @blur="$v.user.phone.$touch()" class="input-line" 
           placeholder="请填写您的联系方式*">
    <div class="formDiv form-group__message" v-if="!$v.user.phone.required">手机号码不能为空</div>
    <div class="formDiv form-group__message" v-if="!$v.user.phone.phone">请输入正确的手机号码</div>
</div>
<div class="formPackageA" :class="{ 'form-group--error': $v.user.classmate.$error }">
    <input v-model.trim="$v.user.classmate.$model" 
           @blur="$v.user.classmate.$touch()" class="input-line" 
           placeholder="请填写咨询课程*">
    <div class="formDiv form-group__message" v-if="!$v.user.classmate.required">不能为空</div>
</div>
</div>
<div :class="{ 'form-group--error': $v.user.textContent.$error }">
    <textarea v-model.trim="$v.user.textContent.$model" @blur="$v.user.textContent.$touch()"  name="" id="" cols="30" rows="10" placeholder="您有什么想说的或者困惑的告诉我们，我们为您解答"></textarea>
  <div class="formDiv form-group__message" v-if="!$v.user.textContent.required">不能为空</div>
</div>
  <p class="BtnSubmit">
    <button :disabled="user.submitStatus === 'PENDING'" class="submitIn" type="submit" value="Submit">提交</button>
  </p>
  <p class="typo__p" v-if="user.submitStatus === 'OK'">感谢您的留言,我们会尽快联系您</p>
    <p class="typo__p" v-if="user.submitStatus === 'ERROR'">请正确填写您的信息</p>
    <p class="typo__p" v-if="user.submitStatus === 'PENDING'">Sending...</p>
          </form>
       </div>
       <div class="HomefooterB">
           
       </div>
   </div>
</transition>
</template>
<script>
import { required, maxLength, sameAs } from 'vuelidate/lib/validators'
import { regex } from 'vuelidate/lib/validators/common'
var phone = regex('phoneNumber', /^1(3|4|5|7|8)\d{9}$/) // 手机号码校验
var nameZN = regex('username', /^[a-zA-Z0-9_]{3,16}$/ ) // 用户名校验
export default {
    data () {
        return {
            user: {
                name: '',
                phone: '',
                classmate: '',
                textContent:'',
                submitStatus: null
            }
        }
    },
    // 2.定义验证字段的规则
    validations: {
        user: {
            phone: {
                required,
                phone  // 直接就是用的上面const设置的校验规则，自定义校验
            },
            name: {
            required,
            nameZN
            },
            classmate:{
                required
            },
            textContent:{
                required
            }

        }
    },
    methods:{
        setName(value){
            this.user.name = value
            this.$v.user.name.$touch()
        },
        submit(){
      console.log('submit!')
      this.$v.user.$touch()
      if (this.$v.$invalid) {
        this.user.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.user.submitStatus = 'PENDING'
        setTimeout(() => {
          this.user.submitStatus = 'OK'
        }, 500)
      }
        }
    }
}

</script>
<style lang="stylus" scoped>

</style>