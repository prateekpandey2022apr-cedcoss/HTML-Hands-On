let heading = ['Company', 'Model', 'Memory (GB)', 'Price'];

let products = [
    ['Samsung', 'Galaxy', 64, 15000],
    ['Nokia', 'S730', 128, 22000],
    ['Xiaomi', 'nOTE', 32, 12000],
    ['Motorola', 'G10', 32, 15000],
    ['Apple', 'S12', 64, 25000],
];

function add_row(row) 
{
    var tb = document.getElementById("product_list");
    var tr = document.createElement("tr");
    
    var td_node_arr = []

    for (const item of row) 
    {                
        // console.log(item);                   
        let td = document.createElement("td")                                                
        td.appendChild(document.createTextNode(item));
        td_node_arr.push(td);
    }            

    // console.log(td_node_arr);                     

    // console.log(td_node_arr);

    tr.appendChild(td_node_arr[0]);
    tr.appendChild(td_node_arr[1]);
    tr.appendChild(td_node_arr[2]);
    tr.appendChild(td_node_arr[3]);

    tb.appendChild(tr);

    // form.reset();        
}

function print_header() 
{
    add_row(heading);
}

function page_load()
{
    console.log("Page Loaded");
    
    print_header();

    for (const row of products) 
    {
        // console.log(row);
        add_row(row)
    }
}

window.onload = page_load;
