<template>
  <main>
    <div>
      <div class="top">
        <div class="block block_two">
          <div class="top_eyecatch">
            <img class="top_image" src="../assets/383637_s.jpg" alt="シクラメンハウス写真">
            <h2>人との絆が深まる<br>「キズナ」を繋ぐ花屋さん</h2>
            <h3 class="comp_title">有限会社 林園芸</h3>
          </div>
        </div>
        <div class="block block_three">
          <div class="summary">
            <h2>キズナで人と人を繋ぐ</h2>
            <div class="summary_block">
              <carousel :per-page="1" v-bind:autoplay="true" :autoplay-timeout="3000" :loop="true">
                <slide>
                  <div class="image_block">
                    <img src="../assets/1387663_s.jpg" alt="部屋の例">
                  </div>
                </slide>
                <slide>
                  <div class="image_block">
                    <img src="../assets/879429_s.jpg" alt="部屋の例2">
                  </div>
                </slide>
                <slide>
                  <div class="image_block">
                    <img src="../assets/3862787_s.jpg" alt="部屋の例2">
                  </div>
                </slide>
                <slide>
                  <div class="image_block">
                    <img src="../assets/2056956_s.jpg" alt="部屋の例2">
                  </div>
                </slide>
              </carousel>
              <div class="contents_block">
                <p class="first-text">花は見るだけでも嬉しい気持ちになります。もし、大切な人が笑顔になってくれたら・・・</p>
                <p class="second-text">という思いで、私たちはシクラメンを販売しています。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="block block_one"> -->
      <div class="test">
        <div class="sympathy_part">
          <h2>こんなご経験ありませんか？</h2>
          <div class="sympathy_block">
            <div class="sympathy_contents">
              <ul>
                <li>大切な人に感謝の気持ちを伝えたい</li>
                <li>特別な日に彩りを作りたい</li>
                <li>自宅に癒しが欲しい</li>
                <li>花をプレゼントしたい</li>
              </ul>
              <p class="prev_appeal">でもどんな花がいいんだろう・・・<br>そんな時におすすめの花が</p>
              <!-- <div class="formBalloon">
                <div class="formBalloonContent"></div>
                <div class="formBalloonArrow"></div>
              </div> -->
              <!-- <p>そんな時におすすめの花が</p> -->
              <p class="appeal">「シクラメン」</p>
            </div>
            <div class="sympathy_img">
              <img src="../assets/3936886_s.jpg" alt="共感部">
            </div>
          </div>
          <button onclick="location.href='https://shop.hayashiengei.com/'">
            オンラインショップを見てみる
          </button>
          <div class="delimiter"></div>
        </div>
      </div>
    </div>
    <div class="benefit_contents">
      <div class="content">
        <h2>選ばれる理由①</h2>
        <p class="sub_title">お手入れの心配なし</p>
        <div class="benefit_area">
          <div class="benefit_img">
            <img src="../assets/3011838_s.jpg" alt="ベネフィット">
          </div>
          <div class="benefit_content">
            <p class="content_description">お手入れは他のお花と比較しても簡単で、面倒な人にほど飾って欲しい！</p>
          </div>
        </div>
        <div class="delimiter"></div>
      </div>
      <div class="content">
        <h2>選ばれる理由②</h2>
        <p class="sub_title">空気を綺麗に！</p>
        <div class="benefit_area">
          <div class="benefit_img img_mobile">
            <img src="../assets/2331306_s.jpg" alt="ベネフィット">
          </div>
          <div class="benefit_content">
            <p class="content_description2">植物をお部屋に置くと空気清浄の効果があると言われています。置いておくだけで一石二鳥ですね！</p>
          </div>
          <div class="benefit_img2 img_pc">
            <img src="../assets/fulil_peach.jpg" alt="ベネフィット">
          </div>
        </div>
        <div class="delimiter"></div>
      </div>
      <div class="content">
        <h2>選ばれる理由③</h2>
        <p class="sub_title">癒しの効果あり</p>
        <div class="benefit_area">
          <div class="benefit_img">
            <img src="../assets/2105558_s.jpg" alt="ベネフィット">
          </div>
          <div class="benefit_content">
            <p class="content_description">鉢植えのお花なのでカゴに入れたりして雰囲気に合わせてアレンジ可能です！お花風水的にも良い運気が入ってきますよ！</p>
          </div>
        </div>
        <div class="delimiter"></div>
      </div>
    </div>
    <div class="feature_contents">
      <div class="flower_language">
        <h2>花言葉は「遠慮」と「気後れ」</h2>
        <h3>実はシクラメンの「色」の違いで<br>花言葉も変わります！</h3>
        <div class="flower_detail">
          <p>白いシクラメンは、「清純」</p>
          <p>ピンクのシクラメンは、「憧れ」と「内気」</p>
          <p>赤いシクラメンは、「嫉妬」</p>
        </div>
      </div>
      <div class="home_layout">
        <h2>これだけでもお部屋が華やかに！</h2>
        <img src="../assets/burano-1962852_640.jpg" alt="ベネフィット">
        <div class="delimiter"></div>
        <!-- スライドショー -->
      </div>
      <div class="problem_solving">
        <div class="problem_content">
          <p>とは言っても・・・</p>  
          <p>ネットで買うのは<br>不安だな・・・</p>
        </div>
        <div class="solution_area">
          <h3>その不安、しっかりケアします！</h3>
          <ol>
            <li>一人ひとりのお客様に合ったシクラメンを提供</li>
            <li>シクラメン専用の段ボール箱で発送</li>
            <li>万一不良品があっても代替品を発送！</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="lineup_area">
      <div class="lineup_title">
        <h2>ラインナップ</h2>
        <p>色に応じた商品をご準備しております。</p>
      </div>
      <div class="product_area">
        <div class="product">
          <div class="product_image">
            <img src="../assets/fulil_peach.jpg" alt="ベネフィット">
          </div>
          <div class="product_description">
            <p>名前：○○○○○○○</p>
            <p>販売価格：○○○円</p>
            <p>特徴：何か商品にこだわりあれば</p>
          </div>
        </div>
        <div class="product">
          <div class="product_image">
            <img src="../assets/fulil_peach.jpg" alt="ベネフィット">
          </div>
          <div class="product_description">
            <p>名前：○○○○○○○</p>
            <p>販売価格：○○○円</p>
            <p>特徴：何か商品にこだわりあれば</p>
          </div>
        </div>
        <div class="product">
          <div class="product_image">
            <img src="../assets/fulil_peach.jpg" alt="ベネフィット">
          </div>
          <div class="product_description">
            <p>名前：○○○○○○○</p>
            <p>販売価格：○○○円</p>
            <p>特徴：何か商品にこだわりあれば</p>
          </div>
        </div>
        <div class="product">
          <div class="product_image">
            <img src="../assets/fulil_peach.jpg" alt="ベネフィット">
          </div>
          <div class="product_description">
            <p>名前：○○○○○○○</p>
            <p>販売価格：○○○円</p>
            <p>特徴：何か商品にこだわりあれば</p>
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
    <div class="information">
      <h2>シクラメンお役立ち情報</h2>
      <div class="sns">
        <div class="info">
          <a href="https://lin.ee/25rISys" target="_blank" rel="noopener noreferrer">
            <img src="../assets/line.jpg" alt="line">
          </a>
          <p>公式ラインアカウントでは、シクラメンを長く楽しむワンポイントアドバイスなど役立つ情報を配信していきます。</p>
        </div>
        <div class="info">
          <a href="https://www.instagram.com/cyclamen_hayashi87/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/instagram.jpg" alt="instagram">
          </a>
          <p>シクラメンのギャラリーでは、これまでのシクラメンを覗いてみたい方</p>
        </div>
      </div>
    </div>
    <div class="contact">
      <h2>お問い合わせ</h2>
      <!-- <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <table class="contact_form">
          <tr>
            <th>名前</th>
            <td><input type=" text" name="namae" id="name1" placeholder="山田 太郎"></td>
          </tr>
          <tr>
            <th>メールアドレス</th>
            <td><input type=" text" name="email" id="mail" placeholder="taro@test.com"></td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td><input type=" text" name="tell" id="tell" placeholder="090-0000-0000"></td>
          </tr>
          <tr>
            <th>お問い合わせ内容</th>
            <td><textarea placeholder="お問合せ内容を記載ください"></textarea></td>
          </tr>
        </table>
        <button class="contact_submit" type="submit">送信</button>
      </form> -->
    </div>
    <!-- <P>テスト中コードなので気にしないでください</P> -->
    <!-- <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <label>お名前: <input type="text" name="name" /></label>
      <label>email: <input type="email" name="email" /></label>
      <label>内容:<textarea name="message"></textarea></label>
      <button type="submit">送信する</button>
    </form> -->
    <div class="company">
      <h2>会社情報</h2>
      <div class="company_detail">
        <div class="map_img">
          <img src="../assets/map.jpg" alt="map">
        </div>
        <div class="company_info">
          <h3>有限会社 林園芸</h3>
          <p>〒378-0066 群馬県沼田市原町８８番地</p>
          <p>(月夜野ICを降りて車で約2分)</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName]
      el.scrollIntoView({behavior: 'smooth'})
    }
  }
  
}
</script>

