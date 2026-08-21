const KART_ADI={S1:"Göğüs, Omuz ve Arka Kol",S2:"Sırt, Arka Omuz ve Ön Kol",S3:"Bacak ve Kalça",E1:"Üst Vücut",E2:"Alt Vücut",E3:"Tüm Vücut",Y1:"Teknik ve Rahat Tempo",Y2:"Tempo ve Kondisyon",Y3:"Kesintisiz Yüzme"};

const GUNLUK_BASLANGIC=[
  {id:"ornek-s1-1",gun:"2026-08-19",kart:"S1",egzersiz:"Dambıl bench press",agirlik:"10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"ornek-s1-2",gun:"2026-08-19",kart:"S1",egzersiz:"Dambıl lateral raise",agirlik:"7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"ornek-s1-3",gun:"2026-08-19",kart:"S1",egzersiz:"Oturarak dambıl shoulder press",agirlik:"7 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"ornek-s1-4",gun:"2026-08-19",kart:"S1",egzersiz:"Tek dambılla overhead triceps extension",agirlik:"10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-19-s1-incline-dambil-press",gun:"2026-08-19",kart:"S1",egzersiz:"Incline dambıl press",agirlik:"10 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-21-s3-goblet-squat",gun:"2026-08-21",kart:"S3",egzersiz:"Goblet squat",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-21-s3-deadlift",gun:"2026-08-21",kart:"S3",egzersiz:"Deadlift",agirlik:"40 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-21-s3-hip-thrust",gun:"2026-08-21",kart:"S3",egzersiz:"Bench üzerinde dambıllı hip thrust",agirlik:"15 kg",setTekrar:"3 × 10",aciklama:""},
  {id:"2026-08-21-s3-bulgarian-split-squat",gun:"2026-08-21",kart:"S3",egzersiz:"Bulgarian split squat",agirlik:"5 kg",setTekrar:"Her bacak 3 × 10",aciklama:"Dengemi korumakta zorlandım. Ağırlık ağır gelmese de dengesiz kaldım ve yorulduğum için zor tamamladım. Çok terledim. Calf raise yapmadan antrenmanı bitirdim."}
];

const GUNLUK_DEPOLAMA_ANAHTARI="antrenman-notlarim-gunluk-v1";
const GUNLUK_BASLANGIC_SURUMU="2026-08-21-2";
const GUNLUK_SURUM_ANAHTARI=GUNLUK_DEPOLAMA_ANAHTARI+"-baslangic-surumu";
function gunlukKopyala(deger){return JSON.parse(JSON.stringify(deger))}
function gunlukKayitlariniGetir(){
  try{
    const veri=localStorage.getItem(GUNLUK_DEPOLAMA_ANAHTARI);
    let liste=veri?JSON.parse(veri):gunlukKopyala(GUNLUK_BASLANGIC);
    if(localStorage.getItem(GUNLUK_SURUM_ANAHTARI)!==GUNLUK_BASLANGIC_SURUMU){
      const mevcutIdler=new Set(liste.map(k=>k.id));
      GUNLUK_BASLANGIC.forEach(k=>{if(!mevcutIdler.has(k.id))liste.push(gunlukKopyala(k))});
      localStorage.setItem(GUNLUK_DEPOLAMA_ANAHTARI,JSON.stringify(liste));
      localStorage.setItem(GUNLUK_SURUM_ANAHTARI,GUNLUK_BASLANGIC_SURUMU);
    }
    return liste;
  }
  catch(hata){return gunlukKopyala(GUNLUK_BASLANGIC)}
}
function gunlukKayitlariniKaydet(kayitlar){localStorage.setItem(GUNLUK_DEPOLAMA_ANAHTARI,JSON.stringify(kayitlar))}
function gunlukYeniId(){return `kayit-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}
function gunlukKaydiEkle(kayit){const liste=gunlukKayitlariniGetir();liste.push({...kayit,id:kayit.id||gunlukYeniId()});gunlukKayitlariniKaydet(liste)}
function gunlukKaydiGuncelle(id,kayit){const liste=gunlukKayitlariniGetir();const i=liste.findIndex(x=>x.id===id);if(i>-1){liste[i]={...liste[i],...kayit,id};gunlukKayitlariniKaydet(liste)}}
function gunlukKaydiSil(id){gunlukKayitlariniKaydet(gunlukKayitlariniGetir().filter(x=>x.id!==id))}
function gunlukTarihEtiketi(iso){const [y,a,g]=iso.split("-").map(Number);return new Intl.DateTimeFormat("tr-TR",{day:"numeric",month:"long",year:"numeric"}).format(new Date(y,a-1,g))}
const GUNLUK=gunlukKayitlariniGetir();
