<template>
  <div class="home">
    <Header></Header>
    <main>
      <div>
        <div class="top">
          <div class="block block_two">
            <div class="top_eyecatch">
              <img class="top_image" src="../assets/383637_s.jpg" alt="トップ画像">
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
                      <img src="../assets/302624_s.jpg" alt="部屋の例2">
                    </div>
                  </slide>
                  <slide>
                    <div class="image_block">
                      <img src="../assets/879429_s.jpg" alt="部屋の例3">
                    </div>
                  </slide>
                  <slide>
                    <div class="image_block">
                      <img src="../assets/3862787_s.jpg" alt="部屋の例4">
                    </div>
                  </slide>
                  <slide>
                    <div class="image_block">
                      <img src="../assets/2056956_s.jpg" alt="部屋の例5">
                    </div>
                  </slide>
                </carousel>
                <div class="contents_block">
                  <p class="first-text">シクラメンは冬から春にかけて次から次へと花を咲かせる鉢花です。</p>
                  <p class="second-text">インテリアとしてお部屋に飾ったり、大切な方へプレゼントしたり。</p>
                  <p class="second-text">日々の生活に彩りをプラスしてみませんか?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="test">
          <div class="sympathy_part">
            <h2>こんなご経験ありませんか？</h2>
            <div class="sympathy_block">
              <div class="sympathy_contents">
                <div class="ul_list">
                  <ul>
                    <li>お手入れの方法がよくわからない</li>
                    <li>お部屋に花を飾りたいと思ったけど、どれがいいのかわからない</li>
                    <li>お部屋の空気をきれいに保ちたい</li>
                    <li>インターネットでお買い物したいと思っているが、きちんと届くか不安</li>
                  </ul>
                </div>
                <p class="prev_appeal">でもどんな花がいいんだろう・・・<br>⇨そんな時におすすめの花が</p>
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
          <div class="smp_benefit">
            <h2>選ばれる理由①</h2>
            <p class="sub_title">お手入れが簡単!育てる楽しみも!</p>
          </div>
          <div class="benefit_area">
            <div class="benefit_img">
              <img v-lazy="require('../assets/3011838_s.jpg')" alt="ベネフィット">
            </div>
            <div class="benefit_content">
              <div class="pc_benefit">
                <h2>選ばれる理由①</h2>
                <p class="sub_title">お手入れが簡単!育てる楽しみも!</p>
              </div>
              <p class="content_description">シクラメンは毎日お世話をする必要はなく、週に2、3回水をあげれば大丈夫。長持ちするので可愛がってあげれば、来年も花を咲かせますよ。上手に育てる方法などの詳細は公式アカウントで配信しております。</p>
            </div>
          </div>
          <div class="delimiter"></div>
        </div>
        <div class="content">
          <div class="smp_benefit">
            <h2>選ばれる理由②</h2>
            <p class="sub_title">1人1人に合ったシクラメンを!</p>
          </div>
          <div class="benefit_area">
            <div class="benefit_img img_mobile">
              <img v-lazy="require('../assets/2331306_s.jpg')" alt="ベネフィット">
            </div>
            <div class="benefit_content">
              <div class="pc_benefit_2">
                <h2>選ばれる理由②</h2>
                <p class="sub_title">1人1人に合ったシクラメンを!</p>
              </div>
              <p class="content_description2">当園はオンラインショップもございますが、掲載されていないシクラメンも多数ございます。大きさや花の色味など迷った時はお問い合わせフォームよりお気軽にご連絡ください。お客様に合った1鉢を一緒に考えさせてただきます!</p>
            </div>
            <div class="benefit_img2 img_pc">
              <img v-lazy="require('../assets/fulil_peach.jpg')" alt="ベネフィット">
            </div>
          </div>
          <div class="delimiter"></div>
        </div>
        <div class="content">
          <div class="smp_benefit">
            <h2>選ばれる理由③</h2>
            <p class="sub_title">癒し効果あり!</p>
          </div>
          <div class="benefit_area">
            <div class="benefit_img">
              <img v-lazy="require('../assets/2105558_s.jpg')" alt="ベネフィット">
            </div>
            <div class="benefit_content">
              <div class="pc_benefit">
                <h2>選ばれる理由③</h2>
                <p class="sub_title">癒し効果あり!</p>
              </div>
              <p class="content_description">お部屋に植物を置くことで湿度を保つことができ、風邪対策にもgood! さらに、空気をきれいにしてくれる効果も期待できます。 素敵なシクラメンで心も体もリラックス〜!</p>
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
        </div>
        <div class="problem_solving">
          <div class="problem_content">
            <p>とは言っても・・・</p>  
            <p>ネットで買うのは不安だな・・・</p>
          </div>
          <div class="solution_area">
            <h3>その不安、しっかりケアします！</h3>
            <ol>
              <li>一人ひとりのお客様に合ったシクラメンを提供</li>
              <li>シクラメン専用の段ボール箱で発送いたします！</li>
              <li>万一不良品があっても代替品を発送いたします！</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="company_feature">
        <h2>当社のこだわり</h2>
        <p>当園では豊富な知識と経験から、ここにしかないオリジナルの品種を日々開発しています。</p>
        <img v-lazy="require('../assets/house.jpg')" alt="ころもシリーズ">
      </div>
      <ProductFlower />
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
        <p>※下記の項目をご入力ください</p>
        <form name="contact2" @submit.prevent="onSubmit">
          <input type="hidden" name="form-name" value="contact2" />
          <div>
            <label for="name">
              <span>*</span>
              お名前
            </label>
            <input type="text" id="name" name="name" placeholder="山田太郎" v-model="name" required />
          </div>
          <div>
            <label for="mail">
              <span>*</span>
              メールアドレス
            </label>
            <input type="email" id="mail" name="email" placeholder="sample@sample.com" v-model="email" required />
          </div>
          <div>
            <label for="msg">
              <span>*</span>
              お問い合わせ内容
            </label>
            <textarea id="msg" name="message" placeholder="お問い合わせ内容を記載ください" v-model="message" required></textarea>
          </div>
          <button class="contact_submit" type="submit" >送信</button>
        </form>
        <form name="contact2" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </div>
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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductFlower from '../components/ProductFlower'
import axios from 'axios'
export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    }
  },
  methods: {
    onSubmit() {
      const params = new URLSearchParams()
      params.append('form-name', 'contact2')// Forms使うのに必要
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)

      axios
        .post('/', params)
        .then(() => {
          this.$router.push('thanks')
        })
        .catch(() => {
          this.$router.push("thanks");
        })

    }
  },
  components: {
    ProductFlower,
    Header,
    Footer
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
    width
    : 100%;
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
    color: #ff6767;
    text-shadow: 0px 4px 4px rgba(177, 177, 177, 0.25);
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

  .sympathy_contents li {
    line-height: 25px;
  }

  .sympathy_img img {
    width: 80%;
  }

  .prev_appeal {
    line-height: 30px;
  }

  .appeal {
    color: #fa7c7c;
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

  .pc_benefit {
    display: none;
  }

  .pc_benefit_2 {
    display: none;
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
    color: #ff6767;
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

  .company_feature {
    margin: 10% 5%;
    text-align: center;
  }

  .company_feature h2 {
    font-size: 1.6rem;
    padding: 20px 0 ;
  }

  .company_feature p {
    margin: 0 5%;
    padding: 30px 0
  }

  .company_feature img {
    width: 60%;
  }

  .flower_language {
    background-color: rgba(255, 215, 215, 0.658);
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
    color: rgb(255, 124, 222);
  }

  .flower_detail p:nth-of-type(1) {
    color: white;
    text-shadow: 2px 1px 3px #bdbdbd;
  }
  .flower_detail p:nth-of-type(2) {
    color: rgb(255, 131, 131);
    text-shadow: 2px 1px 3px #bdbdbd;
  }
  .flower_detail p:nth-of-type(3) {
    color: rgb(255, 47, 47);
    text-shadow: 2px 1px 3px #bdbdbd;
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
    line-height: 30px;
  }

  .solution_area {
    border: 1px solid gray;
    border-radius: 10px;
    margin: 0 10%;
    position: relative;
    padding-bottom: 4%;
  }

  .solution_area h3 {
    font-size: 1em;
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

  .information {
    margin: 10%;
  }

  .information h2 {
    text-align: center; 
    font-size: 1.7rem;
    margin: 40px 0 30px;
  }

  .sns {
    display: block;
    margin: 0 auto;
  }

  .info {
    padding: 10px;
    /* width: 80%; */
    text-align: center;
  }

  .info img {
    width: 30%;
    margin: 10px 0 40px;
  }

  .info p {
    width: 100%;
    margin: 0 auto;
    text-align: left;
  }

  .contact {
    margin: 10% 20%;
    /* width: 90%; */
    /* text-align: center; */
  }

  .contact h2 {
    font-size: 1.6rem;
    text-align: center;
    margin: 60px 0 30px;
  }

  .contact p {
    text-align: center;
  }
  .contact label,
  .contact input,
  .contact textarea {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .contact input,
  .contact textarea {
    font-size: 1rem;
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
  
  .contact label {
    padding: 20px 0;
  }


  .contact input {
    height: 40px;
  }
  .contact textarea {
    height: 200px;
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
    .sns {
      display: flex;
      justify-content: space-around;
    }

    .info {
      width: 80%;
    }
    .info img {
      width: 40%;
      margin: 10px 0 40px;
    } 
  }

  /* デスクトップ/タブレット横 */
  @media screen and (min-width: 769px) {
    .top_eyecatch {
      width: 100%;
    }
    .top_eyecatch h2 {
      font-size: 2.2rem;
      width: 40%;
      top: 20%;
      line-height: 50px;

    }
    .top_image {
      width: 90%;
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
      font-size: 1.3rem;
    }

    .second-text {
      padding: 10px 0;
    }

    .second-text:nth-of-type(3) {
      margin-bottom: 60px;
    }

    .contents_block {
      margin: 10px 0;
    }

    .sympathy_block {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 50px auto 30px;
    
    }

    .sympathy_contents {
      width: 100%;
      align-items: center;
      flex-direction: column;
    }

    .ul_list {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
    }

    .sympathy_contents ul{
      font-size: 1.2rem;
      width: 50%;

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
      font-size: 1.4rem;
      color: rgb(34, 34, 34);
    }

    .sympathy_part h2 {
      font-size: 1.8rem;
    }
    
    .prev_appeal {
      font-size: 1.3rem;
      line-height: 50px;
    }

    .appeal {
      font-size: 2.5rem;
    }

    .pc_benefit {
      display: block;
    }

    .pc_benefit_2 {
      display: block;
      margin: 0 0 0 20%;
    }
  

    .smp_benefit {
      display: none;
    }

    .benefit_area {
      display: flex;
      align-items: center;
      margin: 40px 0 50px;
    }

    .benefit_img {
      width: 50%;
      margin: 0 1% 0 5%;
    }
    .benefit_img2 {
      width: 50%;
      margin: 0 5% 0;
    }

    .content h2 {
      font-size: 1.8rem; 
    }

    .content_description,
    .content_description2 {
      font-size: 1.4rem;
      padding: 20px 0 50px;
      margin: 0;
    }

    .content_description {
      width: 80%;
    }

    .content_description2 {
      line-height: 30px;
      width: 80%;
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

    .company_feature p {
      margin: 0 4%;
      text-align: center;
      font-size: 1.3rem;
    }

    .flower_detail {
      width: 100%;
      text-align: center;
    }

    .flower_language h3 {
      font-size: 1.3rem;
    }
    

    .flower_detail p {
      padding: 15px 0;
      font-size: 1.5rem;
    }

    .home_layout h2 {
      font-size: 1.8rem;
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
      font-size: 1.3rem;
      line-height: 30px;
      padding: 10px 0;
      text-align: left;
    }
    .solution_area h3 {
      padding: 10px 0;
      width: 55%;
      font-size: 1.4rem;
      color: #525252;
    }

    .company_feature h2 {
      font-size: 1.8rem;
    }

    .information h2 {
      font-size: 2rem;
    }

    .contact h2 {
      font-size: 2rem;
    }

    .contact_form {
      width: 50%;
    }


    .contact input,
    .contact label,
    .contact textarea {
      font-size: 1.2rem;
    }
    
    .info img {
      width: 20%;
      margin: 10px 0 40px;
    } 

    .info p {
      width: 70%;
    }

    .map_img {
      width: 50%;
      margin: 0 0 0 5%;
    }

    .map_img img {
      width: 80%;
    }

    .company h2 {
      font-size: 2rem;
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