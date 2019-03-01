function factorial(num,total=num){
    return (num-->1)?factorial(num,total*num):total;
}
function setAlign(n, k) {
    var arr=[];
    for(i=1;i<=n;i++){
        arr.push(i);
    }
    k--;
    var answer = [];
    for(i=1;i<n;i++){
        var f=factorial(n-i);
        var num=parseInt(k/f);
        k-=(f*num);
        answer.push(arr[num]);
        arr.splice(num,1);
    }
    answer.push(arr[0]);
    return answer;
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  var wharNum=4;
  for(wiwi=1;wiwi<=factorial(wharNum);wiwi++){
  console.log(wiwi+"번째 = "+setAlign(wharNum,wiwi) );
  }


  //console.log(setAlign(14,78678) );
  //올바른 결과값: [12,8,11,7,9,4,5,13,14,1,6,10,2,3]
  //console.log(setAlign(3,5));
  console.log(setAlign(13,5248858425));
  //setAlign(13,5248858426)의 결과가 틀립니다.
//올바른 결과값: [11,13,6,5,7,1,3,2,12,8,9,10,4]
//실행결과: [11,13,8,7,9,1,6,2,12,10,5,4,3]
  