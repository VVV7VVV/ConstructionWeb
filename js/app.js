/* DNV Construction - code mẫu, dữ liệu tượng trưng, dễ thay sau.
   QUAN TRỌNG: mật khẩu Admin dưới đây chỉ là bản demo.
   Trước khi đưa lên thật, hãy đổi mật khẩu và chuyển sang đăng nhập phía máy chủ. */
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123"; // demo only - đổi trước khi dùng thật

const I18N = {
  vi: {
    phone_label:"Hotline", slogan:"Kiến tạo công trình vững bước tương lai",
    nav_home:"TRANG CHỦ", nav_about:"GIỚI THIỆU", nav_about_us:"Về chúng tôi", nav_capacity:"Năng lực và nhân sự",
    nav_services:"DỊCH VỤ", nav_projects:"DỰ ÁN", nav_news:"TIN TỨC", nav_contact:"LIÊN HỆ", nav_admin:"Quản trị",
    hero_title:"THIẾT KẾ KẾT CẤU THÉP<br>CHÍNH XÁC - HIỆU QUẢ - ĐÚNG TIÊU CHUẨN",
    hero_sub:"Triển khai bản vẽ kỹ thuật cho nhà máy, nhà công nghiệp và công trình cao tầng.",
    hero_btn1:"Xem dịch vụ", hero_btn2:"Gửi yêu cầu", read_more:"Xem thêm →",
    about_title:"VỀ CHÚNG TÔI", about_lead:"Doanh nghiệp chuyên sâu về thiết kế kết cấu thép và triển khai bản vẽ kỹ thuật, hướng tới trở thành đơn vị triển khai bản vẽ kết cấu thép hàng đầu Việt Nam, phục vụ khách hàng trong nước và quốc tế.",
    services_title:"DỊCH VỤ", all_services:"Tất cả dịch vụ →", projects_title:"DỰ ÁN TIÊU BIỂU", all_projects:"Tất cả dự án →",
    filter_all:"Tất cả", filter_done:"Đã hoàn thành", filter_doing:"Đang thi công",
    news_title:"TIN TỨC", partners_title:"ĐỐI TÁC", contact_title:"LIÊN HỆ VỚI CHÚNG TÔI",
    director_title:"Lời ngỏ của Giám đốc", director_text:"Nội dung mẫu: chúng tôi đặt sự chính xác của từng bản vẽ lên hàng đầu, làm việc có trách nhiệm với từng công trình và luôn cải tiến quy trình để bàn giao đúng tiến độ cho khách hàng.",
    vision_title:"Tầm nhìn - Sứ mệnh", vision_text:"Tầm nhìn mẫu: trở thành đơn vị triển khai bản vẽ kết cấu thép hàng đầu Việt Nam và là đối tác tin cậy của doanh nghiệp trong nước, Nhật Bản và quốc tế. Sứ mệnh mẫu: cung cấp bản vẽ chính xác, tối ưu cho thi công và đúng tiến độ.",
    values_title:"Giá trị cốt lõi", capacity_text:"Đội ngũ kỹ sư am hiểu tiêu chuẩn thiết kế, nguyên lý chế tạo và lắp dựng kết cấu thép, thành thạo các phần mềm chuyên ngành dưới đây (nội dung mẫu, bạn thay bằng hồ sơ thật sau).",
    search_placeholder:"Tìm dịch vụ...", send_request:"GỬI YÊU CẦU", form_name:"Họ và tên *", form_phone:"Số điện thoại *", form_subject:"Tiêu đề", form_content:"Nội dung *", form_send:"Gửi tin nhắn",
    meet_direct:"BẠN CẦN GẶP TRỰC TIẾP", map_placeholder:"Bản đồ mẫu - thay bằng Google Maps thật sau",
    admin_login:"Đăng nhập quản trị", admin_demo_note:"Bản demo: đổi mật khẩu trong file js/app.js trước khi đưa lên thật.",
    admin_user:"Tài khoản", admin_pass:"Mật khẩu", admin_login_btn:"Đăng nhập", admin_welcome:"Bảng quản trị", admin_reset:"Khôi phục dữ liệu mẫu", admin_logout:"Đăng xuất", admin_messages:"Tin nhắn",
    footer_desc:"Thiết kế kết cấu thép và triển khai bản vẽ kỹ thuật.", footer_contact:"Liên hệ", footer_links:"Liên kết", sample_note:"Ảnh và nội dung mẫu, thay sau.", call_now:"📞 Gọi ngay"
  },
  ja: {
    phone_label:"ホットライン", slogan:"未来へつながる堅牢な建物を創造する",
    nav_home:"ホーム", nav_about:"会社概要", nav_about_us:"私たちについて", nav_capacity:"能力と人材",
    nav_services:"サービス", nav_projects:"プロジェクト", nav_news:"ニュース", nav_contact:"お問い合わせ", nav_admin:"管理",
    hero_title:"鉄骨構造設計<br>正確・効率的・基準適合",
    hero_sub:"工場、産業施設、高層ビルの技術図面を作成します。",
    hero_btn1:"サービスを見る", hero_btn2:"お問い合わせ", read_more:"もっと見る →",
    about_title:"私たちについて", about_lead:"鉄骨構造設計と技術図面の専門企業です。ベトナム有数の図面作成会社を目指し、国内外のお客様にサービスを提供します。",
    services_title:"サービス", all_services:"すべてのサービス →", projects_title:"代表的なプロジェクト", all_projects:"すべてのプロジェクト →",
    filter_all:"すべて", filter_done:"完了", filter_doing:"施工中",
    news_title:"ニュース", partners_title:"パートナー", contact_title:"お問い合わせ",
    director_title:"社長挨拶", director_text:"サンプル文章：私たちは図面の正確さを最優先し、責任を持って各プロジェクトに取り組み、納期を守るために常に改善しています。",
    vision_title:"ビジョン・ミッション", vision_text:"サンプル文章：ベトナム有数の鉄骨図面会社となり、国内外の信頼できるパートナーになること。正確で施工に最適化された図面を納期通りに提供します。",
    values_title:"コアバリュー", capacity_text:"設計基準、製造・組立の原理を理解し、以下の専門ソフトを使いこなす技術者チームです（サンプル内容です。後で実際の情報に置き換えてください）。",
    search_placeholder:"サービスを検索...", send_request:"お問い合わせフォーム", form_name:"お名前 *", form_phone:"電話番号 *", form_subject:"件名", form_content:"内容 *", form_send:"送信",
    meet_direct:"直接お会いになりたい方へ", map_placeholder:"地図サンプル - 後で本物のGoogleマップに置き換えてください",
    admin_login:"管理者ログイン", admin_demo_note:"デモ版：本番公開前に js/app.js でパスワードを変更してください。",
    admin_user:"ユーザー名", admin_pass:"パスワード", admin_login_btn:"ログイン", admin_welcome:"管理画面", admin_reset:"サンプルデータを復元", admin_logout:"ログアウト", admin_messages:"メッセージ",
    footer_desc:"鉄骨構造設計と技術図面の作成。", footer_contact:"連絡先", footer_links:"リンク", sample_note:"画像と内容はサンプルです。後で差し替えてください。", call_now:"📞 今すぐ電話"
  }
};

const IMG = {
  hero: [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
  ],
  steel: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=900&q=80",
  factory: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=80",
  building: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
};

