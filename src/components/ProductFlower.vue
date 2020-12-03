<template>
  <div class="lineup_area">
    <div class="lineup_title">
      <h2>ラインナップ</h2>
      <h3>色に応じた商品をご準備しております。</h3>
      <h4><a v-scroll-to="'.cta_area'">↓その他商品については、オンラインショップにて↓</a></h4>
    </div>
    <div class="koromo_description">
      <h2 class="koromo">新登場！色衣シリーズ</h2>
      <p>新しい花型の希少なシクラメン。</p>
      <p>八重咲きの花びらは花もちがよく、<br>長期間楽しむことが出来ます。</p>
    </div>
    <div class="product_area">
      <div class="product">
        <div class="product_image">
          <img v-lazy="require('../assets/koromo_4.jpg')" alt="ころもシリーズ">
        </div>
        <div class="product_description">
          <p>藤色衣</p>
          <p>販売価格：¥3,800</p>
        </div>
      </div>
      <div class="product">
        <div class="product_image">
          <img v-lazy="require('../assets/koromo_3.jpg')" alt="ころもシリーズ">
        </div>
        <div class="product_description">
          <p>綿色衣</p>
          <p>販売価格：¥3,800</p>
        </div>
      </div>
      <div class="product">
        <div class="product_image">
          <img v-lazy="require('../assets/koromo_1.jpg')" alt="ころもシリーズ">
        </div>
        <div class="product_description">
          <p>花色衣</p>
          <p>販売価格：¥3,800</p>
        </div>
      </div>
      <div class="product">
        <div class="product_image">
          <img v-lazy="require('../assets/koromo_2.jpg')" alt="ころもシリーズ">
        </div>
        <div class="product_description">
          <p>鴇色衣</p>
          <p>販売価格：¥3,800</p>
        </div>
      </div>
    </div>
    <div class="koromo_description">
      <h2 class="koromo">ミユキシリーズ</h2>
      <p>林園芸オリジナル</p>
      <p>最大の特徴は、ねじれの少ない<br>丸みを帯びた可愛らしい花。</p>
    </div>
    <div class="product_area">
      <div class="product">
        <div class="product_image">
          <img v-lazy="require('../assets/miyuki_1.jpg')" alt="ミユキシリーズ">
        </div>
        <div class="product_description">
          <p>スカーレット</p>
          <p>販売価格：¥3,000</p>
        </div>
      </div>
      <div class="product">
        <div class="product_image">
          <img v-lazy="require('../assets/miyuki_2.jpg')" alt="ミユキシリーズ">
        </div>
        <div class="product_description">
          <p>ブラームス</p>
          <p>販売価格：¥3,000</p>
        </div>
      </div>
      <div class="product">
        <div class="product_image">
          <img v-lazy="require('../assets/miyuki_3.jpg')" alt="ミユキシリーズ">
        </div>
        <div class="product_description">
          <p>ローズ</p>
          <p>販売価格：¥3,000</p>
        </div>
      </div>
      <div class="product">
        <div class="product_image">
          <img v-lazy="require('../assets/miyuki_4.jpg')" alt="ミユキシリーズ">
        </div>
        <div class="product_description">
          <p>ライトピンク</p>
          <p>販売価格：¥3,000</p>
        </div>
      </div>
    </div>
    <div class="shipping_info">
      <h2 class="shipping_title">送料(代表地域)</h2>
      <table class="shipping">
        <tr>
          <th>北海道</th>
          <td>¥1,190</td>
        </tr>
        <tr>
          <th>東京</th>
          <td>¥860</td>
        </tr>
        <tr>
          <th>大阪</th>
          <td>¥960</td>
        </tr>
        <tr>
          <th>広島</th>
          <td>¥1,040</td>
        </tr>
        <tr>
          <th>愛媛</th>
          <td>¥1,040</td>
        </tr>
        <tr>
          <th>福岡</th>
          <td>¥1,190</td>
        </tr>
        <tr>
          <th>沖縄</th>
          <td>¥1,380</td>
        </tr>
      </table>
      <p>※その他都道府県は、ショップでご確認頂けます。</p>
    </div>
    <div class="cta_area">
      <p>オンラインショップで販売中！</p>
      <button onclick="location.href='https://shop.hayashiengei.com/'">シクラメンオンラインショップ</button>
    </div>
  </div>
</template>


<script>
export default {
  
}
</script>

<style scoped>
  .lineup_area {
    margin: 40px 0;
    background: rgba(173, 173, 173, 0.12);
  }

  .lineup_title {
    text-align: center;
    padding: 40px 0 20px;
  }

  .lineup_title h2 {
    font-size: 1.6rem;
    padding-bottom: 25px;
  }

  .lineup_title h4 {
    margin: 20px 0;
  }

  .koromo {
    color: red;
    font-size: 1.4rem;
    padding: 50px 0 20px;
    font-weight: bold;
  }
  .koromo_description {
    margin: 0 10% 3%;
    line-height: 30px;
    text-align: center;
    padding: 20px 0 20px;
  }


  .product_area {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .product {
    width: 40%;
  }

  .product_image {
    text-align: center;
  }

  .product_image img {
    width: 90%;
    margin: 20px auto;
  }

  .product_description {
    width: 90%;
    font-size: 0.9rem;
    margin: 0 auto;
    line-height: 40px;
  }

  .shipping_title {
    margin: 50px 0 30px;
    text-align: center;
    font-size: 1.6rem;
  }

  .shipping {
    margin: 30px auto 10px;
    width: 70%;
  }

  .shipping tr {
    border: 1px solid gray;
  }

  .shipping th {
    border-right: 1px solid gray;
    background-color: #ffeeee;
  }

  .shipping th,
  .shipping td {
    padding: 10px 20px;
    text-align: center;
  }

  .shipping_info p {
    width: 70%;
    margin: 0 auto;
  }

  .cta_area {
    text-align: center;
    margin: 20px;
    padding-bottom: 20px;
  }

  .cta_area p {
    padding: 20px;
    font-size: 1.2rem;
    color: red;
    text-decoration:  underline;
    font-weight: bold;
  }

  .cta_area button {
    background-color: #FFDEDE;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 30px 0 10px;
    font-weight: bold;
  }

  .cta_area button:hover {
    cursor: pointer;
    background-color: #ffa6a6;
    transition: 0.5s;
  }

/* タブレット縦 /スマートフォン横 */
@media screen and (min-width: 481px) {

}

/* デスクトップ/タブレット横 */
@media screen and (min-width: 769px) {
  .lineup_area p {
    font-size: 1.3rem;
  }
  .product_image img {
    width: 70%;
    margin: 20px auto;
  }
  
  .lineup_title h2 {
    font-size: 2rem;
  }
  .lineup_title h3,
  .lineup_title h4 {
    font-size: 1.4rem;
    padding-bottom: 10px;
  }

  .lineup_title h4:hover{
    color: rgb(253, 146, 164);
    cursor: pointer;
    transition: 0.5s;

  }
  .product_description {
    width: 70%;
    font-size: 1.2rem;
    margin: 0 auto;
    line-height: 40px;
  }

  .koromo {
    font-size: 1.8rem;
  }

  .koromo_description {
    line-height: 50px;
  }

  .koromo_description br {
    display: none;
  }
  
  .shipping {
    width: 60%;
  }

  .shipping th,
  .shipping td {
    padding: 15px 0;
  }

  .shipping_title {
    font-size: 2rem;
  }
  
  .shipping_info p {
    text-align: center;
  }

  .cta_area button {
    padding: 20px 30px;
    font-size: 1.4rem;
    color: rgb(34, 34, 34);
  }
}
</style>