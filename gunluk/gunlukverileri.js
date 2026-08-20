const KART_ADI={
  S1:"Göğüs, Omuz ve Arka Kol",
  S2:"Sırt, Arka Omuz ve Ön Kol",
  S3:"Bacak, Kalça ve Baldır",
  S4:"Tam Vücut",
  E1:"Ekipmansız Üst Vücut",
  E2:"Ekipmansız Bacak ve Kalça",
  E3:"Evde Tam Vücut",
  E4:"Bantla Sırt ve Çekiş",
  Y1:"Teknik ve Rahat Yüzme",
  Y2:"Kısa Aralıklı Yüzme",
  Y3:"Kesintisiz Yüzme"
};

// Her antrenman günü tek kayıt olarak burada tutulur.
// gun: sıralamada kullanılan tarih, tarih: sayfada görünen tarih,
// kart: uygulanan kart, aciklama: antrenman notu.
const GUNLUK=[
  {
    gun:"2026-08-19",
    tarih:"19 Ağustos 2026",
    kart:"S1",
    aciklama:"",
    egzersizler:[
      {ad:"Dambıl bench press",agirlik:"10 kg",setTekrar:"3 × 10"},
      {ad:"Dambıl lateral raise",agirlik:"7 kg",setTekrar:"3 × 10"},
      {ad:"Oturarak dambıl shoulder press",agirlik:"7 kg",setTekrar:"3 × 10"},
      {ad:"Tek dambılla overhead triceps extension",agirlik:"10 kg",setTekrar:"3 × 10"}
    ]
  }
];
