const {createApp} = Vue;

createApp({
    data(){
        return {
            text : '',
            externalSrc : '',
        }
    }
}).mount('#root')