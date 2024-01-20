async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('I am resolve now');
            resolve(455)
        }, 2000);
    })
}

async function main() {

    let html = `<span class="box">.</span>
    <span class="box2">.</span>
    <span class="box3">.</span>`

    let cont = document.querySelector(".container");
    let div1 = document.createElement("div");
    div1.innerHTML = `Initializing Hacking${html}`

    let div2 = document.createElement("div");
    div2.innerHTML = `Reading Your Files${html}`

    let div3 = document.createElement("div");
    div3.innerHTML = `Password Files Detected${html}`

    let div4 = document.createElement("div");
    div4.innerHTML = `Sending all passwords and personal files to server${html}`

    let div5 = document.createElement("div");
    div5.innerHTML = `Cleaning up${html}`

    await getData();
    cont.appendChild(div1)

    await getData();
    cont.appendChild(div2)

    await getData();
    cont.appendChild(div3)

    await getData();
    cont.appendChild(div4)

    await getData();
    cont.appendChild(div5)
}

main()
