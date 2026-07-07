<template>
    <div>
        <h5>子组件中的插槽传值给父组件</h5>
        <ol>
           <li v-for="(item, index) in items" :key="index">
             <slot :itemName="item" name="tom"></slot>
           </li>
        </ol>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue';

export default {
    setup() {
        const data = reactive({
            items: ['Feed a cat', 'Buy milk', '吃麻辣烫']
        });
        return { ...toRefs(data) };
    }
}
</script>
