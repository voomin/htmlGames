
function numCombi(n){
    var arr=[];
    for(i=1;i<=n;i++){
        var length=arr.length;
        for(t=0;t<length;t++){
            arr[t].push(1);
        }
        for(t=1;t<=i/2;t++)
            arr.push([i-t,t]);
    }
    arr.push([n]);
    console.log(n+"==> "+arr.length+"가지");
    return arr;
}


console.log(numCombi(8));