const DEFAULT_DATA = {
  serviceCategories: [
    {id:"thiet-ke", vi:"Thiết kế", ja:"設計"},
    {id:"ban-ve", vi:"Bản vẽ", ja:"図面"},
    {id:"tu-van", vi:"Tư vấn", ja:"コンサルティング"},
    {id:"ho-tro", vi:"Hỗ trợ kỹ thuật", ja:"技術サポート"}
  ],
  services: [
    {id:1, categoryId:"thiet-ke", img:IMG.steel, vi:{title:"Bản vẽ chi tiết gia công kết cấu thép", desc:"Thiết kế mới, triển khai bản vẽ chi tiết cho nhà máy, nhà công nghiệp, nhà kho và nhà thép tiền chế."}, ja:{title:"鉄骨加工詳細図", desc:"工場、産業施設、倉庫、プレハブ鉄骨建物の新規設計と詳細図を作成します。"}},
    {id:2, categoryId:"ban-ve", img:IMG.factory, vi:{title:"Bản vẽ lắp dựng", desc:"Triển khai bản vẽ lắp dựng theo yêu cầu thực tế tại công trường."}, ja:{title:"組立図", desc:"現場の実際の条件に合わせた組立図を作成します。"}},
    {id:3, categoryId:"ban-ve", img:IMG.building, vi:{title:"Kiểm tra và hiệu chỉnh bản vẽ", desc:"Kiểm tra, hiệu chỉnh bản vẽ do khách hàng gửi sang trước khi đưa vào sản xuất."}, ja:{title:"図面チェックと修正", desc:"お客様から送られた図面を製造前にチェックし、修正します。"}},
    {id:4, categoryId:"ho-tro", img:IMG.steel, vi:{title:"Hỗ trợ kỹ thuật từ xa", desc:"Kết nối kỹ thuật, trao đổi thông tin và xử lý vấn đề kỹ thuật từ xa."}, ja:{title:"リモート技術サポート", desc:"技術的な連絡、情報交換、遠隔での問題対応を行います。"}},
    {id:5, categoryId:"tu-van", img:IMG.factory, vi:{title:"Tư vấn kỹ thuật - cải tiến thiết kế", desc:"Tư vấn kỹ thuật và cải tiến thiết kế cho phù hợp với thi công thực tế."}, ja:{title:"技術コンサルティング・設計改善", desc:"施工に適した設計改善と技術コンサルティングを行います。"}}
  ],
  projects: [
    {id:1, status:"done", img:IMG.building, vi:{title:"Tòa nhà cao tầng tại Osaka", desc:"Dự án mẫu: tòa nhà cao tầng."}, ja:{title:"大阪の高層ビル", desc:"サンプル：高層ビル。"}},
    {id:2, status:"done", img:IMG.factory, vi:{title:"Siêu thị Coop tại Sapporo, Hokkaido", desc:"Dự án mẫu: siêu thị."}, ja:{title:"札幌・北海道のコープスーパー", desc:"サンプル：スーパーマーケット。"}},
    {id:3, status:"doing", img:IMG.building, vi:{title:"Tòa nhà nghiên cứu công nghệ tại Tokyo", desc:"Dự án mẫu đang thi công: tòa nhà nghiên cứu công nghệ."}, ja:{title:"東京の技術研究ビル", desc:"サンプル（施工中）：技術研究ビル。"}}
  ],
  home: {slides: IMG.hero.map(src=>({img:src})),
    vi:{title:"THIẾT KẾ KẾT CẤU THÉP - CHÍNH XÁC - HIỆU QUẢ - ĐÚNG TIÊU CHUẨN", sub:"Triển khai bản vẽ kỹ thuật cho nhà máy, nhà công nghiệp và công trình cao tầng."},
    ja:{title:"鉄骨構造設計 - 正確・効率的・基準適合", sub:"工場、産業施設、高層ビルの技術図面を作成します。"},
    about: {
      vi:{lead:"Doanh nghiệp chuyên sâu về thiết kế kết cấu thép và triển khai bản vẽ kỹ thuật.", cards:[{title:"Tầm nhìn - Sứ mệnh", desc:"Trở thành đơn vị triển khai bản vẽ kết cấu thép hàng đầu Việt Nam."},{title:"Năng lực con người", desc:"Đội ngũ kỹ sư giàu kinh nghiệm, thành thạo phần mềm chuyên ngành."},{title:"Môi trường làm việc", desc:"Làm việc chuyên nghiệp, trách nhiệm và liên tục cải tiến."}]},
      ja:{lead:"鉄骨構造設計と技術図面の専門企業です。", cards:[{title:"ビジョン・ミッション", desc:"ベトナム有数の鉄骨図面会社を目指します。"},{title:"人材の能力", desc:"経験豊富な技術者チーム、専門ソフトを使いこなします。"},{title:"職場環境", desc:"プロフェッショナルで責任感があり、継続的に改善します。"}]}
    }},
  capacity: {
    software:"Tekla Structures, REAL4, AutoCAD, Jw_CAD, Arris",
    vi:{text:"Đội ngũ kỹ sư am hiểu tiêu chuẩn thiết kế, nguyên lý chế tạo và lắp dựng kết cấu thép, thành thạo các phần mềm chuyên ngành dưới đây.", cards:[{title:"Kỹ sư kết cấu thép", desc:"Am hiểu tiêu chuẩn và nguyên lý chế tạo - lắp dựng."},{title:"Phần mềm chuyên ngành", desc:"Tekla Structures, AutoCAD, Jw_CAD và các công cụ khác."},{title:"Làm việc với khách Nhật", desc:"Trao đổi kỹ thuật rõ ràng, bàn giao đúng tiến độ."}]},
    ja:{text:"設計基準、製造・組立の原理を理解し、以下の専門ソフトを使いこなす技術者チームです。", cards:[{title:"鉄骨技術者", desc:"基準と製造・組立の原理を理解しています。"},{title:"専門ソフト", desc:"Tekla Structures、AutoCAD、Jw_CADなどを使いこなします。"},{title:"日本のお客様との連携", desc:"技術的なやり取りが明確で、納期を守ります。"}]}
  },
  about: {image: IMG.building,
    main: {vi:"DNV Construction là doanh nghiệp chuyên sâu trong lĩnh vực thiết kế kết cấu thép và triển khai bản vẽ kỹ thuật. Đoạn văn này sửa được trong Admin > Giới thiệu.", ja:"DNV Constructionは鉄骨構造設計と技術図面の専門企業です。この文章は管理画面 > 会社概要で編集できます。"},
    vi:{lead:"Doanh nghiệp chuyên sâu về thiết kế kết cấu thép và triển khai bản vẽ kỹ thuật, hướng tới trở thành đơn vị triển khai bản vẽ kết cấu thép hàng đầu Việt Nam, phục vụ khách hàng trong nước và quốc tế.", director:"Nội dung mẫu: chúng tôi đặt sự chính xác của từng bản vẽ lên hàng đầu, làm việc có trách nhiệm với từng công trình và luôn cải tiến quy trình để bàn giao đúng tiến độ cho khách hàng.", vision:"Tầm nhìn mẫu: trở thành đơn vị triển khai bản vẽ kết cấu thép hàng đầu Việt Nam và là đối tác tin cậy của doanh nghiệp trong nước, Nhật Bản và quốc tế. Sứ mệnh mẫu: cung cấp bản vẽ chính xác, tối ưu cho thi công và đúng tiến độ.", values:"CHÍNH XÁC, TRÁCH NHIỆM, TÔN TRỌNG, HỢP TÁC, LIÊN TỤC CẢI TIẾN"},
    ja:{lead:"鉄骨構造設計と技術図面の専門企業です。ベトナム有数の図面作成会社を目指し、国内外のお客様にサービスを提供します。", director:"サンプル文章：私たちは図面の正確さを最優先し、責任を持って各プロジェクトに取り組み、納期を守るために常に改善しています。", vision:"サンプル文章：ベトナム有数の鉄骨図面会社となり、国内外の信頼できるパートナーになること。正確で施工に最適化された図面を納期通りに提供します。", values:"正確, 責任, 尊重, 協力, 継続的改善"}},
  partners: [1,2,3,4,5,6,7].map(n=>({id:n, name:"Partner "+n, img:""})),
  news: [
    {id:1, img:IMG.building, vi:{title:"Dự án tòa nhà nghiên cứu công nghệ tại Tokyo", desc:"Tin mẫu: cập nhật tiến độ triển khai bản vẽ cho dự án tại Tokyo."}, ja:{title:"東京の技術研究ビルプロジェクト", desc:"サンプルニュース：東京プロジェクトの図面進捗について。"}},
    {id:2, img:IMG.factory, vi:{title:"Dự án siêu thị tại Sapporo", desc:"Tin mẫu: bàn giao bản vẽ cho dự án siêu thị tại Sapporo."}, ja:{title:"札幌のスーパープロジェクト", desc:"サンプルニュース：札幌プロジェクトの図面納品について。"}},
    {id:3, img:IMG.steel, vi:{title:"Năng lực và nhân sự", desc:"Tin mẫu: giới thiệu đội ngũ kỹ sư và phần mềm chuyên ngành."}, ja:{title:"能力と人材", desc:"サンプルニュース：技術者チームと専門ソフトの紹介。"}}
  ],
  contact: {address:"Tầng 6A, Số 18, Phố Dương Khuê, Phường Từ Liêm, Hà Nội, Việt Nam", phone:"0392506586", email:"dnvc@dnvconstruction.com.vn"},
  messages: []
};

