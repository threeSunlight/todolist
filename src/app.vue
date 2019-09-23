<template>
    <div id="tx">
        {{ text }}
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:'abc'
        }
    }
}
</script>
<style lang="less" scoped>
#tx{
    color:red
}
</style>