const itemDB = [
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "2", onoff:"on",categories : "Music Video", title : "O-He", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/36816b8f-b1c3-45d2-b953-e91b9e2f0b50_carw_202x158x640.png?h=e7491ef09cb7f6681d4c0e7c117665e8"},
    {num : "3", onoff:"on",categories : "Commercial", title : "Don't regret", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/24ac2ed4-8c4f-45f2-a948-4cedca36cf84_carw_202x158x640.png?h=632f30354b342fada1415146cf12deae"},
    {num : "4", onoff:"on",categories : "Commercial", title : "Eternally Reborn", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "5", onoff:"on",categories : "Commercial", title : "G4G", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/93ec7f87-0abc-4a6a-bf14-e24af232c7de_rwc_795x204x2244x1754x640.png?h=e96d56a0f10f5b6ce1b22670aebf54ef"},
    {num : "6", onoff:"on",categories : "Short Film", title : "The Dinner After", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/5abc2562-d158-44f9-9ab7-411b3d87c542_rwc_540x0x2762x2160x640.jpg?h=187bb2b3908c5288a6fa122b430b5ab9"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "1", onoff:"on",categories : "Music Video", title : "Hot December", img : "https://cdn.myportfolio.com/39336d17-63cf-4d54-8cc4-5e93f4ae1698/fd956ade-1172-4737-b038-6e6e7fe9c898_carw_202x158x640.png?h=eb0780a66297ad6e9c6073316396cb2c"},
    {num : "2", onoff:"on",categories : "Music Video", title : "O-He", img : ""},
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