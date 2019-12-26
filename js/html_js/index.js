/*鼠标拂过某一个标签，添加class="current_page"*/
function setCurrent_page(number) {
    //获取带有group_food的class标签
    let group_foods = document.getElementsByClassName('group_food');
    for (let i = 0; i < group_foods.length; i++) {
        i == number ? group_foods[number].className = 'group_food current_page' : group_foods[i].className = 'group_food';
    }
}