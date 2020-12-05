<template>
  <div class="about">
    <!-- ナビゲーション非表示 -->
    <Header :senddata="flag"></Header>
    <div class="thanks">
      <p>お問い合わせ<br class="smp">ありがとうございました！</p>
      <router-link to="/">
        <button>topページへ戻る</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  data() {
    return {
      flag: true
    }
  },
  components: {
    Header,
  }
}
</script>

<style scoped>
.thanks {
  margin-top: -40px;
  width: 100vw;
  height: 100vh;
}

.thanks p {
  padding: 50% 0 20%;
  text-align: center;
  font-size: 1.5rem;
}

.thanks button {
  display: block;
  margin: 0 auto;
  padding: 10px 5%;
  background-color: #FFDEDE;
  border: none;
  border-radius: 10px;
  font-weight: bold;
}

.header-nav,
.hamburger,
.menu-content {
  display: none;
}

@media screen and (min-width: 769px) {
  .thanks p {
    padding: 20% 0;
  }
  .smp {
    display: none;
  }
}
</style>