let lang = localStorage.getItem("dnv_lang") || "vi";
let data = loadData();
// Tương thích dữ liệu cũ: bổ sung các mục mới nếu chưa có
if(!data.home) data.home = JSON.parse(JSON.stringify(DEFAULT_DATA.home));
if(!data.home.about) data.home.about = JSON.parse(JSON.stringify(DEFAULT_DATA.home.about));
if(!data.about) data.about = JSON.parse(JSON.stringify(DEFAULT_DATA.about));
if(!data.about.main) data.about.main = JSON.parse(JSON.stringify(DEFAULT_DATA.about.main));
if(!data.capacity) data.capacity = JSON.parse(JSON.stringify(DEFAULT_DATA.capacity));
if(!data.serviceCategories) data.serviceCategories = JSON.parse(JSON.stringify(DEFAULT_DATA.serviceCategories));
if(!data.partners) data.partners = JSON.parse(JSON.stringify(DEFAULT_DATA.partners));
if(!data.contact) data.contact = JSON.parse(JSON.stringify(DEFAULT_DATA.contact));
if(!data.messages) data.messages = [];
let projectFilter = "all";
let isAdmin = sessionStorage.getItem("dnv_admin") === "1";

function loadData(){
  try { const raw = localStorage.getItem("dnv_data_v1"); if(raw) return JSON.parse(raw); } catch(e){}
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
function saveData(){ localStorage.setItem("dnv_data_v1", JSON.stringify(data)); renderAll(); }
function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.vi[key] || key; }
function esc(s){ return String(s||"").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
let toastTimer;
function showToast(msg){
  const el = document.getElementById("toast"); if(!el) return;
  el.textContent = msg; el.classList.remove("hidden");
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>el.classList.add("hidden"), 3500);
}
function toastDone(action){
  // action: added / edited / deleted
  const map = {added: lang==="ja" ? "追加しました。" : "Đã thêm thành công!", edited: lang==="ja" ? "更新しました。" : "Đã sửa thành công!", deleted: lang==="ja" ? "削除しました。" : "Đã xóa thành công!"};
  showToast(map[action] || map.edited);
}

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{ el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
  localStorage.setItem("dnv_lang", lang);
}
document.querySelectorAll(".lang-btn").forEach(b=>b.addEventListener("click", ()=>{ lang=b.dataset.lang; applyLang(); renderAll(); }));

/* Router: #/home, #/about, #/capacity, #/services, #/projects, #/news, #/contact, #/admin */
function router(){
  const page = (location.hash.replace("#/","") || "home").split("/")[0];
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active", p.dataset.page===page));
  document.querySelectorAll("[data-nav]").forEach(a=>a.classList.toggle("active", a.dataset.nav===page));
  document.getElementById("mobileNav").classList.remove("open");
  window.scrollTo(0,0);
  if(page==="admin") renderAdmin();
}
window.addEventListener("hashchange", router);
document.getElementById("menuToggle").addEventListener("click", ()=>document.getElementById("mobileNav").classList.toggle("open"));

/* Hero slider - ảnh lấy từ data.home.slides, sửa được trong Admin > Trang chủ */
let heroIdx = 0, heroTimer;
const heroSlidesEl = document.getElementById("heroSlides");
const dotsEl = document.getElementById("heroDots");
function buildHero(){
  const slides = (data.home && data.home.slides && data.home.slides.length) ? data.home.slides : [{img:IMG.hero[0]}];
  heroSlidesEl.innerHTML = ""; dotsEl.innerHTML = ""; heroIdx = 0;
  slides.forEach((s,i)=>{ const img=document.createElement("img"); img.src=s.img; img.alt="Slide "+(i+1); if(i===0) img.classList.add("active"); heroSlidesEl.appendChild(img); });
  slides.forEach((_,i)=>{ const b=document.createElement("button"); if(i===0) b.classList.add("active"); b.onclick=()=>showHero(i); dotsEl.appendChild(b); });
}
function showHero(i){
  const n = (data.home && data.home.slides && data.home.slides.length) ? data.home.slides.length : 1;
  heroIdx = (i + n) % n;
  heroSlidesEl.querySelectorAll("img").forEach((im,j)=>im.classList.toggle("active", j===heroIdx));
  dotsEl.querySelectorAll("button").forEach((d,j)=>d.classList.toggle("active", j===heroIdx));
}
document.getElementById("heroPrev").onclick = ()=>{ showHero(heroIdx-1); restartHero(); };
document.getElementById("heroNext").onclick = ()=>{ showHero(heroIdx+1); restartHero(); };
function restartHero(){ clearInterval(heroTimer); heroTimer = setInterval(()=>showHero(heroIdx+1), 5000); }
restartHero();

