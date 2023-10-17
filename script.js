// Google sheet Api Url link
const api_url = "https://script.googleusercontent.com/macros/echo?user_content_key=_4LeQenBCeNp4nFOMe0S5wnpMnhuwyDhYU8A5G0PuDKxLK_Afg_lbJ6o0WCKmxY_Cg6NMFzZP3QRe-IS8AIijyCN9xLfdxOxm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDJ8pM0NvofiXeGxPyV48F4ZjbFsk7vEalqYWBfSLWL-AOOi8zW05xdZNTHIvX9Di8hm2Jd6z55EJhORrQQiHoQd1tKugev4rtz9Jw9Md8uu&lib=MmJsssL3gkupaN8rXukdgsSeAVTw1jx_o";

async function projectdata(url) {
    const response = await fetch(url);
    var data = await response.json();

    ShowPorjectdata(data);
}

projectdata(api_url);

function ShowPorjectdata(data) {
    // console.log(data);
    let datacard = ``;

    for (let projectdatas of data.content) {
       datacard +=`
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <div class="card">
                    <li> ${projectdatas[0]}</li>
                    <li> ${projectdatas[1]}</li>
                    <li> ${projectdatas[2]}</li>
                    <li> ${projectdatas[3]}</li>


                </div>
            </div>
       `
    }
    document.querySelector("#getData").innerHTML = datacard;
};


// form data save to google sheet through api
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    document.querySelector("#sub").value = "submiting...";
    let data = new FormData(form);
    // console.log(data);
    fetch('https://script.google.com/macros/s/AKfycbzljfGxZVWPnvEfUa2pnEBjoyONWIkOBpDAcMeTxQ-Qq4VkB7d9Wqr5qn1dG-BtegRmlQ/exec', {
        method: "POST",
        body: data,
        // mode: "no-cors"
          
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        document.querySelector("#sub").value = "Submit"
        form.reset();
    });
});