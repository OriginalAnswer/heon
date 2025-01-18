const itemDB = [
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "2", onoff:"on",categories : "Music Video", title : "O-He", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/36816b8f-b1c3-45d2-b953-e91b9e2f0b50_carw_202x158x640.png?h=e7491ef09cb7f6681d4c0e7c117665e8"},
    {num : "3", onoff:"on",categories : "Commercial", title : "Don't regret", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/24ac2ed4-8c4f-45f2-a948-4cedca36cf84_carw_202x158x640.png?h=632f30354b342fada1415146cf12deae"},
    {num : "4", onoff:"on",categories : "Commercial", title : "Eternally Reborn", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "5", onoff:"on",categories : "Commercial", title : "G4G", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/93ec7f87-0abc-4a6a-bf14-e24af232c7de_rwc_795x204x2244x1754x640.png?h=e96d56a0f10f5b6ce1b22670aebf54ef"},
    {num : "6", onoff:"on",categories : "Short Film", title : "The Dinner After", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/5abc2562-d158-44f9-9ab7-411b3d87c542_rwc_540x0x2762x2160x640.jpg?h=187bb2b3908c5288a6fa122b430b5ab9"},
    {num : "7", onoff:"on",categories : "Short Film", title : "Virile", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/2186f3bd-8428-4430-b53d-98221823a3c3_rwc_473x0x1097x858x1097.jpg?h=bdda75f70e0335409203ddd903ddbbdd"},
    {num : "8", onoff:"on",categories : "Short Film", title : "Deep Clean", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/d541beb3-be1c-4b96-8741-0c58f32fa67f_rwc_473x0x1097x858x1097.jpg?h=fe3880f473d61e9253a818c54864fe0c"},
    {num : "9", onoff:"on",categories : "Short Film", title : "Terminus", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/36b55cf6-8e29-4817-970d-eebc9981cf72_car_202x158.jpg?h=995e59061a8725e67c5c0ef5688d81d7"},
    {num : "10", onoff:"on",categories : "Documentary", title : "In the shadow of giants", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/16288280-9439-40ee-bc17-a0a9a1961c0f_rwc_270x0x1381x1080x1381.jpg?h=c7e1ae9787e5e72da72a15caba1d9e3d"},
    {num : "11", onoff:"on",categories : "Short Film", title : "Keeper", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/e1e6f1d7-d096-415c-ac91-887e569b12c2_car_202x158.jpg?h=1d922b52020013ec581cd94c54ece63b"},
    {num : "12", onoff:"on",categories : "Short Film", title : "ECA", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/b673d75d-1f30-4b5f-a869-2e087ef47aaa_car_202x158.jpg?h=e9433b5011108fa6944f4e50aed5d600"},
    {num : "13", onoff:"on",categories : "Commercial", title : "Breakable", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/68b5d3b5-c645-402f-bffb-50ec57d801cb_rwc_473x0x1097x858x1097.jpg?h=1fe7a6a797d5ccd57146e6bd2db94732"},
    {num : "14", onoff:"on",categories : "Documentary Film", title : "Blue Mind", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/4afc94f5-37da-438b-bb0c-688d56f5b26f_car_202x158.jpg?h=e6405cb7caf61761ca0eb5f8c5dfd380"},
    {num : "15", onoff:"on",categories : "Commercial", title : "Too Soft", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/13091e97-1692-4a30-9280-b15d9bdea661_car_202x158.jpg?h=54bb11c982239ceb1a5e2d6b0cf7e56a"},
    {num : "16", onoff:"on",categories : "Short Film Animation", title : "Ascent", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/7f8dd7f1-dacf-4fd6-b103-36b7e7a640fa_car_202x158.jpg?h=4db1bf92faeb631c612c33df504f669f"},
    {num : "17", onoff:"on",categories : "Short Film", title : "Nome and Worm", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/e1fcd0df-7fba-42b2-92fe-74946f49ad4b_car_202x158.jpg?h=8abaa567464170f390d2dc08dbc07bc6"},
    {num : "18", onoff:"on",categories : "Documentary", title : "Outsiders", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/4964ba70-1057-489b-bce8-d2c419c7b1af_car_202x158.jpg?h=df2de1185d9ba2bd4ae1b4401859eb05"},
    {num : "19", onoff:"on",categories : "Film Restoration", title : "Dreamland Express", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/75369e80-2a18-4fe0-92dc-c64d58dc8d2d_car_202x158.jpg?h=3353da62e65e6d03837e7d43812e2374"},
    {num : "20", onoff:"on",categories : "Short Film", title : "Eat, Chips, Love", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/a4c3f46c-d95f-4e40-b344-296ba4969f4a_car_202x158.jpg?h=5c41737a2d0c0780e8260d3d0da869a0"},
    {num : "", onoff:"off",categories : "분류", title : "제목", img : "썸네일 이미지"},
]
// -------------------------------------
const itemContainer = document.querySelector('.item-container');
// "on" 상태인 항목만 필터링
const onItems = itemDB.filter(item => item.onoff === "on");
// -------------------------------------
function displayItems() {
    const itemsHTML = onItems.map(item => `
        <a href="../page/${item.num}.html" class="witem">
            <div class="witem-thumb">
                <img src="${item.img}" alt="product thumbnail" class="witem-img">
            </div>
            <div class="witem-info">
                <span class="witem-categories">${item.categories}</span>
                <div class="witem-title">${item.title}</div>
            </div>
        </a>
        `).join('');
        
        itemContainer.innerHTML = itemsHTML;
}
    
// -------------------------------------
//최초 프린팅
displayItems();
// -------------------------------------
// 고유한 카테고리 종류 추출
const categories = [...new Set(itemDB.filter(item => item.onoff === "on").map(item => item.categories))];
// -------------------------------------
const filterDropdown = document.querySelector('.filter-dropdown');
filterDropdown.innerHTML = `<option value="all">All</option>` + 
    categories.map(category => `<option value="${category}">${category}</option>`).join('');

filterDropdown.addEventListener('change', event => {
    const selectedCategory = event.target.value;
    const filteredItems = selectedCategory === 'all' 
        ? onItems 
        : onItems.filter(item => item.categories === selectedCategory);
    renderItems(filteredItems);
});
