function change(n,coin){
    coin.sort((a,b)=>a-b);
    var arr=[];
    for(i=1;i<=n/coin[0];i++){
        for(t=0;t<arr.length;t++)
            arr[t].push(coin[0]);
        for(t=1;t<=i/2;t++){
            var a=i-t-1;
            var b=t-1;
            if(a>=coin.length||b>=coin.length)
                break;
            arr.push([coin[a],coin[b]]);
        }
    }
    //arr.push([n]);
    return arr;
}


console.log(change(10,[1,2,3]));
//console.log(change(1000,[31]));//0