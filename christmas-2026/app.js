'use strict';
const products=[
 {name:'ダーズンローズ ストーリー／レッド',category:'12本のバラに、12の誓い',caption:'大切な人へ、まっすぐな想いを。',tile:0,badge:'昨シーズン 売上 No.1'},
 {name:'ダイヤモンドローズ ラブハート／ブライトレッド',category:'きらめく一輪のフラワーギフト',caption:'心に残る、華やかな赤。',tile:1},
 {name:'リトルベル ディズニーエディション（美女と野獣）',category:'ディズニーコレクション',caption:'ときめく物語を、贈りものに。',tile:2},
 {name:'デスティニーローズ（1本立ち）／ブライトレッド',category:'気持ちを伝える、一輪のバラ',caption:'一輪に込める、特別な気持ち。',tile:3},
 {name:'ザ・ワン／ブライトレッド',category:'かけがえのない人へ',caption:'あなたは、たったひとりの人。',tile:4},
 {name:'デスティニーローズ ディズニーエディション（美女と野獣）',category:'ディズニーコレクション',caption:'ふたりの記念日に、花の魔法を。',tile:5},
 {name:'ダーズンローズ ドゥロワー（ラグジュアリー）／レッド',category:'特別な日を彩る、12本のバラ',caption:'想いをほどく、贅沢な贈りもの。',tile:6,badge:'昨シーズンご好評'},
 {name:'パナッシュ（W67-H52）／レッド108本',category:'108本のバラで伝える愛',caption:'一生に一度の「結婚してください」。',tile:7}
];
const officialProductSources=[
 ['https://www.amorosa-shop.jp/c/dozenrose/story/AMDR-ST-30','https://mdrn0087.itembox.cloud/product/005/000000000519/000000000519-01.jpg'],
 ['https://www.amorosa-shop.jp/c/155738/loveheart/AM130DW-LH','https://mdrn0087.itembox.cloud/product/003/000000000302/000000000302-01.jpg'],
 ['https://www.amorosa-shop.jp/c/155738/180276/DSLB-30','https://mdrn0087.itembox.cloud/product/004/000000000469/000000000469-01.jpg'],
 ['https://www.amorosa-shop.jp/c/180024/180248/AM20','https://mdrn0087.itembox.cloud/product/002/000000000275/000000000275-01.jpg'],
 ['https://www.amorosa-shop.jp/c/155738/180275/THE_ONE_BRIGHTRED','https://mdrn0087.itembox.cloud/product/001/000000000176/000000000176-01.jpg'],
 ['https://www.amorosa-shop.jp/c/180024/180248/DSDR-30','https://mdrn0087.itembox.cloud/product/004/000000000476/000000000476-01.jpg'],
 ['https://www.amorosa-shop.jp/c/dozenrose/dozenrosedw/AMDRL-DW-30','https://mdrn0087.itembox.cloud/product/003/000000000382/000000000382-01.jpg'],
 ['https://www.amorosa-shop.jp/c/180024/180036/AMPN6752-30','https://mdrn0087.itembox.cloud/product/005/000000000560/000000000560-01.jpg']
];
products.forEach((p,i)=>{p.url=officialProductSources[i][0];p.image=officialProductSources[i][1];});
const grid=document.querySelector('#gift-grid');
const escapeHTML=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let favorites=[];try{favorites=JSON.parse(localStorage.getItem('christmas2026-favorites')||'[]').filter(i=>Number.isInteger(i)&&products[i]);}catch{}
grid.innerHTML=products.map((p,i)=>`<article class="product-card"><div class="product-visual">${p.badge?`<span class="product-badge">${p.badge}</span>`:''}<button class="product-image-button" data-product="${i}" aria-label="${escapeHTML(p.name)}を見る"><img class="product-photo" src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy" decoding="async"></button><button class="product-favorite" data-favorite="${i}" aria-label="${escapeHTML(p.name)}をお気に入りに登録" aria-pressed="${favorites.includes(i)}">${favorites.includes(i)?'♥':'♡'}</button></div><p class="product-category">${p.category}</p><h3>${p.name}</h3><p class="product-caption">${p.caption}</p><button class="product-link" data-product="${i}">ギフトを見る <span>→</span></button></article>`).join('');
document.querySelector('#common-ranking').innerHTML=[0,1,3,4].map(i=>`<button class="common-rank-card" data-product="${i}"><div class="common-rank-image"><img class="product-photo" src="${products[i].image}" alt="${escapeHTML(products[i].name)}" loading="lazy" decoding="async"></div><h3>${products[i].name}</h3><span>ギフトを見る →</span></button>`).join('');
document.querySelectorAll('[data-delivery-open]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#delivery-details').open=true;}));
const dialog=document.querySelector('#detail-dialog'),content=document.querySelector('#dialog-content');
function openDialog(html){content.innerHTML=html;if(!dialog.open)dialog.showModal();}
function productDialog(i){const p=products[i];if(!p)return;openDialog(`<div class="dialog-product-image"><img class="product-photo" src="${p.image}" alt="${escapeHTML(p.name)}" decoding="async"></div><p class="eyebrow">CHRISTMAS GIFT COLLECTION</p><h2 class="dialog-title">${p.name}</h2><p class="dialog-text">${p.caption}</p><a class="button red" href="${p.url}" target="_blank" rel="noopener noreferrer">公式商品ページを見る <span>↗</span></a><p class="dialog-note">公式商品ページに掲載されている商品写真を使用しています。最新の価格・仕様・在庫は、公式商品ページでご確認ください。</p>`);}
const modals={
 coupon:['EARLY CHRISTMAS','11月30日までのご注文で、200円OFF。','クリスマスの準備は、お早めに。2026年11月30日（月）までのご注文にご利用いただける200円OFFクーポンです。','クーポンコード・適用条件・取得先は確認後に反映します。現時点ではクーポンの取得・適用はできません。'],
 disney:['DISNEY COLLECTION','物語のときめきを、花に込めて。','リトルベルやデスティニーローズのディズニーエディションを掲載するコレクションです。','掲載予定は4商品です。正式な4商品の写真・商品情報・承認済み素材を確認して反映します。写真は公式商品ページの掲載画像です。'],
 destiny:['DISNEY COLLECTION','デスティニーローズ ディズニーエディション','美女と野獣の世界観を楽しむ、特別な日のフラワーギフト。','写真は公式商品ページの掲載画像です。最新の商品情報は公式サイトでご確認ください。'],
 dozen:['DOZEN ROSES','12本のバラに、12の想いを。','ダーズンローズ フォーエバーラブ（プレミアム）／レッド、ザ・ワン／エクセレントブルーほか、4商品を掲載する予定です。','商品一覧・価格・リンクは正式な掲載商品リストを確認後に反映します。'],
 engraving:['PERSONAL GIFT','名前や記念日を添えた、特別な贈りもの。','デスティニーローズ（1本立ち）／ブライトレッド、ザ・ワン／ブライトレッドほか、刻印に対応したギフト4商品を掲載する予定です。','刻印の文字数・内容・制作日数・料金は商品ごとの正式なご案内を反映します。'],
 ring:['RING CASE','かけがえのない約束に、花を添えて。','ダーズンローズ フォーエバーラブ（プレミアム）／レッド、ザ・ワン／エクセレントブルーほか、リングケース4商品を掲載する予定です。','正式な掲載商品・写真・価格・リンクを確認後に反映します。'],
 egift:['CHRISTMAS eGIFT','想いを届ける、もうひとつの贈り方。','対象商品のeギフトなら、住所を知らない相手にもメールやSNSで贈れます。クリスマスのお届けをご希望の場合は、受け取る方に12月22日（火）までにお届け先・お届け日をお選びいただけるよう、早めにお贈りください。','eギフト対象4商品の写真・価格・リンクを確認後に反映します。'],
 'article-flowers':['CHRISTMAS JOURNAL','クリスマスに人気な花のプレゼント14選','クリスマスに贈る花を選ぶヒントを紹介する関連記事です。','原稿の確認完了後、記事本文・商品カード・特集ページへの導線を反映します。'],
 'article-choose':['CHRISTMAS JOURNAL','クリスマスプレゼント、迷ったらこれ。','大切な人へのプレゼント選びをお手伝いする関連記事です。','原稿の確認完了後、正式な記事へリンクします。'],
 'article-dozen':['FLOWER STORY','ダーズンローズとは？','12本のバラに込められた想いを紹介する関連記事です。','原稿の確認完了後、正式な記事へリンクします。']
};
function updateCount(){const el=document.querySelector('#favorite-count');el.textContent=favorites.length;el.hidden=!favorites.length;}
updateCount();
document.addEventListener('click',e=>{const product=e.target.closest('[data-product]');if(product){productDialog(Number(product.dataset.product));return;}const favorite=e.target.closest('[data-favorite]');if(favorite){const i=Number(favorite.dataset.favorite);favorites=favorites.includes(i)?favorites.filter(x=>x!==i):[...favorites,i];try{localStorage.setItem('christmas2026-favorites',JSON.stringify(favorites));}catch{}favorite.setAttribute('aria-pressed',String(favorites.includes(i)));favorite.textContent=favorites.includes(i)?'♥':'♡';updateCount();return;}const modal=e.target.closest('[data-modal]');if(modal){const m=modals[modal.dataset.modal];if(m)openDialog(`<p class="eyebrow">${m[0]}</p><h2 class="dialog-title">${m[1]}</h2><p class="dialog-text">${m[2]}</p><p class="dialog-note">${m[3]}</p>`);}});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();dialog.close();}});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('[data-top]').addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
document.querySelector('[data-favorites]').addEventListener('click',()=>openDialog(`<p class="eyebrow">YOUR FAVORITES</p><h2 class="dialog-title">お気に入りのギフト</h2>${favorites.length?`<ul class="favorite-list">${favorites.map(i=>`<li><button data-product="${i}">${products[i].name} →</button></li>`).join('')}</ul>`:'<p class="dialog-text">気になるギフトの♡を押すと、ここからまとめてご覧いただけます。</p>'}`));
document.querySelectorAll('[data-search]').forEach(button=>button.addEventListener('click',()=>{openDialog('<p class="eyebrow">FIND YOUR GIFT</p><h2 class="dialog-title">ギフトを探す</h2><label for="gift-search">商品名・キーワード</label><input type="search" class="dialog-search" id="gift-search" placeholder="バラ、ディズニー、108本など"><div class="search-results" aria-live="polite"></div>');const input=document.querySelector('#gift-search');const render=()=>{const found=products.map((p,i)=>({...p,i})).filter(p=>(p.name+p.category).includes(input.value.trim()));document.querySelector('.search-results').innerHTML=found.length?found.map(p=>`<button data-product="${p.i}">${p.name} →</button>`).join(''):'<p>該当するギフトが見つかりませんでした。</p>';};input.addEventListener('input',render);render();input.focus();}));
// ?date=2026-12-21 allows review of the proposed scheduled express-delivery state.
const reviewDate=new URLSearchParams(location.search).get('date');
const today=reviewDate&&/^\d{4}-\d{2}-\d{2}$/.test(reviewDate)?reviewDate:new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo'}).format(new Date());
const express=today>='2026-12-21'&&today<='2026-12-25';
document.querySelector('#express-note').hidden=!express;document.querySelector('#express-details').hidden=!express;
