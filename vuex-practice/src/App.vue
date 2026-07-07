<template>
  <div>
    <p>
      每次增加1:<button @click="increment">+</button>
      数字:{{ this.$store.state.num }}
    </p>
    <p>
      每次减少1:<button v-on:click="reduction">-</button>
      数字:{{ this.$store.state.data }}
    </p>
  </div>
</template>
<script>
import { useStore } from 'vuex';
export default{
  setup(){
    const store = useStore();//将全局对象仓库store引用
    const increment=()=>{
      store.commit('add')
    };
    const reduction=()=>{
      store.commit('reduc')
    };
    return{ increment,reduction }
  }
}
</script>