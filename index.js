const makeDropDownMenuFromMainItemAndSubItems = (mainItem, subItems) => {
  hideAllSubItems();

  function hideAllSubItems() {
    subItems.forEach((item) => (item.style.display = "none"));
  }
};

//tests
const menu1 = document.getElementById("menu1");
const subItemsMenu1 = [...menu1.querySelectorAll("li")];
const menu2 = document.getElementById("menu2");
const subItemsMenu2 = [...menu2.querySelectorAll("li")];
const menu3 = document.getElementById("menu3");
const subItemsMenu3 = [...menu3.querySelectorAll("li")];
makeDropDownMenuFromMainItemAndSubItems(menu1, subItemsMenu1);
makeDropDownMenuFromMainItemAndSubItems(menu2, subItemsMenu2);
makeDropDownMenuFromMainItemAndSubItems(menu3, subItemsMenu3);
