<template>
  <div class="about">
  <h3>Express 예제</h3>
  vue.js + typescript 로 만든 예제 페이지에서,<br>
  node 서버의 URL 을 호출하여 JSON 통신을 확인하도록 한다.<br>
  <br>

  AXIOS 를 이용하며, node + ejs 엔진을 이용한다.<br>
  프로젝트 시작은 express-generator, vue-cli 등을 이용한다.<br>
  <br>
  2019.5.10 by rimbrake<br>
  <br>
  <hr>

  <br>

  <div class="comment">// --save-dev 로 설치한다.</div>
  <div class="command">npm i express-generator</div>
  <br>

  <div class="comment">// 로칼 설치된 패키지를 실행해 주는 명령어 npx 이용 </div>
  <div class="command">npx express learn-express --view-ejs</div>
  <div class="command">cd learn-express </div>
  <div class="command">npm install </div>
  <br>

  <div class="comment">// CORS 문제를 해결하기 위하여, cors 패키지를 추가한다. </div>
  <div class="command">npm i cors </div>
  <br>

  <div class="comment">// node 실행. 기본 포는 3000.  http://localhost:3000  </div>
  <div class="command">npm run start</div>
  <div class="comment">// 이렇게 해도 실행 됨.  </div>
  <div class="command">npm start</div>
  <br>

  <div class="comment">// typescript 등 커스터마이징. ...</div>
  <div class="command">vue create learn </div>
  <br>

  <div class="comment">// localhost:8080 에서 테스트 페이지를 볼 수 있음.</div>
  <div class="command">cd learn</div>
  <div class="command">npm run serve</div>
  <br>




  </div>
</template>

<style scoped lang="scss">
.about  { text-align: left; }
.comment  { font-size:10pt; font-style: italic; }
.command  { font-weight:bold; }
.log    { font-size: 8pt; }
</style>
