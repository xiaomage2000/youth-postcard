//以下为图片选择代码
function behind_img1() {
    document.getElementById('choice-behind').src = document.getElementById('behind-img1').src;
    document.getElementById('behind-btn1').innerHTML = "反面已选择";
    document.getElementById('behind-btn2').innerHTML = "选择这张图片作为反面";
    document.getElementById('behind-btn3').innerHTML = "选择这张图片作为反面";
    document.getElementById('behind-btn4').innerHTML = "选择这张图片作为反面";
}

function behind_img2() {
    document.getElementById('choice-behind').src = document.getElementById('behind-img2').src;
    document.getElementById('behind-btn2').innerHTML = "反面已选择";
    document.getElementById('behind-btn3').innerHTML = "选择这张图片作为反面";
    document.getElementById('behind-btn4').innerHTML = "选择这张图片作为反面";
    document.getElementById('behind-btn1').innerHTML = "选择这张图片作为反面";
}

function behind_img3() {
    document.getElementById('choice-behind').src = document.getElementById('behind-img3').src;
    document.getElementById('behind-btn3').innerHTML = "反面已选择";
    document.getElementById('behind-btn4').innerHTML = "选择这张图片作为反面";
    document.getElementById('behind-btn1').innerHTML = "选择这张图片作为反面";
    document.getElementById('behind-btn2').innerHTML = "选择这张图片作为反面";
}

function behind_img4() {
    document.getElementById('choice-behind').src = document.getElementById('behind-img4').src;
    document.getElementById('behind-btn4').innerHTML = "反面已选择";
    document.getElementById('behind-btn1').innerHTML = "选择这张图片作为反面";
    document.getElementById('behind-btn2').innerHTML = "选择这张图片作为反面";
    document.getElementById('behind-btn3').innerHTML = "选择这张图片作为反面";
}

function photo_img1() {
    document.getElementById('choice-photo').src = document.getElementById('photo-img1').src;
    document.getElementById('photo-btn1').innerHTML = "照片已选择";
    document.getElementById('photo-btn2').innerHTML = "选择这张照片贴在反面";
    document.getElementById('photo-btn3').innerHTML = "选择这张照片贴在反面";
}

function photo_img2() {
    document.getElementById('choice-photo').src = document.getElementById('photo-img2').src;
    document.getElementById('photo-btn2').innerHTML = "照片已选择";
    document.getElementById('photo-btn3').innerHTML = "选择这张照片贴在反面";
    document.getElementById('photo-btn1').innerHTML = "选择这张照片贴在反面";
}

function photo_img3() {
    document.getElementById('choice-photo').src = document.getElementById('photo-img3-preview').src;
    document.getElementById('photo-btn3').innerHTML = "照片已选择";
    document.getElementById('photo-btn1').innerHTML = "选择这张照片贴在反面";
    document.getElementById('photo-btn2').innerHTML = "选择这张照片贴在反面";
}

//以下为图片上传代码
function ProcessFile() {
    var file = document.getElementById('photo-img3').files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;
            var img = document.getElementById('photo-img3-preview');
            img.src = txt;//将图片base64字符串赋值给img的src
            document.getElementById("photo-img3-preview");
        };
        reader.readAsDataURL(file);
    }
}

function contentLoaded() {
    document.getElementById('photo-img3').addEventListener('change', ProcessFile, false);
}

window.addEventListener("DOMContentLoaded", contentLoaded, false);


//以下为图片合成代码
var data,data1,data2;
function mixture() {
    data1 = document.getElementById('choice-behind').src;
    data2 = document.getElementById('choice-photo').src;
    data = [ data1, data2 ],
    base64 = [];
    draw(function() {
        document.getElementById('result').src = base64[0];
    })
}

function draw(fn) {
    var c = document.createElement('canvas'),
        ctx = c.getContext('2d'),
        len = data.length;
    c.width = 1100;
    c.height = 900;
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = '#fff';
    ctx.fill();

    function drawing(n) {
        if(n < len) {
            var img = new Image;
            img.crossOrigin = 'Anonymous'; //解决跨域

            img.src = data[n];
            img.onload = function() {
                if(n == 1) {
                    ctx.drawImage(img, 75, 60, 950, 600); 
                } else {
                    ctx.drawImage(img, 0, 0, c.width, c.height);
                }
                drawing(n + 1); //递归
            }
        } else {
            //保存生成作品图片
            base64.push(c.toDataURL()); //通过canvas.toDataURL转成base64.
            // alert(JSON.stringify(base64));
            fn();
        }
    }
    drawing(0);
}