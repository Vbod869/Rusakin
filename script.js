// RUSAKIN — edit data contoh dan nomor WhatsApp di bagian konfigurasi ini.
const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor admin, format internasional tanpa tanda +.
const phones = [
  { brand: "Samsung", model: "Galaxy S24 Ultra", condition: "Contoh estimasi", price: 1200000 },
  { brand: "Samsung", model: "Galaxy S23", condition: "Contoh estimasi", price: 850000 },
  { brand: "Samsung", model: "Galaxy A55", condition: "Contoh estimasi", price: 450000 },
  { brand: "Samsung", model: "Galaxy A32", condition: "Layar pecah", price: 170000 },
  { brand: "Samsung", model: "Galaxy A12", condition: "Layar pecah", price: 145000 },
  { brand: "Apple", model: "iPhone 15 Pro Max", condition: "Contoh estimasi", price: 1800000 },
  { brand: "Apple", model: "iPhone 14", condition: "Contoh estimasi", price: 950000 },
  { brand: "Apple", model: "iPhone 13", condition: "Contoh estimasi", price: 750000 },
  { brand: "Apple", model: "iPhone 11", condition: "Contoh estimasi", price: 400000 },
  { brand: "Xiaomi", model: "Xiaomi 13T", condition: "Contoh estimasi", price: 600000 },
  { brand: "Xiaomi", model: "Redmi Note 12", condition: "Contoh estimasi", price: 300000 },
  { brand: "Xiaomi", model: "Redmi Note 10", condition: "Mati total", price: 170000 },
  { brand: "Xiaomi", model: "Redmi 9A", condition: "Mati total", price: 60000 },
  { brand: "POCO", model: "POCO X6 Pro", condition: "Contoh estimasi", price: 500000 },
  { brand: "POCO", model: "POCO M5", condition: "Contoh estimasi", price: 180000 },
  { brand: "OPPO", model: "Reno 11", condition: "Contoh estimasi", price: 500000 },
  { brand: "OPPO", model: "A78", condition: "Contoh estimasi", price: 250000 },
  { brand: "OPPO", model: "A15", condition: "LCD bergaris", price: 70000 },
  { brand: "Vivo", model: "V29", condition: "Contoh estimasi", price: 450000 },
  { brand: "Vivo", model: "Y36", condition: "Contoh estimasi", price: 250000 },
  { brand: "Vivo", model: "Y20", condition: "Bootloop", price: 110000 },
  { brand: "Realme", model: "12 Pro+", condition: "Contoh estimasi", price: 450000 },
  { brand: "Realme", model: "C55", condition: "Contoh estimasi", price: 220000 },
  { brand: "Infinix", model: "Note 40", condition: "Contoh estimasi", price: 300000 },
  { brand: "Infinix", model: "Hot 30", condition: "Contoh estimasi", price: 180000 },
  { brand: "Tecno", model: "Camon 30", condition: "Contoh estimasi", price: 300000 },
  { brand: "Tecno", model: "Spark 10", condition: "Contoh estimasi", price: 150000 },
  { brand: "Huawei", model: "P30 Pro", condition: "Contoh estimasi", price: 350000 },
  { brand: "Huawei", model: "Nova 9", condition: "Contoh estimasi", price: 220000 },
  { brand: "Google", model: "Pixel 8", condition: "Contoh estimasi", price: 700000 },
  { brand: "Google", model: "Pixel 6a", condition: "Contoh estimasi", price: 300000 },
  { brand: "OnePlus", model: "OnePlus 11", condition: "Contoh estimasi", price: 650000 },
  { brand: "ASUS", model: "ROG Phone 7", condition: "Contoh estimasi", price: 700000 },
  { brand: "Sony", model: "Xperia 1 V", condition: "Contoh estimasi", price: 650000 },
  { brand: "Motorola", model: "Edge 40", condition: "Contoh estimasi", price: 350000 },
  { brand: "Nokia", model: "G42", condition: "Contoh estimasi", price: 150000 },
  { brand: "Lenovo", model: "Legion Phone Duel", condition: "Contoh estimasi", price: 350000 },
  { brand: "ZTE", model: "Nubia RedMagic 8 Pro", condition: "Contoh estimasi", price: 650000 },
  { brand: "Sharp", model: "Aquos R7", condition: "Contoh estimasi", price: 400000 },
  { brand: "Meizu", model: "20 Pro", condition: "Contoh estimasi", price: 350000 },
  { brand: "Nothing", model: "Phone (2)", condition: "Contoh estimasi", price: 450000 },
  { brand: "iQOO", model: "12", condition: "Contoh estimasi", price: 650000 },
  { brand: "Itel", model: "S23", condition: "Contoh estimasi", price: 100000 },
  { brand: "Advan", model: "G9 Pro", condition: "Contoh estimasi", price: 60000 },
  { brand: "Evercoss", model: "M6", condition: "Contoh estimasi", price: 50000 }
];

