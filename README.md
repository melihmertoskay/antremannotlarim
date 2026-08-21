# Antrenman Notlarım

Kişisel antrenman programını, antrenman kartlarını, egzersiz açıklamalarını ve geçmiş günlük kayıtlarını tek yerde tutan sade bir GitHub Pages sitesidir.

Canlı site: https://melihmertoskay.github.io/antrenman-notlarim/

## Dosya düzeni

```text
index.html                         Ana sayfa
01-program/index.html              Program sayfası
02-gunluk/index.html               Günlük arayüzü
02-gunluk/gunlukverileri.js        Günlük veri modeli ve kayıt işlevleri
03-kartlar/index.html              Tüm antrenman kartlarının listesi
03-kartlar/kart.html               Tek kart görünümü ve hareket popup'ı
04-egzersizler/index.html          Kodlu egzersiz listesi ve popup'lar
04-egzersizler/egzersizverileri.js Egzersiz açıklamaları ve görseller
04-egzersizler/kodlar.js           Egzersiz kodları
```

Klasörlerin başındaki sayılar, bölümlerin ana sayfadaki sırasını ve dosya listesindeki düzenini gösterir.

## Sayfalar nasıl çalışır?

- **Program:** Hangi gün hangi antrenman kartının hedeflendiğini gösterir.
- **Günlük:** Gerçekte yapılan egzersizleri gösterir. Yeni kayıt eklenebilir; mevcut kayıt düzenlenebilir veya silinebilir. Bir güne tıklanınca o günün bütün kayıtları açılır.
- **Kartlar:** Salon, ekipmansız ve yüzme kartlarını listeler. Bir kart açıldığında hareket sırası, kart günlüğü ve kart hakkındaki bilgi görülür. Hareket adına tıklanınca açıklama popup'ı açılır.
- **Egzersizler:** Hareketleri kas bölgesine göre kodlu listeler. Örneğin `B1 - Ayakta dambıllı calf raise`. Harekete tıklanınca yapılışı, çalışan kaslar, uyarılar ve o harekete ait günlük kayıtları açılır.

## HTML ve JavaScript nedir?

HTML (`.html`) sayfanın iskeletidir: başlıkları, menüleri, tabloları, formları ve popup kutularını tanımlar. JavaScript (`.js`) sayfanın davranışıdır: kayıt ekleme, düzenleme, silme, listeleme ve aynı kaydı farklı sayfalarda gösterme gibi işleri yapar.

## Günlük verisinin akışı

Her günlük satırı en az şu alanları taşır:

```js
{
  id: "benzersiz-kayit-kodu",
  gun: "2026-08-19",
  kart: "S1",
  egzersiz: "Dambıl bench press",
  agirlik: "10 kg",
  setTekrar: "3 × 10",
  aciklama: "İsteğe bağlı not"
}
```

`02-gunluk/gunlukverileri.js` aynı kayıtları üç yerde kullanılabilir hale getirir:

1. Günlük sayfası kayıtları tarihe göre gruplar.
2. Kart sayfası kayıtları `kart` alanına göre süzer.
3. Egzersiz sayfası kayıtları `egzersiz` alanına göre süzer.

Bu nedenle Günlük sayfasından eklenen tek bir kayıt, ilgili kartın günlüğünde ve ilgili egzersizin popup'ında da görünür.

## Kayıt ekleme, düzenleme ve silme

Günlük sayfasındaki **Kayıt ekle** düğmesi form popup'ını açar. Gün, kart ve egzersiz zorunludur; ağırlık, set/tekrar ve not isteğe bağlıdır. Bir kaydın altındaki **Düzenle** aynı formu dolu açar. **Sil** onaydan sonra kaydı kaldırır.

## Veriler nerede saklanır?

GitHub Pages statik bir barındırma hizmetidir; tarayıcı doğrudan repodaki `gunlukverileri.js` dosyasını değiştiremez. Arayüzden yapılan ekleme, düzenleme ve silmeler `localStorage` ile kullanıcının tarayıcısında saklanır.

- Aynı cihaz ve aynı tarayıcıda sayfa yeniden açılsa da kayıtlar kalır.
- Başka telefon veya bilgisayara otomatik aktarılmaz.
- Tarayıcının site verileri temizlenirse yerel değişiklikler silinir ve başlangıç verileri yeniden görünür.
- Cihazlar arası eşitleme için ileride bir veritabanı ve giriş sistemi eklenmelidir.

Başlangıç kayıtları `GUNLUK_BASLANGIC` dizisindedir. Kalıcı olarak herkese yayımlanacak bir kayıt gerekiyorsa bu dizi düzenlenip GitHub'a gönderilmelidir.

## Egzersiz kodları

- `I`: Isınma
- `G`: Göğüs, omuz ve arka kol
- `S`: Sırt ve ön kol
- `B`: Bacak ve kalça
- `K`: Karın ve merkez bölge
- `Y`: Yüzme

Kodların eşlemesi `04-egzersizler/kodlar.js` dosyasındadır. Açıklamalar ve görsel eşlemeleri `egzersizverileri.js` içindedir. Egzersiz görselleri `04-egzersizler/gorseller/` klasöründe ayrı PNG dosyaları olarak tutulur. Aynı egzersiz farklı antrenman kartlarında yer aldığında tek görsel eşlemesini paylaşır.

## Yayınlama

Site `main` dalından GitHub Pages ile yayınlanır. Repoya gönderilen değişikliklerin canlı adrese ulaşması kısa bir süre alabilir. Site bir derleme sistemi kullanmaz; HTML, CSS ve JavaScript dosyaları doğrudan tarayıcıda çalışır.

## Bakım kuralı

Sayfa yapısı, klasörler, veri modeli veya kayıt akışı her değiştiğinde bu README aynı değişiklikle birlikte güncellenmelidir.


## S3 egzersiz görselleri

S3 kartındaki altı hareket için başlangıç ve bitiş pozisyonlarını, hareket yönünü ve çalışan kas bölgelerini gösteren görseller eklenmiştir. Görsel dosyaları egzersiz adlarıyla eşleştirilir; hem antrenman kartındaki hareket popup'ında hem Egzersizler sayfasındaki popup'ta görünür.


## Son veri güncellemesi

21 Ağustos 2026 tarihli S3 antrenmanı dört egzersiz kaydıyla başlangıç verilerine eklenmiştir. Başlangıç verisi sürümleme mekanizması, yayımlanan yeni kayıtları tarayıcıdaki mevcut kişisel kayıtları silmeden birleştirir.


19 Ağustos 2026 tarihli S1 antrenmanına Incline dambıl press (10 kg, 3 × 10) kaydı sonradan eklenmiştir.
