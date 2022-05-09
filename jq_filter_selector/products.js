var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

let tmp_products = [];

let header = Object.keys(products[0]);
header.push("remove");

function add_row_to_table(row) {
  let tr;

  if (Array.isArray(row)) {
    tr = `<tr>
							<td>${row[0]}</td>
							<td>${row[1]}</td>
							<td>${row[2]}</td>
							<td>${row[3]}</td>
							<td>${row[4]}</td>
						</tr>`;
  } else {
    tr = `
						<tr>
							<td>${row.id}</td>
							<td>${row.name}</td>
							<td>${row.brand}</td>
							<td>${row.os}</td>
							<td><a href="#/">X</td>
						</tr>`;
  }

  $("#product_list").append(tr);
}

function create_table(products) {
  $("#product_list tr:gt(0)").remove();

  for (const prod of products) {
    add_row_to_table(prod);
  }
}

function get_list_by(prop) {
  return products.map((item) => {
    return item[prop];
  });
}

function uniq_array(arr) {
  return arr.filter((item, i, _arr) => {
    return _arr.indexOf(item) == i;
  });
}

function filter_by(attr, val) {
  return products.filter((item) => {
    return item[attr] == val;
  });
}

function filter_by_regex(attr, val) {
  return products.filter((item) => {
    return new RegExp(val, "i").test(item[attr]);
  });
}

function populate_select(id) {
  $(`#${id}`).append($("<option>").attr("value", "").text(`Select ${id}`));

  uniq_array(get_list_by(id)).forEach((element, i) => {
    $(`#${id}`).append($("<option>").attr("value", element).text(element));
  });
}

$(document).ready(function () {
  console.log("ready");

  populate_select("brand");
  populate_select("os");

  //  display products table
  add_row_to_table(header.map((i) => i.toUpperCase()));
  create_table(products);

  // attach delete event
  $("#product_list").on("click", "a", function () {
    // $(this).closest("tr").children().first().text();
    console.log("X button clicked");
    $(this).closest("tr").remove();
  });

  $(document).on("change", "select", function (event) {
    let criteria = $(this).attr("id");
    let value = $(this).val();
    console.log(criteria, value);

    // debugger;

    if (value != "") {
      tmp_products = filter_by(criteria, value);
      create_table(tmp_products);
    }

    console.log(tmp_products);
  });

  $(document).on("input", "input", function (event) {
    let query = $(this).val();
    console.log(query);

    // debugger;

    if (/\d+/.test(query)) {
      tmp_products = filter_by_regex("id", query.trim());
    } else {
      tmp_products = filter_by_regex("name", query.trim());
    }

    console.log(tmp_products);
    create_table(tmp_products);
  });

  // $("#brand").on("change", function (e) {
  //     console.log('eee');
  // })
});

console.log(products);