function categoryLabel(id){ const c = (data.serviceCategories||[]).find(x=>x.id===id); return c ? (c[lang] || c.vi) : ""; }
// Ảnh nhiều ảnh: mỗi mục Dịch vụ / Dự án / Tin tức có thể có 1, 2, 5... ảnh. Dữ liệu cũ chỉ có 1 ảnh img vẫn dùng được.
function getImages(item){ if(item.images && item.images.length) return item.images; if(item.img) return [item.img]; return [IMG.steel]; }
const cardImgIndex = {};
window.cycleCardImg = function(ev, type, id, dir){
  ev.stopPropagation();
  const item = data[type].find(x=>x.id===id); if(!item) return;
  const imgs = getImages(item); const key = type+"-"+id;
  cardImgIndex[key] = ((cardImgIndex[key]||0) + dir + imgs.length) % imgs.length;
  const wrap = ev.target.closest(".card-img-wrap"); if(!wrap) return;
  wrap.querySelector("img").src = imgs[cardImgIndex[key]];
  const counter = wrap.querySelector(".card-counter"); if(counter) counter.textContent = (cardImgIndex[key]+1) + " / " + imgs.length;
};
function cardImgHtml(type, item){
  const imgs = getImages(item);
  const arrows = imgs.length > 1 ? `<button type="button" class="card-arrow prev" onclick="cycleCardImg(event,'${type}',${item.id},-1)">‹</button><button type="button" class="card-arrow next" onclick="cycleCardImg(event,'${type}',${item.id},1)">›</button><span class="card-counter">1 / ${imgs.length}</span>` : "";
  return `<div class="card-img-wrap"><img src="${esc(imgs[0])}" alt="">${arrows}</div>`;
}
let modalImgIndex = 0, modalItem = null;
window.cycleModalImg = function(dir){
  if(!modalItem) return; const imgs = getImages(modalItem);
  modalImgIndex = (modalImgIndex + dir + imgs.length) % imgs.length;
  const img = document.querySelector("#modalBody .modal-img-wrap img"); if(img) img.src = imgs[modalImgIndex];
  const c = document.querySelector("#modalBody .card-counter"); if(c) c.textContent = (modalImgIndex+1) + " / " + imgs.length;
};
function addMultiSlot(imgSrc){
  const wrap = document.getElementById("multiImageEditor"); if(!wrap) return;
  const div = document.createElement("div"); div.className = "multi-slot";
  div.innerHTML = `${imgSrc?`<img src="${esc(imgSrc)}" alt="">`:""}<label>Link ảnh</label><input class="multi-link" value="${imgSrc && !imgSrc.startsWith("data:") ? esc(imgSrc) : ""}" placeholder="https://..."><label>Hoặc upload ảnh</label><input class="multi-file" type="file" accept="image/*"><button type="button" class="small-btn danger" onclick="this.parentElement.remove()">Xóa ảnh này</button>`;
  wrap.appendChild(div);
}
window.addMultiSlot = function(){ addMultiSlot(""); };
function collectMultiImages(){
  const blocks = Array.from(document.querySelectorAll("#multiImageEditor .multi-slot"));
  const jobs = blocks.map(b=>{
    const link = b.querySelector(".multi-link").value.trim();
    const file = b.querySelector(".multi-file").files[0];
    if(file) return new Promise(res=>{ const r=new FileReader(); r.onload=()=>res(r.result); r.readAsDataURL(file); });
    return Promise.resolve(link);
  });
  return Promise.all(jobs).then(imgs=>imgs.filter(Boolean));
}
function cardService(s){ return `<article class="card">${cardImgHtml('services',s)}${s.categoryId?`<span class="tag">${esc(categoryLabel(s.categoryId))}</span>`:""}<h3>${esc(s[lang].title)}</h3><p>${esc(s[lang].desc)}</p><button type="button" class="small-btn" onclick="openDetail('services',${s.id})">${t("read_more")}</button></article>`; }
let serviceCategoryFilter = "all";
function renderServiceList(){
  const q = (document.getElementById("serviceSearch").value || "").toLowerCase();
  const list = data.services.filter(s=> (serviceCategoryFilter==="all" || s.categoryId===serviceCategoryFilter) && (s.vi.title.toLowerCase().includes(q) || (s.ja && s.ja.title.toLowerCase().includes(q))));
  document.getElementById("servicesList").innerHTML = list.map(cardService).join("");
  const wrap = document.getElementById("serviceCategoryFilters");
  wrap.innerHTML = `<button class="filter-btn ${serviceCategoryFilter==="all"?"active":""}" onclick="setServiceCategory('all')">${t("filter_all")}</button>` + (data.serviceCategories||[]).map(c=>`<button class="filter-btn ${serviceCategoryFilter===c.id?"active":""}" onclick="setServiceCategory('${c.id}')">${esc(c[lang]||c.vi)}</button>`).join("");
}
window.setServiceCategory = function(id){ serviceCategoryFilter = id; renderServiceList(); };
function cardProject(p){ return `<article class="card">${cardImgHtml('projects',p)}<span class="tag">${p.status==="done"?t("filter_done"):t("filter_doing")}</span><h3>${esc(p[lang].title)}</h3><p>${esc(p[lang].desc)}</p><button type="button" class="small-btn" onclick="openDetail('projects',${p.id})">${t("read_more")}</button></article>`; }
function cardNews(n){ return `<article class="card">${cardImgHtml('news',n)}<h3>${esc(n[lang].title)}</h3><p>${esc(n[lang].desc)}</p><button type="button" class="small-btn" onclick="openDetail('news',${n.id})">${t("read_more")}</button></article>`; }

function renderAll(){
  applyLang();
  buildHero();
  // Nội dung sửa được trong Admin: slide, giới thiệu, đối tác (ghi đè lên bản dịch mặc định)
  if(data.home && data.home[lang]){
    document.getElementById("heroTitle").textContent = data.home[lang].title;
    document.getElementById("heroSub").textContent = data.home[lang].sub;
  }
  if(data.about && data.about[lang]){
    const ab = data.about[lang];
    document.getElementById("homeAboutLead").textContent = (data.home.about && data.home.about[lang]) ? data.home.about[lang].lead : ab.lead;
    document.getElementById("aboutMainText").textContent = data.about.main ? (data.about.main[lang] || data.about.main.vi || "") : "";
    document.getElementById("aboutDirectorText").textContent = ab.director;
    document.getElementById("aboutVisionText").textContent = ab.vision;
    document.getElementById("aboutImage").src = data.about.image || IMG.building;
    document.getElementById("values").innerHTML = ab.values.split(",").map(v=>v.trim()).filter(Boolean).map(v=>`<span>${esc(v)}</span>`).join("");
  }
  if(data.home.about && data.home.about[lang]){
    document.getElementById("homeAboutCards").innerHTML = data.home.about[lang].cards.map(c=>`<div class="card"><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p></div>`).join("");
  } else {
    document.getElementById("homeAboutCards").innerHTML = ["vision_title","nav_capacity","news_title"].map((k,i)=>`<div class="card"><h3>${t(k)}</h3><p>${t("about_lead")}</p></div>`).join("");
  }
  document.getElementById("homeServices").innerHTML = data.services.slice(0,3).map(cardService).join("");
  renderServiceList();
  const filtered = data.projects.filter(p=>projectFilter==="all" || p.status===projectFilter);
  document.getElementById("homeProjects").innerHTML = filtered.map(cardProject).join("");
  document.getElementById("projectsList").innerHTML = filtered.map(cardProject).join("");
  document.getElementById("homeNews").innerHTML = data.news.map(cardNews).join("");
  document.getElementById("newsList").innerHTML = data.news.map(cardNews).join("");
  document.getElementById("partners").innerHTML = (data.partners||[]).map(p=> p.img ? `<div class="partner-item"><img src="${esc(p.img)}" alt="${esc(p.name)}"><span>${esc(p.name)}</span></div>` : `<span>${esc(p.name)}</span>`).join("");
  document.getElementById("capacityText").textContent = (data.capacity && data.capacity[lang]) ? data.capacity[lang].text : t("capacity_text");
  document.getElementById("softwareChips").innerHTML = ((data.capacity && data.capacity.software) || "Tekla Structures, REAL4, AutoCAD, Jw_CAD, Arris").split(",").map(s=>s.trim()).filter(Boolean).map(s=>`<span>${esc(s)}</span>`).join("");
  document.getElementById("capacityCards").innerHTML = (data.capacity && data.capacity[lang] && data.capacity[lang].cards) ? data.capacity[lang].cards.map(c=>`<div class="card"><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p></div>`).join("") : data.services.slice(0,3).map(cardService).join("");
  const c = data.contact;
  document.getElementById("topPhone").textContent = c.phone; document.getElementById("topPhone").href = "tel:"+c.phone;
  document.getElementById("topEmail").textContent = c.email; document.getElementById("topEmail").href = "mailto:"+c.email;
  document.getElementById("contactAddress").textContent = c.address;
  document.getElementById("contactPhone").textContent = c.phone;
  document.getElementById("contactEmail").textContent = c.email;
  document.getElementById("footerContact").innerHTML = `${esc(c.address)}<br>📞 ${esc(c.phone)}<br>✉️ ${esc(c.email)}`;
  const callBtn = document.getElementById("callBtn"); if(callBtn) callBtn.href = "tel:"+c.phone;
  const zaloBtn = document.getElementById("zaloBtn"); if(zaloBtn) zaloBtn.href = "https://zalo.me/" + String(c.phone).replace(/\D/g,"");
}
document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click", ()=>{
  projectFilter = btn.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active", b===btn));
  renderAll();
}));
document.getElementById("serviceSearch").addEventListener("input", ()=>renderServiceList());

