/**/
function show_img(img, path, base_1, base_2, step_min, step_max, step_num, 
    filenam, min_v, max_v, num_v, number, range){
/*設定から受け取る値*/
var path = document.getElementById(path);
var base_1 = document.getElementById(base_1);
var base_2 = document.getElementById(base_2);
var step_min = document.getElementById(step_min);
var step_max = document.getElementById(step_max);
var step_num = document.getElementById(step_num);

/*返す値*/
var img = document.getElementById(img);
var filenam = document.getElementById(filenam);
var min_v = document.getElementById(min_v);
var max_v = document.getElementById(max_v);
var num_v = document.getElementById(num_v);
var number = document.getElementById(number);
var range = document.getElementById(range);

if (path.value == "" || base_1.value == "" || base_2.value == ""){
filenam.innerText = "設定が不十分です"
}else{
img.src = path.value + "/" + base_1.value + step_min.value + base_2.value;
filenam.innerText = base_1.value + step_min.value + base_2.value;

number.value = step_min.value
range.value = step_min.value

min_v.innerText = step_min.value
number.min = step_min.value
range.min = step_min.value

max_v.innerText = step_max.value
number.max = step_max.value
range.max = step_max.value

num_v.innerText = step_num.value
number.step = step_num.value
range.step = step_num.value

}

}
function change_img_number(img, path, base_1, base_2, filenam, number, range){
var path = document.getElementById(path);
var base_1 = document.getElementById(base_1);
var base_2 = document.getElementById(base_2);
var img = document.getElementById(img);
var filenam = document.getElementById(filenam);
var number = document.getElementById(number);
var range = document.getElementById(range);

filenam.innerText = base_1.value + number.value + base_2.value;  
img.src = path.value + "/" + base_1.value + number.value + base_2.value;

if(number.value == number.max){
number.value = number.min;
}else if(number.value == number.min){
number.value = number.max;
}
range.value = number.value;
}
function change_img_range(img, path, base_1, base_2, filenam, number, range){
var path = document.getElementById(path);
var base_1 = document.getElementById(base_1);
var base_2 = document.getElementById(base_2);
var img = document.getElementById(img);
var filenam = document.getElementById(filenam);
var number = document.getElementById(number);
var range = document.getElementById(range);

filenam.innerText = base_1.value + range.value + base_2.value;  
img.src = path.value + "/" + base_1.value + range.value + base_2.value;

if(range.value == range.max){
range.value = range.min;
}else if(range.value == range.min){
range.value = range.max;
}
number.value = range.value;
}