<style scoped>
  .block {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }



  .test {
    width: 100%;
    margin-bottom: 10%;
  }

  .block_two {
    z-index: 200;
  }
  .block_three {
    background-color: white;
    z-index: 200;
  }
  .top_eyecatch {
    position: relative;
    margin-bottom: 10%;
  }

  .top_image {
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  .top_eyecatch h2 {
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    background-color: rgba(255, 227, 227, 0.76);
    font-family: "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
    color: rgb(85, 84, 84);
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 25px;
    width: 75%;
    padding: 3% 0;

  }

  .comp_title {
    text-align: right;
    font-family: "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
    color: rgba(255, 20, 203, 1);
    padding: 3%;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .summary {
    width: 80%;
    margin: 0 auto;
  }

  .summary_block {
    margin: 0 auto;
  }

  .summary h2 {
    text-align: center;
    font-size: 1.8rem;
    padding: 3% 0 4% 0;
  }

  .summary img {
    width: 80%;
    display: block;
    margin: 3% auto 0;
  }

  .image_block {
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .first-text,
  .second-text {
    width: 100%;
    font-size: 1.0rem;
    margin-bottom: 5%;
  }

  .second-text {
    margin-bottom: 50px;
  }

  .sympathy_part {
    text-align: center;
  }

  .sympathy_part h2 {
    font-size: 1.6rem;
    color: #FF5757;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    margin-bottom: 40px;
  }

  .sympathy_part ul {
    text-align: left;
    font-weight: bold;
    width: 70%;
    margin: 0 auto 30px;

  }

  .sympathy_part li {
    list-style: square;
  }

  .sympathy_part p {
    text-align: center;
  }

  .sympathy_img img {
    width: 80%;
  }


  .appeal {
    color: red;
    font-size: 2rem;
    font-weight: bold;
    margin: 30px 0 20px;
  }

  .sympathy_part button {
    background-color: #FFDEDE;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 30px 0;
    font-weight: bold;
  }

  .sympathy_part button:hover {
    cursor: pointer;
    background-color: #ffa6a6;
    transition: 0.5s;
  }

  .delimiter {
    
    width: 70%;
    height: 5px;
    border: 1px solid #EBDBCC;
    border-radius: 10px;
    background-color: #EBDBCC;
    margin: 0 auto;
    
  }

  .benefit_contents {
    background-color: rgba(255, 221, 221, 0.38);
    margin: 30px 0 50px;
    text-align: center;
  }

  .benefit_content {
    text-align: left;
  }
  .img_pc {
    display: none;
  }

  .content {
    padding: 40px 0 20px;
  }

  .content h2 {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }

  .sub_title {
    font-size: 1.2rem;
    font-weight: bold;
    color: rgba(255, 52, 39, 1);
    margin: 20px 0;
  }

  .content img {
    width: 80%;
  }

  .content_description {
    font-size: 1.0rem;
    line-height: 30px;
    width: 80%;
    padding: 50px 0;
    margin: 0 auto;
  }

  .content_description2 {
    font-size: 1.0rem;
    line-height: 30px;
    width: 80%;
    padding: 50px 0;
    margin: 0 auto;
  }

  .flower_language {
    background-color: rgba(255, 167, 167, 0.4);
    margin: 50px 0;
    padding: 30px 0;
  }

  .flower_language h2 {
    font-size: 1.5rem;
    text-align: center;
    padding: 20px 0;
  }

  .flower_language h3 {
    text-align: center;
    padding: 20px 0;
  }

  .flower_detail {
    padding: 20px 0;
    text-align: center;
  }
  .flower_detail p {
    margin: 0 auto;
    margin-bottom: 15px;
    color: red;
  }

  .home_layout {
    font-size: 1.4rem;
    text-align: center;
    margin: 10px 0;
  }

  .home_layout img {
    width: 80%;
    margin: 40px 0;
  }

  .problem_content {
    margin: 50px 0;
  }

  .problem_content p {
    font-size: 1.3rem;
    text-align: center;
    margin: 20px 0;
    font-weight: bold;
  }

  .solution_area {
    border: 1px solid gray;
    border-radius: 10px;
    margin: 0 10%;
    position: relative;
    padding-bottom: 4%;
  }

  .solution_area h3 {
    font-size: 1.1rem;
    background-color: #FFD7D7;
    text-align: center;
    border: none;
    border-radius: 10px;
    width: 85%;
    padding: 10px 2%;
    margin: 0 auto 10px;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .solution_area ol {
    width: 60%;
    margin: 40px auto 0;
  }

  .solution_area li {
    margin: 10px 0;
  }

  .lineup_area {
    margin: 40px 0;
    background: rgba(173, 173, 173, 0.12);
  }

  .lineup_title {
    text-align: center;
    padding: 40px 0;
  }

  .lineup_title h2 {
    font-size: 1.6rem;
    padding-bottom: 25px;
  }

  .product_area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .product {
    width: 40%;
  }

  .product_image img {
    width: 90%;
    margin: 20px auto;
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

  .information {
    margin: 10%;
  }

  .information h2 {
    text-align: center; 
    font-size: 1.7rem;
    margin: 40px 0 30px;
  }

  .sns {
    display: flex;
    justify-content: space-around;
  }

  .info {
    padding: 10px;
    width: 40%;
    text-align: center;
  }

  .info img {
    width: 30%;
    margin: 10px 0 40px;
  }

  .info p {
    width: 80%;
    margin: 0 auto;
    text-align: left;
  }

  .contact {
    margin: 10% auto;
    width: 90%;
  }

  .contact h2 {
    font-size: 1.6rem;
    text-align: center;
    margin: 60px 0 30px;
  }


  .contact_form {
    border: 1px solid gray;
    border-bottom: none;
    margin: 0 auto;
    width: 70%;
  }


  .contact_form th,
  .contact_form td {
    display: block;
  }

  .contact_form th,
  .contact_form td {
    border-bottom: 1px solid gray;
    width: 100%;
  }

  .contact_form th {
    height: 40px;
    line-height: 40px;
    background-color: rgba(255, 211, 211, 1);
  }

  .contact_form input,
  .contact_form textarea {
    width: 93%;
    border: none;
    display: block;
    margin: 5px auto;
  }

  .contact_form input {
    height: 30px;
  }

  .contact_form textarea {
    height: 150px;
  }

  .contact_submit {
    font-size: 1.2rem;
    display: block;
    margin: 20px auto;
    background-color: #FFDEDE;
    border: none;
    border-radius: 10px;
    padding: 2% 5%;
  }

  .company {
    margin: 20px 0;
  }

  .company h2 {
    font-size: 1.6rem;
    text-align: center;
    margin: 30px 0;
  }
  .company_detail {
    display: flex;
    align-items: center;
  }

  .map_img {
    width: 60%;
    margin: 0 0 0 5%;
  }
  .map_img img {
    width: 90%;
  }

  .company_info {
    margin: 0 5%;
  }

  .company_info p {
    padding: 10px 0;
  }

  /* タブレット縦 /スマートフォン横 */
  @media screen and (min-width: 481px) {
    .top_eyecatch h2 {
      font-size: 1.7rem;
      width: 70%;
      line-height: 40px;
    }
    .comp_title {
      font-size: 1.8rem;
    }

    .sympathy_contents ul{
      width: 35%;
    }
  }

  /* デスクトップ/タブレット横 */
  @media screen and (min-width: 769px) {
    .top_eyecatch {
      width: 100%;
    }
    .top_eyecatch h2 {
      font-size: 1.8rem;
      width: 40%;
      top: 20%;
      line-height: 50px;

    }
    .top_image {
      width: 100%;
    }

    .comp_title {
      font-size: 1.8rem;
    }
    .image_block {
      width: 70%;
      margin: 0 auto;
    }

    .first-text,
    .second-text {
      text-align: center;
    }

    .sympathy_block {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 50px auto 30px;
    
    }

    .sympathy_contents {
      width: 70%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .sympathy_contents li {
      padding: 10px 0;
    }

    .sympathy_img  {
      width: 80%;
      margin-right: 2%;
    }
    .sympathy_part button {
      padding: 20px 30px;
    }
    
    .prev_appeal {
      font-size: 1.3rem;
      line-height: 50px;
    }

    .appeal {
      font-size: 2.5rem;
    }

    .benefit_area {
      display: flex;
      align-items: center;
      margin: 40px 0;
    }

    .benefit_img {
      width: 50%;
      margin: 0 1% 0 5%;
    }
    .benefit_img2 {
      width: 50%;
      margin: 0 5% 0;
    }
    .content_description2 {
      font-size: 1.0rem;
      line-height: 30px;
      width: 80%;
      padding: 50px 0;
      margin: 0 1% 0 20%;
    }

    .img_mobile {
      display: none;
    }

    .img_pc {
      display: block;
    }

    .benefit_contents {
      padding-bottom: 40px;
    }
    .benefit_content {
      width: 40%;
    }

    .flower_detail {
      width: 100%;
      text-align: center;
    }
    

    .flower_detail p {
      padding: 15px 0;
      color: rgb(235, 44, 44);
      font-size: 1.5rem;
    }

    .home_layout img {
      width: 50%;
      margin: 40px 0;
    }

    .solution_area {
      margin: 0 20%;
      padding-bottom: 2%;
    }
    .solution_area ol {
      width: 60%;   
      text-align: center;
    }
    
    .solution_area li {
      padding: 10px 0;
    }
    .solution_area h3 {
      padding: 10px 0;
      width: 55%;
    }
    
    .shipping {
      width: 60%;
    }

    .shipping th,
    .shipping td {
      padding: 15px 0;
    }
    
    .shipping_info p {
      text-align: center;
    }

    .cta_area button {
      padding: 20px 30px;
    }
    .contact_form {
      width: 50%;
    }

    .map_img {
      width: 50%;
      margin: 0 0 0 5%;
    }

    .map_img img {
      width: 80%;
    }

    .company_info {
      font-size: 1.5rem;
    }

    .company_info h3 {
      margin: 0 0 50px;
    }

    .delimiter {
      width: 90%;

    }

  }
</style>