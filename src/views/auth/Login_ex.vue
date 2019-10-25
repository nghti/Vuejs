<template>
  <div class="main">
    <div class="logo">
      <img @click="doThis" src="../../assets/images/logo.png" alt="">
      <p>{{nameChange}}</p>
    </div>

    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      @submit.prevent="handleSubmit"
    >
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="メールアドレス / ニックネーム"
          v-decorator="[
                'username',
                {rules: [{ required: true, message:'メールアドレスを入力してください。' }], validateTrigger: 'change'}
              ]"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          type="password"
          autocomplete="false"
          placeholder="パスワード"
          v-decorator="[
                'password',
                {rules: [{ required: true, message: 'パスワードを入力してください。' }], validateTrigger: 'change'}
              ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
        >ログイン
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nameLogo: 'DMM Auto 管理画面へログインしてください'
      }
    },
    created () {
      console.log('log create', document.getElementsByClassName('main')[0])
    },
    mounted () {
      console.log('log mounted', document.getElementsByClassName('main')[0])
    },
    computed: {
      // một computed getter
      nameChange () {
        return this.nameLogo.split('').reverse().join('')
      }
    },
    watch: {
      nameChange () {
        console.log('change')
      }
    },
    methods: {
      doThis () {
        this.nameLogo = 'New name'
      },
      handleSubmit () {
        console.log('haha')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    margin: 0 auto;
    text-align: center;

    img {
      height: 115px;
    }

    p {
      color: #95A7B7;
      font-size: 18px;
    }
  }

  .main {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(../../assets/images/background.svg) no-repeat 50%;
    background-size: 100%;
    padding: 110px 0 144px;
    position: relative;
  }

  .user-layout-login {
    margin: 0 auto;
    width: 350px;

    label {
      font-size: 14px;
    }

    button.login-button {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }
  }
</style>
