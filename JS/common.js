function my$(id) {
    return document.getElementById(id);
};
function move(element,target){
    //先清理定时器
    clearInterval(element.timeId);
    //一定要清理定时器（运行一次产生一个定时器）
    element.timeId=setInterval(function(){
        //获取div的当前位置
        var current=element.offsetLeft;//数字类型，无PX
        //步数的大小
        var step=10;
        step=current<target?step:-step;
        //每次移动后的距离
        current+=step;
        //判断当前移动后的位置是否达到目标位置
        if (Math.abs(target-current)>Math.abs(step)){
            element.style.left=current+"px";
        }else{
            //清理定时器
            clearInterval(element.targetId);
            //直接到达目标
            element.style.left=target+"px";
        }
    },20);
};