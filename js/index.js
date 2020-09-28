// shopping trolley counter
var countNum = 0;
// table
var tab = document.getElementById("tab")
// add shopping trolley
function shoppingTrolley(obj, name) {
    var text = obj.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML;
    var price = parseFloat(obj.parentNode.parentNode.childNodes[3].childNodes[3].innerHTML)
    if (esName(text)) {
        var tr = tab.insertRow()
        tr.insertCell().innerHTML = "<input type='checkbox' name='checkName' onclick='deciCheck()'>"
        tr.insertCell().innerHTML = text
        tr.insertCell().innerHTML = price
        tr.insertCell().innerHTML = "<input type='button' value='-' onclick='minus(this)'><span>1</span><input type='button' value='+' onclick='add(this)'>"
        tr.insertCell().innerHTML = "<input type='button' value='删除' onclick='deletes(this)'>"
        document.getElementById("count").innerHTML = ++countNum
    }
}
// 判断商品是否存在表格中
function esName(name) {
    var hypothesis = true;
    for (var i = 0; i < tab.rows.length; i++) {
        if (name == tab.rows[i].cells[1].innerHTML) {
            hypothesis = false;
            break
        }
    }
    return hypothesis
}
// 全选
var checkName = document.getElementsByName("checkName");
function checkAll(obj) {
    for (var i = 0; i < checkName.length; i++) {
        checkName[i].checked = obj.checked;
    }
    closeAnAccount()
}
// 不全选
function deciCheck() {
    var n = 0
    for (i = 0; i < checkName.length; i++) {
        if (checkName[i].checked) {
            n++
        }
    }
    document.getElementById("inp").checked = n == tab.rows.length - 1;
    closeAnAccount()
}
// 结算
function closeAnAccount() {
    var sum = 0;
    for (var i = 0; i < checkName.length; i++) {
        if (checkName[i].checked) {
            sum += parseFloat(checkName[i].parentNode.parentNode.childNodes[2].innerHTML) * parseFloat(checkName[i].parentNode.parentNode.childNodes[3].childNodes[1].innerHTML)
        }
    }
    document.getElementById("accounts").innerHTML = sum
}
// 删除
function deletes(obj) {
    var lineNumber = obj.parentNode.parentNode.rowIndex;
    tab.deleteRow(lineNumber);
    document.getElementById("count").innerHTML = --countNum
    closeAnAccount()

}
// 删除选中项
function deleteSelected() {
    for (var i = checkName.length - 1; i >= 0; i--) {
        if (checkName[i].checked) {
            tab.deleteRow(i + 1);
            document.getElementById("count").innerHTML = --countNum
        }
    }
    closeAnAccount()
}
// 加、减按钮
function minus(obj) {
    if (obj.nextSibling.innerHTML > 1) {
        obj.nextSibling.innerHTML = parseInt(obj.nextSibling.innerHTML) - 1;
    }
    closeAnAccount()
}
function add(obj) {
    obj.previousSibling.innerHTML = parseInt(obj.previousSibling.innerHTML) + 1;
    closeAnAccount()
}
// 点击购物车
function shop(){
    document.getElementById("shoppingTrolley").style.display="block"
    document.getElementById("commodity").style.display="none"
}
function continues(){
    document.getElementById("shoppingTrolley").style.display="none"
    document.getElementById("commodity").style.display="block"
}