/* Modal chi tiết */
window.openDetail = function(type, id){
  const item = data[type].find(x=>x.id===id); if(!item) return;
  modalItem = item; modalImgIndex = 0;
  const imgs = getImages(item);
  const arrows = imgs.length > 1 ? `<button type="button" class="card-arrow prev" onclick="cycleModalImg(-1)">‹</button><button type="button" class="card-arrow next" onclick="cycleModalImg(1)">›</button><span class="card-counter">1 / ${imgs.length}</span>` : "";
  document.getElementById("modalBody").innerHTML = `<div class="modal-img-wrap"><img src="${esc(imgs[0])}" alt="">${arrows}</div><h2>${esc(item[lang].title)}</h2><p>${esc(item[lang].desc)}</p>${item.status?`<p><span class="tag">${item.status==="done"?t("filter_done"):t("filter_doing")}</span></p>`:""}`;
  document.getElementById("modal").classList.remove("hidden");
};
document.getElementById("modalClose").onclick = ()=>document.getElementById("modal").classList.add("hidden");
document.getElementById("modal").addEventListener("click", e=>{ if(e.target.id==="modal") e.target.classList.add("hidden"); });

/* Form liên hệ: lưu vào Admin > Tin nhắn (bản demo, chưa gửi email thật) */
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  const f = new FormData(e.target);
  data.messages.unshift({id:Date.now(), name:f.get("name"), phone:f.get("phone"), email:f.get("email"), subject:f.get("subject"), content:f.get("content")});
  saveData();
  document.getElementById("contactMsg").textContent = lang==="ja" ? "送信しました。ありがとうございます。" : "Đã gửi thành công! Chúng tôi sẽ liên hệ lại sớm.";
  showToast(lang==="ja" ? "送信しました。" : "Đã gửi thành công!");
  e.target.reset();
});

/* ============ ADMIN: thêm / sửa / xóa ============ */
let adminTab = "home", editing = null, editingPartner = null;
// Ảnh có 2 cách: upload file từ máy (đọc thành DataURL, lưu localStorage) HOẶC nhập link ảnh.
// Nếu chọn cả 2 thì file upload được ưu tiên.
function resolveImage(form, linkValue, done){
  const file = form.imgFile && form.imgFile.files && form.imgFile.files[0];
  if(file){ const r = new FileReader(); r.onload = ()=>done(r.result); r.readAsDataURL(file); }
  else done(linkValue || "");
}

