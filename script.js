function fizzbuzz(n){

    for(let i=1;i<=n;i++){
        if(i%15==0){
            console.log(15+"fizzbuzz");
            
        }
        else if(i%3==0){
            console.log(i+"fizz");
        }
        else if(i%5==0){
            console.log(i+"buzz")
        }
        else{
            console.log(i);
        }
    }

}
fizzbuzz(15);
