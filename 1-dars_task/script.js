const bnt1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const form=document.querySelector("#form_container");
const submit=document.querySelector("#submit")

    bnt1.addEventListener('click', () => {
        form.innerHTML = 
        `<form>
        <input type="text" id="username" name="username" required placeholder="Username..." >
        <br>
        <input type="email" id="email" name="email" required placeholder="Email...">
        <br>
        <input type="password" id="password" name="password" required placeholder="Password...">
        <br>
        <button onclick="sub()" id="submit" type="submit">Register</button>
      </form>`
      });
      
      btn2.addEventListener('click', () => {
        form.innerHTML = 
          `<form>
            <input type="text" id="username" name="username" required placeholder="Username...">
            <br>
            <input type="password" id="password" name="password" required placeholder="Password...">
            <br>
            <button onclick="submit()" id="submit">Login</button>
          </form>`
      });
function sub(){
        alert("🎉 Form muvaffaqiyatli yakunlandi!!");
    };

    