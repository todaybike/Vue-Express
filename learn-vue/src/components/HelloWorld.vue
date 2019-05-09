<template>
  <div class="hello">
    여기에 뭔가를 뿌리면 되는 건가 ?<br>
    <br>

    <button v-on:click='svr1'>노드 서버 svr1 / </button><br>

    <button v-on:click='getStlmRmlmCardInfo'>/api/account/main/getStlmRmlmCardInfo.do</button><br>
    <br>

    <div class="log"> {{ log }}</div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  public log:string = '';

  public svr1() {
    this.communicate('/');
  }

  public getStlmRmlmCardInfo() {
    this.communicate('/api/account/main/getStlmRmlmCardInfo.do');
  }

  public communicate( uri : string ) {
    let url_server = 'http://localhost:3000';
    let url_full = url_server + uri;

    axios({
      method: 'GET',
      headers: {
        Accept : 'application/json',
        ContentType : 'application/json; cahrset=utf-8',
        Encryption: 'N',
        Transfer : new Date().getTime().toString(),
      },
      url: url_full,
      data:
      
      {
        HEADER: {

        },
        MESSAGE: {
          BODY: {
            osVersion: 'xxx',
            appVersion: 'xxxx',
            model: 'x86_64',
            osType: 'window',
          },
        },
      },
    })
    .then( (res:any) => {
      this.log = res.data;
      console.log( `data=${res.data}`);
    })
    .catch( (ex:any) =>  {
      console.log( ex );
    });

  } // end of public svr1()

} // end of class


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello  { text-align: left; }
.log    { font-size: 8pt; }

</style>
