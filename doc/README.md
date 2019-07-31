# Vue router
> Đầu tiên để sử dụng vue-router thì ta sẽ cần cài đặt vue-js và một vài package cần thiết. tôi sẽ hướng 
dẫn các bạn tạo project bằng vue-cli đây là một công cụ giúp ta xây dựng một ứng dụng rất nhanh chỉ với
vài dòng lệnh. Đầu tiên ta cần mở cửa sổ terminal lên và thực hiện lệnh sau để cài đặt vue-cli vào máy bạn.


     - # install vue-cli
     $ npm install --global vue-cli

> Sau khi đã cài đặt xong thì bạn vào một thư mục bạn muốn đặt project của bạn rồi bật cửa sổ terminal của thư
mục ý lên rồi thêm lệnh này vào.

     vue create router-app
> sau đó nó sẽ hiển thị lên terminal một số các câu hỏi như tên project, tác giả ... nếu bạn muốn để mặc định
thì chỉ cần nhấn enter cho đến khi lệnh được chạy trên terminal. Sau khi chạy xong cấc bạn tiếp tục chạy 
lệnh :

     cd router-app
     npm install
     npm run dev
> Sau khi chạy xong các bạn vào đường dẫn  http://localhost:8080 để xem kết quả và nhớ không được tắt terminal 
đi nếu không project của bạn sẽ bị dừng.

> Bây giờ bạn có thể thấy các cấu trúc thư mục project của bạn. Bây giờ bạn sẽ cần cài đặt vue-router vào
trong project cuẩ mình bằng lệnh 

     npm install vue-router

> Sau khi cài đặt xong bạn vào file package.json để kiểm tra xem mình đã cài thành công chưa. Nếu thành công
thì file package.json của bạn sẽ hiển thị các file đã được cài đặt trong "dependencies" như này:
  
       "dependencies": {
         "core-js": "^2.6.5",
         "les": "^1.0.1",
         "vue": "^2.6.10",
         "vue-router": "^3.0.7"
       },
> rồi tiếp tục ta sẽ vào file main.js rồi thêm đoạn code sau đây vào

```javascript
     import Vue from 'vue'
     import App from './App.vue'
     import router from './router/router' // import vue-router
     
     Vue.config.productionTip = false;
     
     new Vue({
       render: h => h(App),
       router // dùng vue router
     }).$mount('#app');
```
> Sau khi đã cấu hình xong trong file main.js bây giờ ta cần tạo ra một vài component để làm ví dụ, các
bạn vào thư mục components rồi tạo ra các file Home.vue, Contact.vue, About.vue rồi thêm đoạn code như sau

> Home.vue
```html
<template>
    <div>
        <h1>Home page</h1>
    </div>
</template>
<script>
    export default {
        name: 'Home'
    }
</script>
```
> Contact.vue
```html
<template>
    <div>
        <h1>Contact page</h1>
    </div>
</template>
<script>
    export default {
        name: 'Contact'
    }
</script>
```
> About.vue
```html
<template>
    <div>
        <h1>About page</h1>
    </div>
</template>
<script>
    export default {
        name: 'About'
    }
</script>
```

> Tiếp tục ta sẽ tạo file router.js trong một thư mục tao tạo ra có đường dẫn src/router/router.js
trong file router.js ta sẽ thêm những câu lệnh sau

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home.vue";
import Contact from "@/components/Contact.vue";
import About from "@/components/About.vue";

Vue.use(Router);

export default new Router({
    routes: [ // bao gồm danh sách router
        {
            path: '/', // đường dẫn để truy cập vào componet
            name: 'Home',
            component: Home // component bạn muốn hiển thị
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
    ]
})
```
> Trong file này thì ta sẽ import các component mình cần sử dụng trong router rồi sau đó ta sẽ cài đặt đường
dẫn để di chuyển đển các componet.

> Sau khi đã code xong thì các bạn vào file App.vue và thêm đoạn code sau vào trong thẻ template

```html
     <router-link to="/">Home</router-link>
     <router-link to="/contact">Contact</router-link>
     <router-link to="/about">About</router-link>
     
     <router-view></router-view>
```
> Ở trong đoạn code này thì thẻ router-link nó có tác như thẻ a trong html vậy, thuộc tính **to** nó cũng
giống như thuộc tính **href** trong thẻ a, nó chứa đường dẫn đến một nơi nào đó.

> Còn thẻ router-view thì sẽ là nơi hiển thị component khi url thay đổi. Xong bây giờ bạn có thể chạy project
lên và xem kết quả :D.
         