function renderAdmin(){
  document.getElementById("loginBox").classList.toggle("hidden", isAdmin);
  document.getElementById("adminBox").classList.toggle("hidden", !isAdmin);
  if(!isAdmin) return;
  document.querySelectorAll(".tab-btn").forEach(b=>b.classList.toggle("active", b.dataset.tab===adminTab));
  const box = document.getElementById("adminContent");
  if(adminTab==="contactInfo"){
    const c = data.contact;
    box.innerHTML = `<form class="card form" onsubmit="saveContact(event)">
      <label>Địa chỉ / 住所 *</label><input name="address" value="${esc(c.address)}">
      <label>Điện thoại / 電話 *</label><input name="phone" value="${esc(c.phone)}">
      <label>Email</label><input name="email" value="${esc(c.email)}">
      <button type="submit" class="btn" style="margin-top:14px">Lưu liên hệ</button></form>`;
    return;
  }
  if(adminTab==="messages"){
    box.innerHTML = data.messages.length ? data.messages.map(m=>`<div class="admin-row"><div><b>${esc(m.name)}</b> - ${esc(m.phone)} - ${esc(m.email||"")}<br><b>${esc(m.subject||"")}</b><br>${esc(m.content)}</div></div>`).join("") : "<p>Chưa có tin nhắn nào.</p>";
    return;
  }
  if(adminTab==="home"){
    const h = data.home;
    box.innerHTML = `<form class="card form" onsubmit="saveHome(event)">
      <h3>Tiêu đề & nội dung slide trang chủ</h3>
      <label>Tiêu đề (Tiếng Việt)</label><input name="viTitle" value="${esc(h.vi.title)}" required>
      <label>Nội dung (Tiếng Việt)</label><textarea name="viSub" rows="2">${esc(h.vi.sub)}</textarea>
      <label>Tiêu đề (Tiếng Nhật)</label><input name="jaTitle" value="${esc(h.ja.title)}" required>
      <label>Nội dung (Tiếng Nhật)</label><textarea name="jaSub" rows="2">${esc(h.ja.sub)}</textarea>
      <h3>Ảnh slide (mỗi slide: nhập link HOẶC upload file)</h3>
      <div id="slideEditor">${h.slides.map((s,i)=>`<div class="card slide-editor" style="margin-bottom:12px"><img src="${esc(s.img)}" alt=""><label>Link ảnh slide ${i+1}</label><input class="slide-link" value="${esc(s.img)}"><label>Hoặc upload ảnh mới</label><input class="slide-file" type="file" accept="image/*"><button type="button" class="small-btn danger" onclick="this.parentElement.remove()">Xóa slide này</button></div>`).join("")}</div>
      <button type="button" class="small-btn" onclick="addSlideEditor()">+ Thêm slide</button>
      <button type="submit" class="btn" style="margin-top:14px">Lưu trang chủ</button>
      <p class="note">Lưu ý: ảnh upload lưu dạng DataURL trong trình duyệt, nên dùng ảnh nhẹ (dưới ~1MB) để không đầy bộ nhớ localStorage.</p></form>
    <form class="card form" style="margin-top:20px" onsubmit="saveHomeAbout(event)">
      <h3>Phần Về chúng tôi ở trang chủ (sửa được tại đây)</h3>
      <label>Đoạn giới thiệu ngắn (Tiếng Việt)</label><textarea name="viLead" rows="2">${esc(h.about.vi.lead)}</textarea>
      <label>Thẻ 1 - Tiêu đề (VI)</label><input name="viCard1Title" value="${esc(h.about.vi.cards[0].title)}"><label>Thẻ 1 - Mô tả (VI)</label><textarea name="viCard1Desc" rows="2">${esc(h.about.vi.cards[0].desc)}</textarea>
      <label>Thẻ 2 - Tiêu đề (VI)</label><input name="viCard2Title" value="${esc(h.about.vi.cards[1].title)}"><label>Thẻ 2 - Mô tả (VI)</label><textarea name="viCard2Desc" rows="2">${esc(h.about.vi.cards[1].desc)}</textarea>
      <label>Thẻ 3 - Tiêu đề (VI)</label><input name="viCard3Title" value="${esc(h.about.vi.cards[2].title)}"><label>Thẻ 3 - Mô tả (VI)</label><textarea name="viCard3Desc" rows="2">${esc(h.about.vi.cards[2].desc)}</textarea>
      <label>Đoạn giới thiệu ngắn (Tiếng Nhật)</label><textarea name="jaLead" rows="2">${esc(h.about.ja.lead)}</textarea>
      <label>Thẻ 1 - Tiêu đề (JP)</label><input name="jaCard1Title" value="${esc(h.about.ja.cards[0].title)}"><label>Thẻ 1 - Mô tả (JP)</label><textarea name="jaCard1Desc" rows="2">${esc(h.about.ja.cards[0].desc)}</textarea>
      <label>Thẻ 2 - Tiêu đề (JP)</label><input name="jaCard2Title" value="${esc(h.about.ja.cards[1].title)}"><label>Thẻ 2 - Mô tả (JP)</label><textarea name="jaCard2Desc" rows="2">${esc(h.about.ja.cards[1].desc)}</textarea>
      <label>Thẻ 3 - Tiêu đề (JP)</label><input name="jaCard3Title" value="${esc(h.about.ja.cards[2].title)}"><label>Thẻ 3 - Mô tả (JP)</label><textarea name="jaCard3Desc" rows="2">${esc(h.about.ja.cards[2].desc)}</textarea>
      <button type="submit" class="btn" style="margin-top:14px">Lưu phần Về chúng tôi trang chủ</button></form>`;
    return;
  }
  if(adminTab==="about"){
    const a = data.about;
    box.innerHTML = `<form class="card form" onsubmit="saveAbout(event)">
      <h3>Nội dung Giới thiệu</h3>
      <label>Ảnh giới thiệu - Link</label><input name="img" value="${esc(a.image)}">
      <label>Hoặc upload ảnh giới thiệu</label><input name="imgFile" type="file" accept="image/*">
      <label>Đoạn văn dưới ảnh ở trang Giới thiệu (Tiếng Việt) - đoạn chính</label><textarea name="viMain" rows="3">${esc(a.main ? a.main.vi : "")}</textarea>
      <label>Đoạn văn dưới ảnh ở trang Giới thiệu (Tiếng Nhật) - đoạn chính</label><textarea name="jaMain" rows="3">${esc(a.main ? a.main.ja : "")}</textarea>
      <label>Lời ngỏ Giám đốc (Tiếng Việt)</label><textarea name="viDirector" rows="3">${esc(a.vi.director)}</textarea>
      <label>Tầm nhìn - Sứ mệnh (Tiếng Việt)</label><textarea name="viVision" rows="3">${esc(a.vi.vision)}</textarea>
      <label>Giá trị cốt lõi (Tiếng Việt, cách nhau bằng dấu phẩy)</label><input name="viValues" value="${esc(a.vi.values)}">
      <label>Lời ngỏ Giám đốc (Tiếng Nhật)</label><textarea name="jaDirector" rows="3">${esc(a.ja.director)}</textarea>
      <label>Tầm nhìn - Sứ mệnh (Tiếng Nhật)</label><textarea name="jaVision" rows="3">${esc(a.ja.vision)}</textarea>
      <label>Giá trị cốt lõi (Tiếng Nhật, cách nhau bằng dấu phẩy)</label><input name="jaValues" value="${esc(a.ja.values)}">
      <button type="submit" class="btn" style="margin-top:14px">Lưu giới thiệu</button></form>`;
    return;
  }
  if(adminTab==="capacity"){
    const cp = data.capacity;
    box.innerHTML = `<form class="card form" onsubmit="saveCapacity(event)">
      <h3>Năng lực và nhân sự</h3>
      <label>Đoạn giới thiệu (Tiếng Việt)</label><textarea name="viText" rows="3">${esc(cp.vi.text)}</textarea>
      <label>Phần mềm (cách nhau bằng dấu phẩy)</label><input name="software" value="${esc(cp.software)}">
      <label>Thẻ 1 - Tiêu đề (VI)</label><input name="viCard1Title" value="${esc(cp.vi.cards[0].title)}"><label>Thẻ 1 - Mô tả (VI)</label><textarea name="viCard1Desc" rows="2">${esc(cp.vi.cards[0].desc)}</textarea>
      <label>Thẻ 2 - Tiêu đề (VI)</label><input name="viCard2Title" value="${esc(cp.vi.cards[1].title)}"><label>Thẻ 2 - Mô tả (VI)</label><textarea name="viCard2Desc" rows="2">${esc(cp.vi.cards[1].desc)}</textarea>
      <label>Thẻ 3 - Tiêu đề (VI)</label><input name="viCard3Title" value="${esc(cp.vi.cards[2].title)}"><label>Thẻ 3 - Mô tả (VI)</label><textarea name="viCard3Desc" rows="2">${esc(cp.vi.cards[2].desc)}</textarea>
      <label>Đoạn giới thiệu (Tiếng Nhật)</label><textarea name="jaText" rows="3">${esc(cp.ja.text)}</textarea>
      <label>Thẻ 1 - Tiêu đề (JP)</label><input name="jaCard1Title" value="${esc(cp.ja.cards[0].title)}"><label>Thẻ 1 - Mô tả (JP)</label><textarea name="jaCard1Desc" rows="2">${esc(cp.ja.cards[0].desc)}</textarea>
      <label>Thẻ 2 - Tiêu đề (JP)</label><input name="jaCard2Title" value="${esc(cp.ja.cards[1].title)}"><label>Thẻ 2 - Mô tả (JP)</label><textarea name="jaCard2Desc" rows="2">${esc(cp.ja.cards[1].desc)}</textarea>
      <label>Thẻ 3 - Tiêu đề (JP)</label><input name="jaCard3Title" value="${esc(cp.ja.cards[2].title)}"><label>Thẻ 3 - Mô tả (JP)</label><textarea name="jaCard3Desc" rows="2">${esc(cp.ja.cards[2].desc)}</textarea>
      <button type="submit" class="btn" style="margin-top:14px">Lưu năng lực</button></form>`;
    return;
  }
  if(adminTab==="partners"){
    const list = data.partners || [];
    const edit = list.find(x=>x.id===editingPartner);
    box.innerHTML = `<form class="card form" onsubmit="savePartner(event)">
      <h3>${edit ? "Sửa đối tác" : "Thêm đối tác"}</h3>
      <label>Tên đối tác *</label><input name="pName" value="${edit?esc(edit.name):""}">
      <label>Link logo</label><input name="img" value="${edit && edit.img && !edit.img.startsWith("data:") ? esc(edit.img) : ""}" placeholder="https://... (để trống nếu chỉ hiện tên)">
      <label>Hoặc upload logo</label><input name="imgFile" type="file" accept="image/*">
      <button type="submit" class="btn" style="margin-top:14px">Lưu đối tác</button>
      <button type="button" class="small-btn" onclick="cancelPartnerEdit()">Hủy</button></form>
      <div style="margin-top:20px">${list.map(p=>`<div class="admin-row">${p.img?`<img src="${esc(p.img)}" alt="">`:""}<div style="flex:1"><b>${esc(p.name)}</b></div><div><button type="button" class="small-btn" onclick="editPartner(${p.id})">Sửa</button><button type="button" class="small-btn danger" onclick="deleteItem('partners',${p.id})">Xóa</button></div></div>`).join("")}</div>`;
    return;
  }
  const list = data[adminTab];
  const fields = adminTab==="projects" ? `<label>Trạng thái</label><select name="status"><option value="done">done - Đã hoàn thành</option><option value="doing">doing - Đang thi công</option></select>` : "";
  const catField = adminTab==="services" ? `<label>Danh mục</label><select name="categoryId">${(data.serviceCategories||[]).map(c=>`<option value="${c.id}">${esc(c.vi)}</option>`).join("")}</select>` : "";
  const catSection = adminTab==="services" ? `<div class="card form" style="margin-bottom:20px"><h3>Danh mục dịch vụ (thêm / xóa)</h3><div>${(data.serviceCategories||[]).map(c=>`<div class="admin-row"><div style="flex:1"><b>${esc(c.vi)}</b> / ${esc(c.ja)}</div><button type="button" class="small-btn danger" onclick="deleteCategory('${c.id}')">Xóa</button></div>`).join("")}</div><form onsubmit="saveCategory(event)"><label>Tên danh mục (Tiếng Việt) *</label><input name="catVi"><label>Tên danh mục (Tiếng Nhật, để trống sẽ dùng tên tiếng Việt)</label><input name="catJa"><button type="submit" class="btn" style="margin-top:10px">Thêm danh mục</button></form></div>` : "";
  box.innerHTML = `${catSection}
    <form class="card form" id="itemForm" onsubmit="saveItem(event,'${adminTab}')">
      <h3>${editing ? "Sửa mục" : "Thêm mới"}</h3>
      ${catField}
      <label>Tiêu đề (Tiếng Việt) *</label><input name="viTitle">
      <label>Mô tả (Tiếng Việt)</label><textarea name="viDesc" rows="3"></textarea>
      <label>Tiêu đề (Tiếng Nhật, để trống sẽ dùng tiếng Việt)</label><input name="jaTitle">
      <label>Mô tả (Tiếng Nhật, để trống sẽ dùng tiếng Việt)</label><textarea name="jaDesc" rows="3"></textarea>
      <label>Hình ảnh (có thể thêm 1, 2, 5... ảnh - mỗi ảnh nhập link HOẶC upload)</label>
      <div id="multiImageEditor"></div>
      <button type="button" class="small-btn" onclick="addMultiSlot()">+ Thêm ảnh</button>
      ${fields}
      <button type="submit" class="btn" style="margin-top:14px">Lưu</button>
      <button type="button" class="small-btn" onclick="cancelEdit()">Hủy sửa</button>
    </form>
    <div style="margin-top:20px">${list.map(item=>`<div class="admin-row"><img src="${esc(getImages(item)[0])}" alt=""><div style="flex:1"><b>${esc(item[lang].title)}</b><br><small>${esc(item[lang].desc)} (${getImages(item).length} ảnh)</small></div><div><button type="button" class="small-btn" onclick="editItem('${adminTab}',${item.id})">Sửa</button><button type="button" class="small-btn danger" onclick="deleteItem('${adminTab}',${item.id})">Xóa</button></div></div>`).join("")}</div>`;
  if(editing){
    const it = list.find(x=>x.id===editing);
    if(it){
      // Sửa lỗi cũ: trước đây lấy form đầu tiên (form danh mục) nên điền sai và lỗi khi sửa Dịch vụ.
      // Giờ lấy đúng form thêm/sửa mục bằng id.
      const f = document.getElementById("itemForm");
      if(f){
        f.viTitle.value = it.vi.title; f.viDesc.value = it.vi.desc; f.jaTitle.value = it.ja.title || ""; f.jaDesc.value = it.ja.desc || "";
        if(f.status) f.status.value = it.status;
        if(f.categoryId) f.categoryId.value = it.categoryId || (data.serviceCategories[0] && data.serviceCategories[0].id);
      }
      // Điền sẵn các ảnh đã có vào trình sửa nhiều ảnh
      getImages(it).forEach(src=>addMultiSlot(src));
    }
  } else {
    // Thêm mới: cho sẵn 1 ô ảnh để nhập ngay
    addMultiSlot("");
  }
}
window.saveContact = function(e){
  e.preventDefault(); const f = new FormData(e.target);
  if(!(f.get("address")||"").trim() || !(f.get("phone")||"").trim()){ showToast(lang==="ja" ? "住所と電話番号を入力してください。" : "Vui lòng nhập địa chỉ và điện thoại rồi bấm Lưu."); return; }
  data.contact = {address:f.get("address"), phone:f.get("phone"), email:f.get("email")};
  saveData(); toastDone("edited");
};
window.saveItem = function(e, type){
  e.preventDefault(); const f = new FormData(e.target);
  // Trước đây ô tiếng Nhật bắt buộc nên nhiều người chỉ nhập tiếng Việt thì bấm Lưu bị trình duyệt chặn, tưởng là không lưu được.
  // Giờ chỉ cần tiêu đề tiếng Việt, tiếng Nhật để trống sẽ tự dùng tiếng Việt.
  const viTitle = (f.get("viTitle") || "").trim();
  if(!viTitle){ showToast(lang==="ja" ? "ベトナム語のタイトルを入力してください。" : "Vui lòng nhập tiêu đề tiếng Việt rồi bấm Lưu."); return; }
  collectMultiImages().then(imgs=>{
    const images = imgs.length ? imgs : [IMG.steel];
    const wasEditing = !!editing;
    const item = {id: editing || Date.now(), images: images, img: images[0],
      vi:{title:viTitle, desc:f.get("viDesc")}, ja:{title:(f.get("jaTitle")||"").trim() || viTitle, desc:(f.get("jaDesc")||"").trim() || f.get("viDesc")}};
    if(type==="projects"){ item.status = f.get("status") || "done"; }
    if(type==="services"){ item.categoryId = f.get("categoryId") || (data.serviceCategories[0] && data.serviceCategories[0].id); }
    if(editing){ const i = data[type].findIndex(x=>x.id===editing); if(i>=0) data[type][i] = item; else data[type].unshift(item); }
    else data[type].unshift(item);
    editing = null; saveData(); renderAdmin(); toastDone(wasEditing ? "edited" : "added");
  });
};
window.addSlideEditor = function(){
  const wrap = document.getElementById("slideEditor");
  const div = document.createElement("div");
  div.className = "card slide-editor"; div.style.marginBottom = "12px";
  div.innerHTML = `<label>Link ảnh slide mới</label><input class="slide-link" placeholder="https://..."><label>Hoặc upload ảnh mới</label><input class="slide-file" type="file" accept="image/*"><button type="button" class="small-btn danger" onclick="this.parentElement.remove()">Xóa slide này</button>`;
  wrap.appendChild(div);
};
window.saveHome = function(e){
  e.preventDefault(); const f = new FormData(e.target);
  const blocks = Array.from(document.querySelectorAll("#slideEditor .slide-editor"));
  const jobs = blocks.map(b=>{
    const link = b.querySelector(".slide-link").value.trim();
    const file = b.querySelector(".slide-file").files[0];
    if(file) return new Promise(res=>{ const r=new FileReader(); r.onload=()=>res(r.result); r.readAsDataURL(file); });
    return Promise.resolve(link);
  });
  Promise.all(jobs).then(imgs=>{
    data.home.vi = {title:f.get("viTitle"), sub:f.get("viSub")};
    data.home.ja = {title:f.get("jaTitle"), sub:f.get("jaSub")};
    data.home.slides = imgs.filter(Boolean).map(img=>({img}));
    if(!data.home.slides.length) data.home.slides = [{img:IMG.hero[0]}];
    saveData(); renderAdmin(); toastDone("edited");
  });
};
window.saveHomeAbout = function(e){
  e.preventDefault(); const f = new FormData(e.target);
  data.home.about.vi = {lead:f.get("viLead"), cards:[{title:f.get("viCard1Title"), desc:f.get("viCard1Desc")},{title:f.get("viCard2Title"), desc:f.get("viCard2Desc")},{title:f.get("viCard3Title"), desc:f.get("viCard3Desc")}]};
  data.home.about.ja = {lead:f.get("jaLead"), cards:[{title:f.get("jaCard1Title"), desc:f.get("jaCard1Desc")},{title:f.get("jaCard2Title"), desc:f.get("jaCard2Desc")},{title:f.get("jaCard3Title"), desc:f.get("jaCard3Desc")}]};
  saveData(); renderAdmin(); toastDone("edited");
};
window.saveCapacity = function(e){
  e.preventDefault(); const f = new FormData(e.target);
  data.capacity.software = f.get("software");
  data.capacity.vi = {text:f.get("viText"), cards:[{title:f.get("viCard1Title"), desc:f.get("viCard1Desc")},{title:f.get("viCard2Title"), desc:f.get("viCard2Desc")},{title:f.get("viCard3Title"), desc:f.get("viCard3Desc")}]};
  data.capacity.ja = {text:f.get("jaText"), cards:[{title:f.get("jaCard1Title"), desc:f.get("jaCard1Desc")},{title:f.get("jaCard2Title"), desc:f.get("jaCard2Desc")},{title:f.get("jaCard3Title"), desc:f.get("jaCard3Desc")}]};
  saveData(); renderAdmin(); toastDone("edited");
};
window.saveCategory = function(e){
  e.preventDefault(); const f = new FormData(e.target);
  if(!(f.get("catVi")||"").trim()){ showToast("Vui lòng nhập tên danh mục rồi bấm Lưu."); return; }
  const id = f.get("catVi").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"") || ("cat-"+Date.now());
  data.serviceCategories.push({id, vi:f.get("catVi"), ja:(f.get("catJa")||"").trim() || f.get("catVi")});
  saveData(); renderAdmin(); toastDone("added");
};
window.deleteCategory = function(id){
  if(!confirm(lang==="ja" ? "本当に削除しますか？" : "Bạn chắc chắn muốn xóa danh mục này?")) return;
  data.serviceCategories = data.serviceCategories.filter(c=>c.id!==id);
  saveData(); renderAdmin(); toastDone("deleted");
};
window.saveAbout = function(e){
  e.preventDefault(); const f = new FormData(e.target);
  resolveImage(e.target, f.get("img"), (imgSrc)=>{
    data.about.image = imgSrc || data.about.image;
    if(!data.about.main) data.about.main = {vi:"", ja:""};
    data.about.main = {vi:f.get("viMain"), ja:f.get("jaMain")};
    // Đã bỏ ô Giới thiệu ngắn trang chủ khỏi tab Giới thiệu: giữ nguyên lead cũ, lead trang chủ sửa ở tab Trang chủ
    data.about.vi = {lead:data.about.vi.lead, director:f.get("viDirector"), vision:f.get("viVision"), values:f.get("viValues")};
    data.about.ja = {lead:data.about.ja.lead, director:f.get("jaDirector"), vision:f.get("jaVision"), values:f.get("jaValues")};
    saveData(); renderAdmin(); toastDone("edited");
  });
};
window.editPartner = function(id){ editingPartner = id; renderAdmin(); };
window.cancelPartnerEdit = function(){ editingPartner = null; renderAdmin(); showToast(lang==="ja" ? "編集をキャンセルしました。保存されていません。" : "Đã hủy sửa, không lưu thay đổi."); };
window.savePartner = function(e){
  e.preventDefault(); const f = new FormData(e.target);
  if(!(f.get("pName")||"").trim()){ showToast(lang==="ja" ? "パートナー名を入力してください。" : "Vui lòng nhập tên đối tác rồi bấm Lưu."); return; }
  resolveImage(e.target, f.get("img"), (imgSrc)=>{
    const wasEditing = !!editingPartner;
    const item = {id: editingPartner || Date.now(), name:f.get("pName"), img: imgSrc || ""};
    if(editingPartner){ const i = data.partners.findIndex(x=>x.id===editingPartner); if(i>=0) data.partners[i] = item; else data.partners.push(item); }
    else data.partners.push(item);
    editingPartner = null; saveData(); renderAdmin(); toastDone(wasEditing ? "edited" : "added");
  });
};
window.editItem = function(type, id){ adminTab = type; editing = id; renderAdmin(); window.scrollTo(0,0); };
window.deleteItem = function(type, id){
  if(!confirm(lang==="ja" ? "本当に削除しますか？" : "Bạn chắc chắn muốn xóa mục này?")) return;
  data[type] = data[type].filter(x=>x.id!==id); saveData(); renderAdmin(); toastDone("deleted");
};
window.cancelEdit = function(){ editing = null; renderAdmin(); showToast(lang==="ja" ? "編集をキャンセルしました。保存されていません。" : "Đã hủy sửa, không lưu thay đổi."); };
document.querySelectorAll(".tab-btn").forEach(b=>b.addEventListener("click", ()=>{ adminTab = b.dataset.tab; editing = null; editingPartner = null; renderAdmin(); }));
document.getElementById("loginBtn").addEventListener("click", ()=>{
  const u = document.getElementById("adminUser").value.trim();
  const p = document.getElementById("adminPass").value;
  if(u===ADMIN_USER && p===ADMIN_PASS){ isAdmin = true; sessionStorage.setItem("dnv_admin","1"); renderAdmin(); }
  else document.getElementById("loginMsg").textContent = lang==="ja" ? "ユーザー名またはパスワードが違います。" : "Sai tài khoản hoặc mật khẩu.";
});
document.getElementById("logoutBtn").addEventListener("click", ()=>{ isAdmin = false; sessionStorage.removeItem("dnv_admin"); renderAdmin(); });
document.getElementById("resetBtn").addEventListener("click", ()=>{
  if(!confirm(lang==="ja" ? "サンプルデータに戻しますか？" : "Khôi phục về dữ liệu mẫu? Các thay đổi sẽ mất.")) return;
  data = JSON.parse(JSON.stringify(DEFAULT_DATA)); saveData(); renderAdmin();
});

/* Khởi động */
renderAll();
router();
