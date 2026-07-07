<template>
    <div class="s1">
        <div>插槽应用-子组件1</div>
        <hr>
        <slot></slot>
        <hr>
        <slot name="third"></slot>
        <hr>
        <slot name="second">我是老二</slot>
        <div>上面是插槽位置</div>
    </div>
</template>

<style>
.s1 {
    flex: 1;
    border: 2px dashed hotpink;
}
</style>
