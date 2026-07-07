<template>
    <div>
        <h5>父插槽</h5>
        <todo-list>
            <template v-slot:tom="slotProps">
                 <p>子组件接收的数据在这里:{{ slotProps.itemName }}</p>
            </template>
        </todo-list>
    </div>
</template>

<script>
import Dslot from './Dslot.vue';

export default {
    components: { 'todo-list': Dslot }
}
</script>
