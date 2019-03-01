function hopscotch(board) {
    var i,j;
    var result=0;
    var gap=[];
    var indexArr=[];
    var topIndexArr=[];
    var secIndexArr=[];
    var changeIndex=[];//바귄 index들
    var finalIndex=[];
    for(i=0;i<board.length;i++){
        var topIndex=0;
        var secIndex=0;
        for(j=1;j<board[i].length;j++){
            if(board[i][topIndex]<board[i][j]){
                topIndex=j; 
            }
        }
        var num=0;
        for(j=0;j<board[i].length;j++){
            if(topIndex!=j&&num<board[i][j]){
                num=board[i][j];
                secIndex=j; 
            }
        }
        gap.push(board[i][topIndex]-board[i][secIndex]);
        indexArr.push(topIndex);
        topIndexArr.push(topIndex);
        secIndexArr.push(secIndex);
        result+=board[i][topIndex];
    }
    while(same(indexArr)){
        
    }
    return result;

    function same(arr){
        var count=0;
        for(i=0;i<arr.length;i++){
            if(arr[i]==arr[i+1]){
                count++;
            }else{
                if(count>0){
                    gapCheck(i-count,i+1);
                    return true;
                }
            }
        }
        return false;
    }
    function gapCheck(startIndex,lastIndex){
        var minGapIndex=startIndex;
        for(j=startIndex;j<lastIndex;j++){
            if(gap[minGapIndex]>gap[j]&&finalIndex.indexOf(j)<0){
                minGapIndex=j;
            }
        }
        Change(minGapIndex);
    }
    function Restore(){
        var index=changeIndex.pop();
        indexArr[index]=topIndexArr[index];
        result+=gap[index];
    }
    function Change(index){
        if(changeIndex.indexOf(index)<0){
            changeIndex.push(index);
            indexArr[index]=secIndexArr[index];
            result-=gap[index];
        }else{
            finalIndex.push(changeIndex[0]);
            for(j=0;j<=changeIndex.length;j++)
                Restore();
        }
    }
}


 //아래는 테스트로 출력해 보기 위한 코드입니다.
var board = [[ 1, 2, 3, 5 ], [ 5, 6, 7, 8 ], [ 4, 3, 2, 1]];
var board2 = [
    [2,4,10,5],
    [10,1,3,4],
    [10,6,5,4],
    [2,7,7,3],
    [1,3,10,4]
    ];
var board3=[
    [4,9,9,7],
    [1,7,7,2],
    [6,7,9,9],
    [3,4,6,7],
    [9,10,3,9],
    [4,9,5,6],
    [9,10,3,3],
    [2,7,2,3],
    [9,8,10,7],
    [5,1,4,4]
]
console.log(hopscotch(board2));