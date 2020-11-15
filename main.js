new Vue({
    data:{
        first:0,
        second:0,
        sum:0,
        title:'addition',
        format:['Addition','Subtraction','Multiplication','Division'],
        key:'+',  
    },
    methods:{
        firstIncrement(){
            this.first += 1;
        },
        firstDecrement(){
            if(this.first > 0){
                this.first -= 1;
            }
        },
        secondIncrement(){
            this.second += 1;
        },
        secondDecrement(){
            if(this.second > 0){
                this.second -= 1;
            }
        },
    },
    computed:{
        resultAdd(){
            return function(f){
                if(f === '+'){
                    this.title = this.format[0];
                    return this.first + this.second;
                }else if(f === '-'){
                    this.title = this.format[1];
                    return this.first - this.second;
                }else if(f === '×'){
                    this.title = this.format[2];
                    return this.first * this.second;
                }else{
                    this.title = this.format[3];
                    this.sum = this.first / this.second;
                    return Math.round(this.sum * 1000) / 1000;
                }
            }
        },
    },
}).$mount("#app");