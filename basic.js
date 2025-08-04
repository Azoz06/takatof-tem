    // محاكاة عملية التحميل باستخدام JavaScript
window.addEventListener("load", function () {
    // إخفاء دائرة التحميل بعد 3 ثوانٍ
    setTimeout(() => {
        document.getElementById("loading-container").style.display = "none";
    }, 800); // المدة بالمللي ثانية

    (function () {
        const unsupportedBrowsers = [
            'MSIE',        // Internet Explorer
            'Trident',     // IE 11
            'Edge/1',      // Edge Legacy
  
        ];

        const browserInfo = navigator.userAgent;

        const isUnsupported = unsupportedBrowsers.some(browser => browserInfo.includes(browser));

        // التحقق من دعم المتصفحات القديمة و الميزات الحديثة
        if (isUnsupported || !window.fetch || !window.Promise) {
            // إذا كان المتصفح غير مدعوم
            document.body.innerHTML = `
                <html>
                    <head>
                        <title>Unsupported Browser</title>
                         <link rel="stylesheet" href="/css/basics.css">
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f4f4f4;
                                text-align: center;
                                padding: 50px;
                            }
                            h1 {
                                color: #d9534f;
                            }
                            p {
                                font-size: 18px;
                                color: #333;
                            }
                            a {
                                text-decoration: none;
                                color: #007bff;
                            }
                            img {
                                max-width: 200px;
                                margin: 20px auto;
                            }
                                
                        </style>
                    </head>
                    <body>
                        <img src="/img/BlockedBrowser.svg" alt="Unsupported Browser">
                        <h1>Unsupported Browser</h1>
                        <p>Your browser is not supported. For the best experience, please use one of the following:</p>
                        <ul>
                            <li>Google Chrome</li>
                            <li>Apple Safari</li>
                            <li>Microsoft Edge</li>
                        </ul>
                        <p>If you believe this message is incorrect, please contact support.</p>
                    </body>
                </html>
            `;
        }
    })();

    // التحقق إذا كان الجهاز هاتفًا ذكيًا
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /android|iphone|kindle|ipad|ipod/i.test(userAgent) && !/tablet|ipad/i.test(userAgent);

    if (isMobile) {
        // استيراد خط من خطوط جوجل
        const googleFontLink = document.createElement('link');
        googleFontLink.rel = 'stylesheet';
        googleFontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
        document.head.appendChild(googleFontLink);

        // عرض صفحة HTML خاصة عند استخدام الهاتف الذكي
        if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
            // إذا كان الجهاز هو هاتف ذكي أو جهاز لوحي
            document.body.innerHTML = `
               <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f8f9fa;                 font-family: "Dosis", sans-serif; 
    font-weight: 800; 
    font-style: normal;
    font-size: 16px;
     text-align: center; padding: 20px; box-sizing: border-box;">
    <img src="/img/phone-not-allowed.png" alt="Error" style="margin-bottom: 20px; border-radius: 10px; max-width: 100%; height: auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <h1 style="color: #dc3545; font-size: 24px; margin-bottom: 10px; font-weight: 700;">We Apologize</h1>
    <p style="color: #6c757d; font-size: 18px; margin-bottom: 20px; font-weight: 400;">The system does not work on smartphones</p>
    <p style="color:rgb(12, 155, 36); font-size: 20px; font-weight: 400;">It works on all other devices</p>
</div>
            `;
          } else {
            // إذا كان المستخدم في وضع التصفح الخفي
            function detectIncognito() {
              const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
              if (fs) {
                fs(window.TEMPORARY, 100, function () {}, function () {
                  document.body.innerHTML = `
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f8f9fa;                 font-family: "Dosis", sans-serif; 
    font-weight: 800; 
    font-style: normal;
    font-size: 16px;
     text-align: center; padding: 20px; box-sizing: border-box;">
    <img src="/img/phone-not-allowed.png" alt="Error" style="margin-bottom: 20px; border-radius: 10px; max-width: 100%; height: auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <h1 style="color: #dc3545; font-size: 24px; margin-bottom: 10px; font-weight: 700;">We Apologize</h1>
    <p style="color: #6c757d; font-size: 18px; margin-bottom: 20px; font-weight: 400;">The system does not work on smartphones</p>
    <p style="color:rgb(12, 155, 36); font-size: 20px; font-weight: 400;">It works on all other devices</p>
</div>
                  `;
                });
              } else {
                // إذا لم يتمكن من اكتشاف التصفح الخفي، لا يعرض أي شيء
              }
            }
          
            detectIncognito();
          }
          
    }

        // تأكد من دعم HTTPS
        // if (window.location.protocol !== "https:") {
        //     document.body.innerHTML = `
        //         <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f8f9fa; font-family: 'Roboto', sans-serif; text-align: center; padding: 20px; box-sizing: border-box;">
        //             <h1 style="color: #dc3545; font-size: 24px; margin-bottom: 10px; font-weight: 700;">Error</h1>
        //             <p style="color: #6c757d; font-size: 18px; margin-bottom: 20px; font-weight: 400;">Your connection is not secure. Please use a secure HTTPS connection.</p>
        //         </div>
        //     `;
        // }
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // منع السلوك الافتراضي للقائمة السياقية

    Swal.fire({
        icon: "warning",
        title: "Right Click Disabled",
        text: "Due to security reasons, right click is not allowed.",
        confirmButtonText: "OK"
    });
});

