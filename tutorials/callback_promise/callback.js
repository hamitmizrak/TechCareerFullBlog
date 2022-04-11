const list=[
    { adi:"hamit1",soyadi:"Mızrak1"},
    { adi:"hamit2",soyadi:"Mızrak2"},
    { adi:"hamit3",soyadi:"Mızrak3"},
];

let callId=document.getElementById("callbak_id");

function callList(){
    setTimeout(()=>{
        let items="";
        list.forEach(temp=>{
            items+=`<li>
            <b>${temp.adi}</b>
            <p>${temp.soyadi}</p>
            </li>`;
        })
        callId.innerHTML=items;
    },1000)
}
//callList();

function createList(data,callback){
    setTimeout(()=>{
    list.push(data);
    callback();
    //callList();
    },1500)
}

createList(
    {adi:"hamit4",soyadi:"Mızrak4"},callList)