// Katalog model historis dan populer. Cakupan mencakup banyak seri/tipe, bukan setiap varian regional atau kode perangkat yang pernah dirilis.
const modelCatalog = {
  Apple: `iPhone 17 Pro Max|iPhone 17 Pro|iPhone 17|iPhone 17 Air|iPhone 16 Pro Max|iPhone 16 Pro|iPhone 16 Plus|iPhone 16|iPhone 16e|iPhone 15 Pro Max|iPhone 15 Pro|iPhone 15 Plus|iPhone 15|iPhone 14 Pro Max|iPhone 14 Pro|iPhone 14 Plus|iPhone 14|iPhone 13 Pro Max|iPhone 13 Pro|iPhone 13 mini|iPhone 13|iPhone 12 Pro Max|iPhone 12 Pro|iPhone 12 mini|iPhone 12|iPhone SE (generasi ke-3)|iPhone 11 Pro Max|iPhone 11 Pro|iPhone 11|iPhone XS Max|iPhone XS|iPhone XR|iPhone X|iPhone 8 Plus|iPhone 8|iPhone 7 Plus|iPhone 7|iPhone SE (generasi ke-2)|iPhone 6s Plus|iPhone 6s|iPhone 6 Plus|iPhone 6|iPhone SE (generasi pertama)|iPhone 5s|iPhone 5c|iPhone 5|iPhone 4s|iPhone 4|iPhone 3GS|iPhone 3G|iPhone 2G`,
  Samsung: `Galaxy S25 Ultra|Galaxy S25+|Galaxy S25|Galaxy S25 Edge|Galaxy S24 Ultra|Galaxy S24+|Galaxy S24|Galaxy S24 FE|Galaxy S23 Ultra|Galaxy S23+|Galaxy S23|Galaxy S23 FE|Galaxy S22 Ultra|Galaxy S22+|Galaxy S22|Galaxy S21 Ultra|Galaxy S21+|Galaxy S21|Galaxy S21 FE|Galaxy S20 Ultra|Galaxy S20+|Galaxy S20|Galaxy S20 FE|Galaxy S10+|Galaxy S10|Galaxy S10e|Galaxy S10 Lite|Galaxy S9+|Galaxy S9|Galaxy S8+|Galaxy S8|Galaxy S7 edge|Galaxy S7|Galaxy S6 edge+|Galaxy S6 edge|Galaxy S6|Galaxy S5|Galaxy S4|Galaxy S III|Galaxy S II|Galaxy S|Galaxy Z Fold7|Galaxy Z Flip7|Galaxy Z Fold6|Galaxy Z Flip6|Galaxy Z Fold5|Galaxy Z Flip5|Galaxy Z Fold4|Galaxy Z Flip4|Galaxy Z Fold3|Galaxy Z Flip3|Galaxy Z Fold2|Galaxy Z Flip|Galaxy Fold|Galaxy A56 5G|Galaxy A55 5G|Galaxy A54 5G|Galaxy A53 5G|Galaxy A52s 5G|Galaxy A52 5G|Galaxy A52|Galaxy A51|Galaxy A50s|Galaxy A50|Galaxy A36 5G|Galaxy A35 5G|Galaxy A34 5G|Galaxy A33 5G|Galaxy A32 5G|Galaxy A32|Galaxy A31|Galaxy A30s|Galaxy A30|Galaxy A26 5G|Galaxy A25 5G|Galaxy A24|Galaxy A23 5G|Galaxy A23|Galaxy A22 5G|Galaxy A22|Galaxy A21s|Galaxy A20s|Galaxy A20|Galaxy A16 5G|Galaxy A16|Galaxy A15 5G|Galaxy A15|Galaxy A14 5G|Galaxy A14|Galaxy A13 5G|Galaxy A13|Galaxy A12|Galaxy A11|Galaxy A10s|Galaxy A10|Galaxy A06|Galaxy A05s|Galaxy A05|Galaxy A04s|Galaxy A04e|Galaxy A04|Galaxy A03s|Galaxy A03 Core|Galaxy A03|Galaxy A02s|Galaxy A02|Galaxy A01 Core|Galaxy A01|Galaxy A80|Galaxy A70s|Galaxy A70|Galaxy A60|Galaxy A40|Galaxy A30|Galaxy A20e|Galaxy A9 (2018)|Galaxy A8 Star|Galaxy A8+ (2018)|Galaxy A8 (2018)|Galaxy A7 (2018)|Galaxy A6+|Galaxy A6|Galaxy A5 (2017)|Galaxy A3 (2017)|Galaxy A7 (2017)|Galaxy A9 Pro|Galaxy J8|Galaxy J7 Pro|Galaxy J7 Prime|Galaxy J7|Galaxy J6+|Galaxy J6|Galaxy J5 Pro|Galaxy J5 Prime|Galaxy J5|Galaxy J4+|Galaxy J4|Galaxy J3 Pro|Galaxy J3|Galaxy J2 Prime|Galaxy J2 Pro|Galaxy J2|Galaxy J1 Ace|Galaxy J1|Galaxy Note20 Ultra|Galaxy Note20|Galaxy Note10+|Galaxy Note10|Galaxy Note10 Lite|Galaxy Note9|Galaxy Note8|Galaxy Note FE|Galaxy Note7|Galaxy Note5|Galaxy Note4|Galaxy Note3|Galaxy Note II|Galaxy Note|Galaxy M55 5G|Galaxy M54 5G|Galaxy M53 5G|Galaxy M52 5G|Galaxy M51|Galaxy M35 5G|Galaxy M34 5G|Galaxy M33 5G|Galaxy M32|Galaxy M31s|Galaxy M31|Galaxy M30s|Galaxy M30|Galaxy M23 5G|Galaxy M22|Galaxy M21|Galaxy M20|Galaxy M15 5G|Galaxy M14 5G|Galaxy M13|Galaxy M12|Galaxy M11|Galaxy M10|Galaxy F55 5G|Galaxy F54 5G|Galaxy F34 5G|Galaxy F23 5G|Galaxy F22|Galaxy F13|Galaxy F12`,
  OPPO: `Find X9 Ultra|Find X9 Pro|Find X9|Find X8 Pro|Find X8|Find X7 Ultra|Find X7|Find X6 Pro|Find X6|Find X5 Pro|Find X5|Find X3 Pro|Find X3 Neo|Find X3 Lite|Find X2 Pro|Find X2|Find X2 Neo|Find X2 Lite|Find X|Find 7|Find 5|Find N5|Find N3|Find N3 Flip|Find N2|Find N2 Flip|Find N|Find N Flip|Reno16 Pro 5G|Reno16 5G|Reno16 F 5G|Reno15 Pro Max 5G|Reno15 Pro 5G|Reno15 5G|Reno14 Pro 5G|Reno14 5G|Reno14 F 5G|Reno13 Pro 5G|Reno13 5G|Reno13 F 5G|Reno12 Pro 5G|Reno12 5G|Reno12 F 5G|Reno11 Pro 5G|Reno11 5G|Reno11 F 5G|Reno10 Pro+ 5G|Reno10 Pro 5G|Reno10 5G|Reno8 T 5G|Reno8 T|Reno8 Pro 5G|Reno8 5G|Reno7 Z 5G|Reno7 5G|Reno7|Reno6 Pro 5G|Reno6 5G|Reno6|Reno5 5G|Reno5|Reno4 Pro|Reno4|Reno3 Pro|Reno3|Reno2|Reno Z|Reno 10x Zoom|Reno|A7 Pro Max 5G|A7 Pro 5G|A6 Pro 5G|A6 Pro|A6s|A6t Pro 5G|A6t Pro|A6t|A6|A6x|A5 Pro 5G|A5 Pro|A5i Pro 5G|A5i Pro|A5i|A5x|A5|A3 Pro 5G|A3 Pro|A3x|A3|A2 Pro 5G|A2x 5G|A2|A1 Pro|A1|A98 5G|A96|A95|A94 5G|A93|A92|A91|A79 5G|A78 5G|A78|A77s|A77 5G|A76|A74 5G|A74|A73|A72|A71|A70|A60|A59|A58|A57|A56|A55|A54|A53|A52|A R9|A38|A37|A36|A35|A33|A32|A31|A31k|A30|A18|A17|A17k|A16|A16e|A15|A12|A11k|A11|A9 2020|A9|A8|A7|A5 2020|A5s|A5|A3s|A3|A1k|F27 Pro+|F25 Pro|F23 5G|F21 Pro|F19 Pro+|F19 Pro|F19|F17 Pro|F17|F15|F11 Pro|F11|F9 Pro|F9|F7|F5|F3 Plus|F3|F1s|F1 Plus|K12x|K11|K10|K9|K7x|K5|K3|K1|N3|N1|Mirror 5|Neo 7|Neo 5|Joy 3|Joy Plus`,
  Xiaomi: `Xiaomi 15 Ultra|Xiaomi 15|Xiaomi 14 Ultra|Xiaomi 14|Xiaomi 14T Pro|Xiaomi 14T|Xiaomi 13 Ultra|Xiaomi 13 Pro|Xiaomi 13|Xiaomi 13T Pro|Xiaomi 13T|Xiaomi 12T Pro|Xiaomi 12T|Xiaomi 12 Pro|Xiaomi 12|Xiaomi 12 Lite|Xiaomi 11T Pro|Xiaomi 11T|Xiaomi 11 Lite 5G NE|Mi 11 Ultra|Mi 11|Mi 10T Pro|Mi 10T|Mi 10|Mi 9T Pro|Mi 9T|Mi 9|Mi 8|Mi A3|Mi A2|Mi A1|Mi Note 10|Mi Note 10 Lite|Mi Note 3|Mi Max 3|Mi Max 2|Redmi Note 14 Pro+ 5G|Redmi Note 14 Pro 5G|Redmi Note 14 5G|Redmi Note 14|Redmi Note 13 Pro+ 5G|Redmi Note 13 Pro 5G|Redmi Note 13 Pro|Redmi Note 13 5G|Redmi Note 13|Redmi Note 12 Pro+ 5G|Redmi Note 12 Pro 5G|Redmi Note 12 Pro|Redmi Note 12 5G|Redmi Note 12|Redmi Note 11 Pro 5G|Redmi Note 11 Pro|Redmi Note 11S 5G|Redmi Note 11S|Redmi Note 11|Redmi Note 10 Pro|Redmi Note 10S|Redmi Note 10 5G|Redmi Note 10|Redmi Note 9 Pro|Redmi Note 9S|Redmi Note 9|Redmi Note 8 Pro|Redmi Note 8|Redmi Note 7|Redmi Note 6 Pro|Redmi Note 5|Redmi Note 4|Redmi Note 3|Redmi Note 2|Redmi Note|Redmi 14C|Redmi 13C|Redmi 13|Redmi 12 5G|Redmi 12|Redmi 10C|Redmi 10 5G|Redmi 10|Redmi 9T|Redmi 9C NFC|Redmi 9C|Redmi 9A|Redmi 9|Redmi 8A|Redmi 8|Redmi 7A|Redmi 7|Redmi 6A|Redmi 6|Redmi 5A|Redmi 5 Plus|Redmi 5|Redmi 4A|Redmi 4X|Redmi 4|Redmi 3S|Redmi 3|Redmi 2|Redmi 1S|Pocophone F1|Civi 4 Pro|Civi 3|Civi 2|Civi 1S|Civi`,
  POCO: `F7 Ultra|F7 Pro|F7|F6 Pro|F6|F5 Pro|F5|F4 GT|F4|F3|F2 Pro|F1|X7 Pro|X7|X6 Pro|X6|X5 Pro 5G|X5 5G|X4 GT|X4 Pro 5G|X3 GT|X3 Pro|X3 NFC|X2|M7 Pro 5G|M7|M6 Pro|M6|M5s|M5|M4 Pro 5G|M4 Pro|M4 5G|M3 Pro 5G|M3|M2 Pro|M2|C75|C65|C55|C51|C50`,
  Vivo: `X200 Ultra|X200 Pro|X200|X100 Ultra|X100 Pro|X100|X90 Pro|X90|X80 Pro|X80|X70 Pro|X70|X60 Pro|X60|X50 Pro|X50|X30 Pro|X27 Pro|X27|X23|X21|X20|V50|V40 Pro|V40|V40 Lite|V30 Pro|V30|V30e|V29 Pro|V29|V29e|V27 Pro|V27|V27e|V25 Pro|V25|V25e|V23 5G|V23e|V21 5G|V21|V20|V19|V17 Pro|V17|V15 Pro|V15|V11 Pro|V11|V9|V7+|V7|V5 Plus|V5|V3|Y39 5G|Y38 5G|Y36|Y35|Y33s|Y22|Y21s|Y21|Y20s|Y20|Y19|Y17|Y16|Y15s|Y15|Y12s|Y12|Y11|Y03|Y02t|Y02|Y01|Y91|Y83|Y71|Y53|Y51|Y30|Y27|Y22|Y21T|Y20G|Y19s|T3 Ultra|T3 Pro|T3|T2 Pro|T2|T1|iQOO 13|iQOO 12|iQOO 11|iQOO 9T|iQOO 9|iQOO 7|iQOO 5|iQOO 3|Z9 Turbo|Z9|Z7|Z6|Z5`,
  Realme: `GT 7 Pro|GT 6|GT 5 Pro|GT 5|GT Neo 6|GT Neo 5|GT Neo 3|GT Neo 2|GT 2 Pro|GT 2|GT Master Edition|GT|12 Pro+|12 Pro|12+|12|11 Pro+|11 Pro|11x 5G|11|10 Pro+|10 Pro|10|9 Pro+|9 Pro|9i|9|8 Pro|8 5G|8|7 Pro|7i|7|6 Pro|6|5 Pro|5i|5|3 Pro|3|C75|C67|C65|C63|C55|C53|C51|C35|C33|C31|C30|C25Y|C25s|C25|C21Y|C21|C20|C17|C15|C12|C11|Narzo 70 Pro|Narzo 70|Narzo 60 Pro|Narzo 60|Narzo 50 Pro|Narzo 50|Narzo 30 Pro|Narzo 30|Narzo 20 Pro|Narzo 20|Narzo 10|Narzo N55|Narzo N53`,
  Infinix: `Zero 40 5G|Zero 40|Zero 30 5G|Zero 30|Zero Ultra|Zero X Pro|Zero X|Zero 20|Zero 5G 2023|Zero 5G|Note 50 Pro+ 5G|Note 50 Pro|Note 50|Note 40 Pro+ 5G|Note 40 Pro 5G|Note 40 Pro|Note 40|Note 30 VIP|Note 30 Pro|Note 30 5G|Note 30|Note 12 VIP|Note 12 Pro|Note 12|Note 11 Pro|Note 11|Note 10 Pro|Note 10|Note 8|Hot 50 Pro+|Hot 50 Pro|Hot 50|Hot 40 Pro|Hot 40i|Hot 40|Hot 30 Play|Hot 30i|Hot 30|Hot 20S|Hot 20i|Hot 20|Hot 12 Play|Hot 12i|Hot 12|Hot 11S|Hot 11|Hot 10|Hot 9|Hot 8|Smart 9|Smart 8|Smart 7|Smart 6|Smart 5|Smart 4|GT 20 Pro|GT 10 Pro|GT 10|GT 20 Pro Racing Edition`,
  Tecno: `Phantom V Fold2|Phantom V Flip2|Phantom V Fold|Phantom V Flip|Phantom X2 Pro|Phantom X2|Phantom X|Camon 40 Premier|Camon 40 Pro 5G|Camon 40 Pro|Camon 40|Camon 30 Premier 5G|Camon 30 Pro 5G|Camon 30 5G|Camon 30|Camon 20 Premier 5G|Camon 20 Pro 5G|Camon 20 Pro|Camon 20|Camon 19 Pro|Camon 19|Camon 18 Premier|Camon 18P|Camon 18|Camon 17 Pro|Camon 17|Camon 16 Premier|Camon 16|Spark 30 Pro|Spark 30C|Spark 30|Spark 20 Pro+|Spark 20 Pro|Spark 20C|Spark 20|Spark 10 Pro|Spark 10C|Spark 10|Spark 9 Pro|Spark 9T|Spark 9|Spark 8 Pro|Spark 8C|Spark 8|Spark 7 Pro|Spark 7|Spark 6|Spark 5|Pova 6 Pro 5G|Pova 6 Neo|Pova 6|Pova 5 Pro 5G|Pova 5|Pova 4 Pro|Pova 4|Pova 3|Pova 2|Pop 9|Pop 8|Pop 7|Pop 6|Pop 5`,
  Huawei: `Pura 70 Ultra|Pura 70 Pro|Pura 70|P60 Pro|P60|P50 Pro|P50 Pocket|P50|P40 Pro+|P40 Pro|P40|P30 Pro|P30|P20 Pro|P20|P10 Plus|P10|P9|P8|Mate 70 Pro|Mate 60 Pro|Mate 50 Pro|Mate 40 Pro|Mate 30 Pro|Mate 20 Pro|Mate 20|Mate 10 Pro|Mate 9|Mate X6|Mate X5|Mate X3|Mate Xs 2|Mate Xs|Mate X|nova 12 Pro|nova 12|nova 11 Pro|nova 11|nova 10 Pro|nova 10|nova 9|nova 8i|nova 7|nova 5T|nova 3i|Y9 Prime 2019|Y9 2019|Y7a|Y7 Prime|Y6p|Y6 2019|Y5p|Y5 2019|Enjoy 70`,
  Google: `Pixel 9 Pro XL|Pixel 9 Pro|Pixel 9|Pixel 8 Pro|Pixel 8a|Pixel 8|Pixel 7 Pro|Pixel 7a|Pixel 7|Pixel 6 Pro|Pixel 6a|Pixel 6|Pixel 5a 5G|Pixel 5|Pixel 4a 5G|Pixel 4a|Pixel 4 XL|Pixel 4|Pixel 3a XL|Pixel 3a|Pixel 3 XL|Pixel 3|Pixel 2 XL|Pixel 2|Pixel XL|Pixel`,
  OnePlus: `OnePlus 13|OnePlus 13R|OnePlus 12|OnePlus 12R|OnePlus 11|OnePlus 10 Pro|OnePlus 10T|OnePlus 10R|OnePlus 9 Pro|OnePlus 9|OnePlus 9R|OnePlus 8 Pro|OnePlus 8T|OnePlus 8|OnePlus 7T Pro|OnePlus 7T|OnePlus 7 Pro|OnePlus 7|OnePlus 6T|OnePlus 6|OnePlus 5T|OnePlus 5|OnePlus 3T|OnePlus 3|OnePlus 2|OnePlus X|OnePlus Nord 4|OnePlus Nord 3|OnePlus Nord 2T|OnePlus Nord 2|OnePlus Nord CE 4|OnePlus Nord CE 3 Lite|OnePlus Nord CE 3|OnePlus Nord CE 2 Lite|OnePlus Nord CE 2|OnePlus Nord CE|OnePlus Nord N30|OnePlus Nord N20|OnePlus Nord N10|OnePlus Nord N100|OnePlus Nord`,
  ASUS: `ROG Phone 9 Pro|ROG Phone 9|ROG Phone 8 Pro|ROG Phone 8|ROG Phone 7 Ultimate|ROG Phone 7|ROG Phone 6D Ultimate|ROG Phone 6D|ROG Phone 6 Pro|ROG Phone 6|ROG Phone 5s Pro|ROG Phone 5s|ROG Phone 5|ROG Phone 3|ROG Phone 2|ROG Phone|Zenfone 11 Ultra|Zenfone 10|Zenfone 9|Zenfone 8 Flip|Zenfone 8|Zenfone 7 Pro|Zenfone 7|Zenfone 6|Zenfone 5Z|Zenfone 5|Zenfone 4|Zenfone Max Pro M2|Zenfone Max Pro M1|Zenfone Max M2|Zenfone Max M1|Zenfone 3|Zenfone 2|Zenfone Live`,
  Sony: `Xperia 1 VI|Xperia 1 V|Xperia 1 IV|Xperia 1 III|Xperia 1 II|Xperia 1|Xperia 5 V|Xperia 5 IV|Xperia 5 III|Xperia 5 II|Xperia 5|Xperia 10 VI|Xperia 10 V|Xperia 10 IV|Xperia 10 III|Xperia 10 II|Xperia 10|Xperia Pro-I|Xperia Pro|Xperia XZ3|Xperia XZ2 Premium|Xperia XZ2|Xperia XZ1|Xperia XZ Premium|Xperia XZs|Xperia XZ|Xperia XA2 Ultra|Xperia XA2|Xperia XA1|Xperia X Compact|Xperia X|Xperia Z5 Premium|Xperia Z5|Xperia Z3|Xperia Z2|Xperia Z1|Xperia Z|Xperia M5|Xperia M4 Aqua|Xperia C5 Ultra`,
  Motorola: `Edge 50 Ultra|Edge 50 Pro|Edge 50 Fusion|Edge 40 Pro|Edge 40 Neo|Edge 40|Edge 30 Ultra|Edge 30 Pro|Edge 30 Neo|Edge 30|Edge 20 Pro|Edge 20|Razr 50 Ultra|Razr 50|Razr 40 Ultra|Razr 40|Razr 2022|Razr 5G|Razr 2019|Moto G85|Moto G84|Moto G73|Moto G72|Moto G54|Moto G53|Moto G52|Moto G42|Moto G32|Moto G30|Moto G22|Moto G20|Moto G10|Moto G9 Plus|Moto G8 Plus|Moto G7 Power|Moto G6|Moto G5|Moto E40|Moto E32|Moto E20|Moto E7 Plus|Moto E6 Plus|Moto E5|Moto X4|Moto X Style|Moto Z2 Force|Moto Z`,
  Nokia: `G60 5G|G50 5G|G42 5G|G22|G21|G20|G11 Plus|G11|G10|X30 5G|X20|X10|XR21|8.3 5G|8.1|8 Sirocco|7.2|7.1|6.2|6.1 Plus|6.1|6|5.4|5.3|5.1 Plus|5.1|5|4.2|3.4|3.2|3.1|3|2.4|2.3|2.2|2.1|2|1.4|1.3|1 Plus|C32|C31|C30|C22|C21 Plus|C21|C20|C12|C10|Lumia 950 XL|Lumia 950|Lumia 930|Lumia 830|Lumia 730|Lumia 640 XL|Lumia 640|Lumia 535|Lumia 520`,
  Lenovo: `Legion Phone Duel 2|Legion Phone Duel|Legion Y90|Z6 Pro|Z6|Z5 Pro GT|Z5 Pro|Z5s|Z5|ZUK Z2 Pro|ZUK Z2|K14 Plus|K13 Note|K12 Pro|K10 Note|K9 Note|K8 Note|K6 Note|K5 Pro|K5|A7000|A6000|Vibe K5 Plus|Vibe P1|Vibe X3`,
  ZTE: `nubia Z70 Ultra|nubia Z60 Ultra|nubia Z50 Ultra|nubia Z40 Pro|nubia Z30 Pro|nubia Z20|nubia Z18|nubia RedMagic 10 Pro|nubia RedMagic 9 Pro|nubia RedMagic 8 Pro|nubia RedMagic 7 Pro|nubia RedMagic 6|nubia RedMagic 5G|Axon 60 Ultra|Axon 50 Ultra|Axon 40 Ultra|Axon 30 Ultra|Axon 20 5G|Axon 10 Pro|Blade V50|Blade A73|Blade A72|Blade A71|Blade A51|Blade A31|Blade A7`,
  Sharp: `Aquos R9 Pro|Aquos R9|Aquos R8 Pro|Aquos R8|Aquos R7|Aquos R6|Aquos R5G|Aquos R3|Aquos R2 Compact|Aquos R2|Aquos R Compact|Aquos R|Aquos sense9|Aquos sense8|Aquos sense7|Aquos sense6|Aquos sense5G|Aquos sense4|Aquos Zero2|Aquos Zero|Aquos wish4|Aquos wish3|Aquos wish2|Aquos wish`,
  Meizu: `21 Pro|21|20 Pro|20|18s Pro|18s|18 Pro|18|17 Pro|17|16s Pro|16s|16th|15 Plus|15|M6 Note|M5 Note|M3 Note`,
  Nothing: `Phone (3)|Phone (2a) Plus|Phone (2a)|Phone (2)|Phone (1)|CMF Phone 2 Pro|CMF Phone 1`,
  iQOO: `iQOO 13|iQOO 12|iQOO 11|iQOO 10 Pro|iQOO 10|iQOO 9T|iQOO 9 Pro|iQOO 9|iQOO 8 Pro|iQOO 8|iQOO 7|iQOO 5 Pro|iQOO 5|iQOO 3|iQOO Neo 10|iQOO Neo 9 Pro|iQOO Neo 9|iQOO Neo 7|iQOO Z9|iQOO Z7|iQOO Z6`,
  Itel: `S25 Ultra|S25|S24|S23+|S23|S18 Pro|S18|S17|S16 Pro|S16|A80|A70|A60s|A60|A58|A56|A49|A48|A27|A26|A25|P65|P55 5G|P55|P40|P38|P37 Pro|P36 Pro|P36|P33 Plus|P33|RS4 Pro|RS4`,
  Advan: `G9 Pro|G9|G5 Plus|G5|G3 Pro|G3|NASA Pro|NASA Plus|NASA|S6 Plus|S6|S5E|S4Z|i6|i5C|i5E|i5|GX|Vandroid X7`,
  Evercoss: `M6|M5A|M50|M40|M40A|M30|U6|U60|U50A|U50|Xtream 1|Xtream 2|Xtream 2 Plus|Winner Y Smart|Winner Y Star|Winner T|A75|A74A|A65|A54|A53`,
  Redmi: `Redmi Note 14 Pro+ 5G|Redmi Note 14 Pro 5G|Redmi Note 14 Pro|Redmi Note 14 5G|Redmi Note 14|Redmi Note 13 Pro+ 5G|Redmi Note 13 Pro 5G|Redmi Note 13 Pro|Redmi Note 13 5G|Redmi Note 13|Redmi Note 12 Pro+ 5G|Redmi Note 12 Pro 5G|Redmi Note 12 Pro|Redmi Note 12 5G|Redmi Note 12|Redmi Note 11 Pro 5G|Redmi Note 11 Pro|Redmi Note 11S|Redmi Note 11|Redmi Note 10 Pro|Redmi Note 10S|Redmi Note 10|Redmi Note 9 Pro|Redmi Note 9S|Redmi Note 9|Redmi Note 8 Pro|Redmi Note 8|Redmi Note 7|Redmi 14C|Redmi 13C|Redmi 13|Redmi 12|Redmi 10C|Redmi 10|Redmi 9A|Redmi 9C|Redmi 9|Redmi 8A|Redmi 8|Redmi 7A|Redmi 7|Redmi 6A|Redmi 6|Redmi 5A|Redmi 5 Plus|Redmi 5|Redmi 4X|Redmi 4A|Redmi 3S|Redmi 3|Redmi 2|Redmi 1S`,
  BlackBerry: `KEY2 LE|KEY2|KEYone|Motion|Aurora|DTEK60|DTEK50|Priv|Passport|Classic|Leap|Q10|Q5|Z30|Z10|Bold 9900|Curve 8520`,
  HTC: `U24 Pro|U23 Pro|U20 5G|U12+|U11+|U11|U Ultra|10|One M9|One M8|One M7|Desire 22 Pro|Desire 21 Pro 5G|Desire 20 Pro|Desire 12+|Desire 10 Pro|Desire 820|Desire 816`,
  LG: `Wing|V60 ThinQ|V50 ThinQ|V40 ThinQ|V30|V20|G8 ThinQ|G7 ThinQ|G6|G5|G4|G3|Velvet|K92 5G|K62|K52|K50|K40|K30|Q60|Q7`,
  Honor: `Magic7 Pro|Magic6 Pro|Magic5 Pro|Magic4 Pro|Magic V3|Magic V2|Magic Vs|Magic Vs3|200 Pro|200|90|70|50|X9c|X9b|X9a|X8b|X8a|X7b|X7a|X6b|X6a|Play 8T`,
  Lava: `Agni 3|Agni 2|Agni 5G|Blaze Curve|Blaze 2|Blaze 5G|Blaze|Yuva 3 Pro|Yuva 3|Yuva 2|O2`,
  Panasonic: `Eluga Ray 800|Eluga Ray 700|Eluga I7|Eluga A4|P95|P85`,
  Microsoft: `Lumia 950 XL|Lumia 950|Lumia 640 XL|Lumia 640|Lumia 535|Lumia 532|Lumia 435`,
  Essential: `Phone PH-1`,
  Fairphone: `Fairphone 6|Fairphone 5|Fairphone 4|Fairphone 3+|Fairphone 3|Fairphone 2`,
  Blackview: `BV9300 Pro|BV9200|BV8900|BV8800|BV8000 Pro|A96|A90|A80 Pro`,
  Ulefone: `Armor 26 Ultra|Armor 24|Armor 23 Ultra|Armor 22|Armor 21|Armor 20WT|Armor 17 Pro`,
  Doogee: `V Max|V30|S100 Pro|S99|S98 Pro|S97 Pro|S96 GT`,
  Oukitel: `WP35|WP33 Pro|WP30 Pro|WP27|WP26|WP23 Pro|WP22|WP21|C36|C35`
};

