<template>
    <div class="cparent">
        <h5>插槽应用-父组件</h5>
        <c-slot>
           <template v-slot:default>
                <p>插槽内容</p>
                <p>广东工商职业技术大学</p>
            </template>
            <template v-slot:third>
                   <p>我在家里排行老三</p>
            </template>
            <template v-slot:second>
                <p style="color:red">我老二终于收到东西了</p>
            </template>
        </c-slot>

        <c-slot2>
            <template v-slot:first>
                   <p>good afternoon!</p>
            </template>
            <template v-slot:third>
                   <p>我在家里排行老三</p>
            </template>
            <template v-slot:second>
                <p style="color:red">我老二终于收到东西了</p>
            </template>
        </c-slot2>
        
    </div>
</template>

<style>
.cparent { 
    width: 400px; 
    display: flex;
}
</style>

<script>
import Cslot from './Cslot.vue';
import Cslot2 from './Cslot2.vue';

export default {
    components: { 'c-slot': Cslot, 'c-slot2': Cslot2 },
}
</script>