window.addEventListener("keydown", function(event) {
    let keyPressed = ''; // متغير لتخزين الزر الذي تم الضغط عليه

    // التحقق من الأزرار التي تم الضغط عليها
    if (event.keyCode >= 112 && event.keyCode <= 123) { // F1 إلى F12
        keyPressed = `F${event.keyCode - 111}`;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) { // Ctrl+Shift+I
        keyPressed = 'Ctrl+Shift+I';
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 67) { // Ctrl+Shift+C
        keyPressed = 'Ctrl+Shift+C';
    } else if (event.ctrlKey && event.shiftKey && event.keyCode === 74) { // Ctrl+Shift+J
        keyPressed = 'Ctrl+Shift+J';
    } else if (event.ctrlKey && event.keyCode === 85) { // Ctrl+U
        keyPressed = 'Ctrl+U';
    } else if (event.ctrlKey && event.keyCode === 83) { // Ctrl+S
        keyPressed = 'Ctrl+S';
    } else if (event.ctrlKey && event.keyCode === 80) { // Ctrl+P
        keyPressed = 'Ctrl+P';
    } else if (event.keyCode === 27) { // Escape
        keyPressed = 'Escape';
    }

    // إذا تم الضغط على أحد الأزرار المدعومة
    if (keyPressed) {
        event.preventDefault();  // منع التحديث أو السلوك الافتراضي
        Swal.fire({
            title: 'Action Blocked',
            text: `The button ${keyPressed} has been blocked and cannot be used for security reasons.`,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#dc3545', // لون الزر
        });
    }
});

fetch('https://ipinfo.io?token=edea75df8fc046')
    .then(response => response.json())
    .then(data => {
        const country = data.country; // استخراج البلد من البيانات

        if (country === 'SA') {
            // المستخدم في السعودية، لا حاجة لإظهار شيء
        } else {
            // المستخدم خارج السعودية، عرض رسالة الخطأ بالترتيب المطلوب
            document.body.innerHTML = `
                <html>
                    <head>
                        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                        <link rel="stylesheet" href="/css/basics.css">
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
                        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&family=Beiruti:wght@200..900&family=Dosis:wght@200..800&display=swap" rel="stylesheet">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                        <title>Access Denied</title>
                        <style>
                            body {
                                font-family: "Dosis", sans-serif;
                                background-color: #f4f4f4;
                                text-align: center;
                                padding: 50px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                            }
                            h1 {
                                color: #d9534f;
                                margin: 20px 0;
                            }
                            p {
                                font-size: 18px;
                                color: #333;
                                margin: 10px 0;
                            }
                            img {
                                max-width: 100%;
                                height: auto;
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }
                            .contact-info {
                                margin-top: 30px;
                            }
                            .contact-info p {
                                font-size: 18px;
                                margin: 5px 0;
                            }
                            .contact-info a {
                                color: #333;
                                text-decoration: none;
                                font-size: 20px;
                            }
                             
                                main{
                                 padding-bottom: 100px; 
                                }

                                   img {
                           
                                width: 20%;
                                 }
                        </style>
                    </head>
                    <body>
                    <main>
                        <!-- الصورة -->
                        <img src="/img/UserLocation.svg" alt="Access Restricted">
                        
                        <!-- جملة "Access Denied" -->
                        <h1>Access Denied</h1>
                        
                        <!-- الفقرة -->
                        <p>Your location appears to be outside Saudi Arabia. For data privacy and security reasons, the System is unavailable for access outside Saudi Arabia.</p>
                        <p>Please contact support if you believe this message is incorrect.</p>
                        <!-- رقم الهاتف -->
                        <div class="contact-info">
                            <p><a href="tel:920002005"><i class="fa-solid fa-phone"></i> : 920002005</a></p>
                            <p><a href="mailto:support@seha.sa"><i class="fa-solid fa-envelope"></i> : support@seha.sa</a></p>
                        </div>
                    </main>
                    <footer></footer>
                    </body>
                </html>
            `;

            // عرض رسالة بعد 3 ثوانٍ
            // setTimeout(() => {
            //     Swal.fire({
            //         title: 'ERROR!',
            //         text: 'Some elements of the page did not load properly. Please click OK to attempt to reload the elements without reloading the entire page.',
            //         icon: 'info',
            //         confirmButtonText: 'OK'
            //     });
            // }, 1000);
        }
    })
    .catch(error => {
        // في حال حدوث خطأ في طلب الـ API
        document.body.innerHTML = `
            <html>
                <head>
                    <title>Error</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            text-align: center;
                            padding: 50px;
                        }
                        h1 {
                            color: #d9534f;
                        }
                        p {
                            font-size: 18px;
                            color: #333;
                        }
                    </style>
                </head>
                <body>
                    <h1>Error Occurred</h1>
                    <p>${error.message}</p>
                </body>
            </html>
        `;
    });

window.onbeforeunload = function (e) {
    // إلغاء أي محاولة لإغلاق النافذة
    e.preventDefault();
    e.returnValue = ""; // بعض المتصفحات تتطلب هذه القيمة لعرض التحذير
  };
