<template>
    <div class="s2">
        <div>插槽应用-子组件2</div>
        <hr>
        <slot name="first"></slot>
        <hr>
        <slot name="third"></slot>
        <hr>
        <slot name="second">我是老二</slot>
        <div>上面是插槽位置</div>
    </div>
</template>

<style>
.s2 {
    flex: 1;
    border: 2px dashed rgb(3, 229, 55);
}
</style>