// Tambahkan semua nama model ke katalog utama tanpa menggandakan entri yang sudah punya harga contoh.
const knownModels = new Set(phones.map(phone => `${phone.brand.toLowerCase()}|${phone.model.toLowerCase()}`));
for (const [brand, list] of Object.entries(modelCatalog)) {
  for (const model of list.split("|").map(name => name.trim()).filter(Boolean)) {
    const key = `${brand.toLowerCase()}|${model.toLowerCase()}`;
    if (!knownModels.has(key)) {
      phones.push({ brand, model, condition: "Cek kondisi", price: null });
      knownModels.add(key);
    }
  }
}

const grid = document.getElementById("phoneGrid");
const searchInput = document.getElementById("phoneSearch");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
let selectedBrand = "Semua";

const rupiah = value => new Intl.NumberFormat("id-ID", {
  style: "currency", currency: "IDR", maximumFractionDigits: 0
}).format(value);

function waUrl(message) {
  return `https://wa.me/${+639754439186}?text=${encodeURIComponent(message)}`;
}

function renderPhones() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = phones.filter(phone => {
    const matchesBrand = selectedBrand === "Semua" || phone.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesTerm = `${phone.brand} ${phone.model} ${phone.condition}`.toLowerCase().includes(term);
    return matchesBrand && matchesTerm;
  });
  const visible = filtered;
  grid.innerHTML = visible.map(phone => `
    <article class="phone-card">
      <div class="product-top">
        <div class="device-icon" aria-hidden="true"></div>
        <div><div class="product-brand">${phone.brand}</div><h3>${phone.model}</h3></div>
      </div>
      <span class="product-condition">${phone.condition}</span>
      <div class="product-bottom">
        <div><span class="price-label">${phone.price == null ? "Harga" : "Estimasi mulai"}</span><strong class="price-value">${phone.price == null ? "Cek kondisi" : rupiah(phone.price)}</strong></div>
        <button class="sell-button" aria-label="Tanya harga ${phone.brand} ${phone.model}" data-model="${phone.brand} ${phone.model}" data-price="${phone.price}">↗</button>
      </div>
    </article>`).join("");
  resultCount.textContent = `Menampilkan ${visible.length} model HP`;
  noResults.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  grid.querySelectorAll(".sell-button").forEach(button => {
    button.addEventListener("click", () => {
      const listedPrice = button.dataset.price ? ` Di situs tertulis estimasi mulai ${rupiah(Number(button.dataset.price))}.` : " Saya belum melihat estimasi harga untuk model ini.";
      const message = `Halo RUSAKIN, saya ingin cek harga HP ${button.dataset.model}.${listedPrice} Kondisi HP saya: `;
      window.open(waUrl(message), "_blank", "noopener,noreferrer");
    });
  });
}

document.getElementById("searchButton").addEventListener("click", renderPhones);
searchInput.addEventListener("input", renderPhones);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") renderPhones();
});
const brandFilter = document.querySelector(".brand-filter");
const filterLabel = brandFilter.querySelector(".filter-label");
const allBrands = [...new Set(phones.map(phone => phone.brand))].sort((a, b) => a.localeCompare(b));
brandFilter.innerHTML = "";
brandFilter.appendChild(filterLabel);
["Semua", ...allBrands].forEach(brand => {
  const chip = document.createElement("button");
  chip.className = `brand-chip${brand === "Semua" ? " active" : ""}`;
  chip.dataset.brand = brand;
  chip.textContent = brand;
  chip.type = "button";
  chip.addEventListener("click", () => {
    selectedBrand = brand;
    brandFilter.querySelectorAll(".brand-chip").forEach(item => item.classList.toggle("active", item === chip));
    renderPhones();
  });
  brandFilter.appendChild(chip);
});

function configureWhatsAppLinks() {
  document.querySelectorAll(".wa-link").forEach(link => {
    link.href = waUrl("Halo RUSAKIN, saya ingin bertanya tentang penjualan HP rusak.");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}
configureWhatsAppLinks();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderPhones();
