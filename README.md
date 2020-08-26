<h4>Bu projede Vue Teknolojileri kullanılarak kütüphane işlemlerinin kolayca idare edilmesini sağlayacak bir uygulama geliştirdim.
  <br>
  <br>
Kitap Ekleme-Silme-Kulanıcıya tanımlama gibi işlemleri kolayca yapabiliceğimiz bu uygulamada aşağıda maddeler halinde belirtilen işlemler yapıldı.</h4>

<h5>Aşağıda uygulamanın çalışır halinin videosuna ulaşabilirsiniz</h5>


- Açılış sayfasında gördüğümüz iki adet bölme kullanıcı işlemleri ve kitap işlemlerini ayrırıyor
- Vue router ile sayfalar arasında geçiş yaparak kitap ekleme sayfasına gidiyoruz ve kitabın adı, yazarı ve resmini giriyoruz.Bu alanların tümü doldurulmalıdır aksi halde ekleme yapmaz ve uyarı alırız.
- Kitap eklendiğinde kitap listesi sayfasında kitaplar yerleşiyor.
- Kitap listesi sayfasında kitabı sil dediğimizde bir modal açılıyor ve buradan silme işlemini yapabiliyoruz.
- Daha sonra eklenen kitaplar kullanıcıya tanımlanmak üzere Set user  kısmındaki dropdown a geyor ve burada kullanıcı bilgileri girildikten sonra kullanıcıya tanımlanıyor.
- Bu tanımlaanan kitap daha sonrasında get to user kısmında render olyor.
- Vue persist kullanarak tüm verilerimiz local storage da depolanıyor.




[![](http://img.youtube.com/vi/33TDXlHqlIo/0.jpg)](http://www.youtube.com/watch?v=33TDXlHqlIo "")

## TODOS

- [x] Vue CLI ortamında roje oluşturuldu. 
- [x] PostCss Configration yapıldı
- [x] Vue Router ile sayfalar arası geçişler ayarlandı.
- [x] Header tasarımı ve Anasayfa için layout oluşturuldu.
- [x] Proje host etmek için vercel.com deploy konfigrasyonu yapıldı
- [x] Sayfa UI tasarımına uygun CSS kodları yazıldı.
- [x] Vee-Validate kütüphanesi ile input validasyonları yapıldı. 
- [x] Vue-Persist kullanılarak local hostta veriler tutuldu
- [x] Vue-Svg-Loader Kullanılarak SVG iconları component olarak çağrıldı.
- [x] İlgili CRUD işlemleri yapılarak kitap ekleme ve silme yapıldı.
- [x] Bootstrap Toaster kullanılarak etkileşim durumlarında uyarılar gösterildi.
- [x] Eklenen kitapların kullanıcıya tanımlamaları yapıldı.
