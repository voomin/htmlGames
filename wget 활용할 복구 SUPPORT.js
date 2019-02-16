const domain="https://barotok.com/";

var o=[
    {
        ext:'html',
        arr:[
            "header",
            "footer",
            "business",
            "products",
            "service",
            "TermsOfService",
            "FAQ",
        ]
    },
    {
        ext:'css',
        arr:[
            "business",
            "products",
            "service",
            "TermsOfService",
            "FAQ",
        ]
    },
    {
        ext:'js',
        arr:[
            "header.js"
            "business",
            "products",
            "service",
            "TermsOfService",
            "FAQ",
        ]
    }
]

function wgetConsole(obj){
    console.log(obj.ext+"------------ START ----------");
    for(i in obj.arr){
        var wget="wget -r -np "+domain+obj.ext+"/"+obj.arr[i]+"."+obj.ext;
        console.log(wget);
    }
    if(obj.ext=='html'){
        console.log("img------------ START ----------");
        allImg(obj);
    }
}
function allImg(htmlObj){
    var imgs=[
        "png",
        "jpg",
        "jpeg",
    ]
    for(i in htmlObj.arr){
        obj=htmlObj
        for(k in imgs){
            var wget="wget -A \"*."+imgs[k]+"\" -r "+domain+obj.ext+"/"+obj.arr[i]+"."+obj.ext;
            console.log(wget);
        }
    }

}

for(index in o){
    wgetConsole(o[index]);
}
