<template>
  <header>
    <div class="header-title">
      <h1>Hayashi-engei</h1>
    </div>
    <!-- thanksページではナビゲーション非表示 -->
    <div class="dummy" v-if="senddata">
    </div>
    <div class="header-nav" v-else>
      <ul class="flex_content">
        <li><a v-scroll-to="'.summary'">当社のシクラメン</a></li>
        <li><a v-scroll-to="'.benefit_contents'">選ばれる理由</a></li>
        <li><a v-scroll-to="'.lineup_area'">ラインナップ</a></li>
        <li><a v-scroll-to="'.information'">お役立ち情報</a></li>
        <li><a v-scroll-to="'.contact'">お問い合わせ</a></li>
      </ul>
    </div>
    <!-- thanksページではナビゲーション非表示 -->
    <div class="dummy" v-if="senddata">
    </div>
    <div class="hamburger" @click="humberger()" :class="{'active':isClass}" v-else>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="menu-content" :class="{'open':isClass}">
      <p class="menu-title">Hayashi-engei</p>
      <ul class="menu-content_inner">
        <li>
          <a v-scroll-to="'.summary'">当社のシクラメン</a>
        </li>
        <li>
          <a v-scroll-to="'.benefit_contents'">選ばれる理由</a>
        </li>
        <li>
          <a v-scroll-to="'.lineup_area'">ラインナップ</a>
        </li>
        <li>
          <a v-scroll-to="'.information'">お役立ち情報</a>
        </li>
        <li>
          <a v-scroll-to="'.contact'">お問い合わせ</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["senddata"],
  data() {
    return {
      isClass: false,
      testBlock: "contact",
    };
  },
  methods: {
    humberger() {
      this.isClass = !this.isClass
    }
  }
}
</script>

<style scoped>
.block {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: fixed;
  top: 0;
}


header {
  background-color: rgba(255, 211, 211, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 300;
}


.header-title {
  font-size: 1.8rem;
  padding: 20px 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 5%;
  text-align: center;
  width: 93%;
}

.header-nav {
  display: none;
}

.hamburger {
  height: 40px;
  width: 6%;
  position: relative;
  margin-right: 5%;
}

.hamburger span {
  height: 2px;
  width: 100%;
  background-color: black;
  position: absolute;
  border-radius: 10px;
}

.hamburger span:nth-of-type(1) {
  top: 10px;
}
.hamburger span:nth-of-type(2) {
  top: 20px;
}
.hamburger span:nth-of-type(3) {
  top: 30px;
}

.hamburger.active span:nth-of-type(1) {
  top: 20px;
  transform: rotate(45deg);
}

.hamburger.active span:nth-of-type(2) {
  opacity: 0;
}
.hamburger.active span:nth-of-type(3) {
  top: 20px;
  transform: rotate(-45deg);
}

.menu-content {
  display: block;
  width: calc(100% - 80px);
  height: 100%;
  text-align: center;
  transition: 0.2s;
  position: fixed;
  top: 0;
  left: calc(-100% - 80px);
  /* right: calc(-100% - 80px); */
  background-color: #FFF1F1;
  color: #333333;
  box-shadow: 80px 0 rgba(255, 159, 159, 0.3);
  z-index: 999;
}

.menu-content .menu-title {
  margin: 40px 20px;
  font-size: 1.8rem;
  color: #333333;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-weight: bold;
}
.menu-content li a {
  color: #333333;
  margin: 15px;
  padding: 5px;
  border-bottom: 0.5px solid rgba(255, 211, 211, 1);
  text-decoration: none;
  display: block;
}
.menu-content li {
  width: 100%;
  text-align: left;
}
.menu-content.open {
  left: 0;
}


/* タブレット縦 /スマートフォン横 */
@media screen and (min-width: 481px) {

}

/* デスクトップ/タブレット横 */
@media screen and (min-width: 769px) {
  .hamburger {
    display: none;
  }

  .header-title {
    width: 40%;
    text-align: left;
  }
  .header-nav {
    width: 70%;
    font-size: 1.0rem;
    display: block;
  }

  .flex_content {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 0 auto;
  }
  .flex_content li {
    padding: 0 1%;
  }

  .flex_content a:hover {
    cursor: pointer;
  }
}
</style>