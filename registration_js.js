function process_form(e) {
    e.preventDefault(); 

    var form_data = []

    var form = document.getElementById("form");

    for (const element of form.elements) 
    {
         console.log(element.name, element.value); 
         // debugger;               
         console.log(element)
         if(element.name == "gender")
         {                    
             if(element.checked)
             {
                 console.log(element.checked);
                 form_data.push([element.name, element.value?element.value: "Field is Empty" ]);
             }
             
         }
         else if(element.name == "submit")
         {
             // 
         }
         else if(element.name == "specialization")
         {
             if(element.checked)
             {
                 console.log(element.checked);
                 form_data.push([element.name, element.value]);
             }
             // debugger;
         }
         else
         {
             form_data.push([element.name.replace("_", " "), element.value?element.value: "Field is Empty"]);
         }                
         
    }

    console.log(form_data);
    
    var info =  document.getElementById("info");

    console.log(info);
    
    var data = "";

    data = "<table border='1' >";

    for (const el of form_data)
    {
         data += "<tr>"
         data +=  "<td>" + el[0] + " </td> " + "<td>" + el[1] + "</td>";
         data += "</tr>"
    }

    data += "</table>";

    info.innerHTML = data;

}

