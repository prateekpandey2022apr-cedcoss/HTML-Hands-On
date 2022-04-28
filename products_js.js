function process_form(e) 
{
    e.preventDefault();
    // console.log('form');

    var form = document.getElementById("form");                        
    var table = document.getElementById("product_list");
    var tr = document.createElement("tr");       
    
    // debugger;

    // var text_node_arr = []
    var td_node_arr = []

    for (const element of form.elements) 
    {                
        // console.log(element.value);
        if(element.type == "text")
        {
            let td = document.createElement("td")                                                
            td.appendChild(document.createTextNode(element.value));
            td_node_arr.push(td);
        }                
    }            

    // console.log(td_node_arr);                     

    // console.log(td_node_arr);

    tr.appendChild(td_node_arr[0]);
    tr.appendChild(td_node_arr[1]);
    tr.appendChild(td_node_arr[2]);

    table.appendChild(tr);

    form.reset();                        
    
}