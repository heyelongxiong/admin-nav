	//全选按钮
    function checkAll(c){
        var status = c.checked;
        var oItems = document.getElementsByName('item');
        for(var i=0;i<oItems.length;i++){
            oItems[i].checked=status;
        }
    }

      //修改功能
    function modify(obj){
       var updateShow = document.getElementById('update-data');
       var oNum = document.getElementById('num');
       var oUser = document.getElementById('username');
       var oPwd = document.getElementById('pwd');
       var oBirth = document.getElementById('birth');
       var oAddre = document.getElementById('addre');
       var oTr = obj.parentNode.parentNode;
       var aTd = oTr.getElementsByTagName('td');
       updateShow.style.display = 'block';
       rowIndex = obj.parentNode.parentNode.rowIndex;  
       oNum.value = aTd[1].innerHTML;
       oUser.value = aTd[2].innerHTML;
       oPwd.value = aTd[3].innerHTML;
       oBirth.value = aTd[4].innerHTML;
       oAddre.value = aTd[5].innerHTML;
       console.log(aTd[4].innerHTML);
       //alert(i);
    }

    //删除每一项
    function del(obj){
        var oParentnode = obj.parentNode.parentNode;
        var olistTable = document.getElementById('listTable');
        olistTable.removeChild(oParentnode);
    }
    
    //delAll功能
    function delAll(){
        var olistTable = document.getElementById('listTable');
        var items = document.getElementsByName("item");
        for(var j=0;j<items.length;j++){    
            if(items[j].checked)//如果item被选中
            {
                var oParentnode = items[j].parentNode.parentNode;
                olistTable.removeChild(oParentnode);
                j--;
            }
        }
    }

    //添加功能
	function addList(){
        var oNum = document.getElementById('num').value;
        var oUser = document.getElementById('username').value;
        var oPwd = document.getElementById('pwd').value;
        var oBirth = document.getElementById('birth').value;
        var oAddre = document.getElementById('addre').value;
        var oTr = document.createElement('tr');
        var oTd1 = document.createElement('td');
        var oInput = document.createElement('input');
        oTd1.appendChild(oInput);
        oInput.setAttribute('type','checkbox');
        oInput.setAttribute('name','item');
        var oTd2 = document.createElement('td');
        oTd2.innerHTML = oNum;
        var oTd3 = document.createElement('td');
        oTd3.innerHTML = oUser;
        var oTd4 = document.createElement('td');
        oTd4.innerHTML = oPwd;
        var oTd5 = document.createElement('td');
        oTd5.innerHTML = oBirth;
        var oTd6 = document.createElement('td');
        oTd6.innerHTML = oAddre;
        var oTd7 = document.createElement('td');
        var oInput2 = document.createElement('input');
        var oInput3 = document.createElement('input');
        oInput2.setAttribute('type','button');
        oInput2.setAttribute('value','删除');
        oInput2.setAttribute('onclick','del(this)');
        oInput2.className = 'btn btn-danger';
        oInput3.setAttribute('type','button');
        oInput3.setAttribute('value','修改');
        oInput3.setAttribute('onclick','modify(this)');
        oInput3.className = 'btn btn-info';
        oTd7.appendChild(oInput2);
        oTd7.appendChild(oInput3);
        oTr.appendChild(oTd1);
        oTr.appendChild(oTd2);
        oTr.appendChild(oTd3);
        oTr.appendChild(oTd4);
        oTr.appendChild(oTd5);
        oTr.appendChild(oTd6);
        oTr.appendChild(oTd7);
        var olistTable = document.getElementById('listTable');
        olistTable.appendChild(oTr);
    }
    //更新功能
    function update(){
        var oNum = document.getElementById('num');
        var oUser = document.getElementById('username');
        var oPwd = document.getElementById('pwd');
        var oBirth = document.getElementById('birth');
        var oAddre = document.getElementById('addre');
        var oMytable = document.getElementById('mytable');
        //alert(rowIndex);
        //var aTd = rowIndex.cells;
        console.log(oMytable.rows[rowIndex].cells)
        oMytable.rows[rowIndex].cells[1].innerHTML = oNum.value;
        oMytable.rows[rowIndex].cells[2].innerHTML = oUser.value;
        oMytable.rows[rowIndex].cells[3].innerHTML = oPwd.value;
        oMytable.rows[rowIndex].cells[4].innerHTML = oBirth.value;
        oMytable.rows[rowIndex].cells[5].innerHTML = oAddre.value;
    }

