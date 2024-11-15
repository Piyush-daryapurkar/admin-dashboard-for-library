async function fetch_fun(){
    let arr=await fetch("http://localhost:3000/library");
    let res=await arr.json();

    let data=res.map((e)=>`

    <tr> 
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.number}</td>
        <td>${e.gender}</td>
        <td>${e.start_date}</td>
        <td>${e.end_date}</td>
        <td>${e.shift}</td>
        <td>${e.seat}</td>
        <td>${e.address}</td>
        <td><i class="fa-solid fa-trash" onclick="mydelete('${e.id}')"></i></td>
        <td><i class="fa-solid fa-pen-to-square" onclick="myedit('${e.id}')"></i></td>

    
    </tr>
    
    `).join("")
    document.getElementById('show').innerHTML=data;
}
fetch_fun();


// TO DELETE

function mydelete(id) {
    fetch(`http://localhost:3000/library/${id}`, {
      method: 'DELETE'
    })
    .then((r) => alert("Deleted........"));
  }
  

//insert data

function insData(){
    let name1=document.getElementById('name').value;
    let number1=document.getElementById('number').value;
    let gender1=document.getElementById('gender').value;
    let start_date1=document.getElementById('start_date').value;
    let end_date1=document.getElementById('end_date').value;
    let shift1=document.getElementById('shift').value;
    let seat1=document.getElementById('seat').value;
    let address1=document.getElementById('address').value;

    let my_data = {
        name:name1,
        number:number1,
        gender:gender1,
        start_date:start_date1,
        end_date:end_date1,
        shift:shift1,
        seat:seat1,
        address:address1
    };

    fetch("http://localhost:3000/library",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(my_data),
    })
    .then((re) => alert("data updated...!"))
    .catch((r)=> alert("not inserted...!"))
}





// to edit

async function myedit(id){
    
    let r=await fetch(`http://localhost:3000/library/${id}`)
    let d=await r.json()

    let frm=`
 
           <form action="" class="form" onsubmit="return finalupdate('${d.id}')">
                    <h1>Edit Data</h1>

                <label for="name1"> Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>
                <input type="text" value="${d.name}" id="name1" placeholder="Enter Your Name"><br>

                <label for="number1">Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" value="${d.number} "id="number1" placeholder="Enter Your Contact" ><br>

                <label for="gender1">Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select name="gender" value="${d.gender}" id="gender1" >
                    <option value="">Please select one… </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="other">Other</option>
                    <option value="Prefer not to answer">Perfer not to Answer</option>
              </select><br>

                <label for="start_date1">start date&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="date" value="${d.start_date}" id="start_date1" ><br>

                <label for="end_date1">End date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="date" value="${d.end_date}" id="end_date1" ><br>

    
                <label for="shift1">Shift&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select name="select" value="${d.shift}" id="shift1">
                    <option >Please Select Shift</option>
                    <option >Morning</option>
                    <option >Evening</option>
                    <option >Night</option>
                    <option>Full Time</option>
    
                </select><br>

                <label for="seat1">Seat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" value="${d.seat}" id="seat1" placeholder="Enter Your Seat Number"><br>

                <label for="address1">Addeess&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" value="${d.address}" id="address1" placeholder="Enter Your Address" ><br>


                <div class="btn">
                    <button type="submit">Update Data</button>
                </div>
                </form>
    `
    document.getElementById('editform').innerHTML=frm
}


function finalupdate(id){

    let name2=document.getElementById('name1').value
    let number2=document.getElementById('number1').value
    let gender2=document.getElementById('gender1').value
    let start_date2=document.getElementById('start_date1').value
    let end_date2=document.getElementById('end_date1').value
    let shift2=document.getElementById('shift1').value
    let seat2=document.getElementById('seat1').value
    let address2=document.getElementById('address1').value



      let frm={
        name:name2,
        number:number2,
        gender:gender2,
        start_date:start_date2,
        end_date:end_date2,
        shift:shift2,
        seat:seat2,
        address:address2
    }

    fetch(`http://localhost:3000/library/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(frm)
    })
    .then(r=>alert("data Updated....."))

}