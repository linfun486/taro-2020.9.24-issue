import {App} from 'vue';

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const helloWorld = () => {
    console.log('Hello Taro');
    
}
export default {
    install (app:App, options){
        app.config.globalProperties.$support = {
            helloWorld
        }
    }
}