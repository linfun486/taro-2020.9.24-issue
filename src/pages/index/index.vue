<template>
<view class="index">
    <NumberDisplay />
    <NumberSubmit />
</view>
</template>

<script>
import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'
import {
    getCurrentInstance
} from 'vue'

export default {
    name: 'Index',
    components: {
        NumberDisplay,
        NumberSubmit
    },
    setup(props) {
        let {
            ctx
        } = getCurrentInstance();
        console.log(ctx)

        ctx.$support.helloWorld();
    }
}
</script>

<style>
.index {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
