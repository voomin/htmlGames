var f=(a,total=a)=>(a-->1)?f(a,total*a):total;
function tiling(n) {
    var answer = 0;//결과 값
    if(n%2==0){
        n/=2;
        var number=[];
        var arr=[];
        for(i=1;i<=n;i++){
            for(t=0;t<number.length;t++){
                arr[t]=(arr[t]*3)%100000;
                if(number[t].indexOf(1)<0){
                    number[t].push(1);
                }
            }
            for(t=1;t<=i/2;t++){
                var a=i-t;
                var b=t;
                var num=1;
                num*=(a==1)?3:2;
                num*=(b==1)?3:2;
                arr.push(num);
                if(a==b)
                    number.push([a]);
                else
                    number.push([a,b]);
            }
        }
        for(i=0;i<number.length;i++)
            arr[i]*=f(number[i].length);
        arr.push(2);

        answer=arr.reduce((a,b)=>a+b)%100000;
    }

    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
//console.log(tiling(10));//
console.log(tiling(298));//24251
//console.log(tiling(594));//9011
//console.log(tiling(570));//87051