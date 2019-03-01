
function fx(x,y){
    var resultNum=1;
    var up=[];
    for(i=x+1;i<=x+y;i++){
        var inum=i;
        for(num=2;num<=inum;){
            if(inum%num==0){
                inum/=num;
                up.push(num);
                num=2;
            }else{
                num++;
            }
        }
    }
    for(i=2;i<=y;i++){
        var inum=i;
        for(num=2;num<=inum;){
            if(inum%num==0){
                inum/=num;
                var index=up.indexOf(num);
                up.splice(index,1);
                num=2;
            }else{
                num++;
            }
        }
    }
    if(up.length==0)
        up.push(1);
    for(i=0;i<up.length;i++){
        resultNum=(resultNum*up[i])%100000;
    }
    return resultNum;
}
function tiling(n) {
    var answer = 0;//결과 값
    var an,bn;//변수
    for(bn=0;bn<=parseInt(n/2);bn++){
        var a=(n-(bn*2));
        var b=bn;
        var result=fx(a,b);
        answer+=result;
    }
	return answer%100000;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.

console.log(tiling(906));