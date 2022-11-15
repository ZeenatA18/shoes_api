const galleryTemplate = document.querySelector('.galleryTemplate');
const gallery = Handlebars.compile(galleryTemplate.innerText);
const galleryElem = document.querySelector('.gallery');

axios
    .get("http://localhost:5000/")
    .then(result => {
        const gallery_results = result.data;

        galleryElem.innerHTML = gallery({
            gallery_results
        })
    })

const brand = document.querySelector('.brand');
const price = document.querySelector('.price');
const color = document.querySelector('.color');
const size = document.querySelector('.size');
const image = document.querySelector('.image');
const stock = document.querySelector('.in_stock');
const submit = document.querySelector('.submit');

submit.addEventListener('click', function (evt) {
    evt.preventDefault();  //helpful when debugging
    if (brand.value && price.value && color.value && size.value && image.value && stock.value) {
        axios.post("http://localhost:5000/addDate", {
            "brand": brand.value,
            "price": price.value,
            "color": color.value,
            "size": size.value,
            "in_stock": stock.value,
            "image": image.value
        })
    }
})