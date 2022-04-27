let services = new Services();

console.log(services.fetchData());

const getEle = (id) => document.getElementById(id);

const getUser = () => {
    services.fetchData()
        .then(function (result) {
            console.log(result.data);
            renderHTML(result.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
getUser();

const renderHTML = (data) => {
    let content = "";
    for (let i = 0; i < data.length; i++) {
        if(data[i].loaiND === 'GV'){
            content += `
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <div class="box">
                    <img src="./img/${data[i].hinhAnh}" alt="">
                    <div class="info__content">
                        <p>${data[i].ngonNgu}</p>
                        <h3>${data[i].hoTen}</h3>
                        <p>${data[i].moTa}</p>
                    </div>
                </div>
            </div>
            `
        }    
    }
    getEle('danhSachUsers').innerHTML = content;
}

