const cart = document.getElementById('cart');
const open_cart = document.getElementById('open_cart');
const add_to_cart = document.getElementById('add_to_cart');
const back_cart = document.getElementById('back_cart');
const empty_cart = document.getElementById('empty_cart');
const product_cart = document.getElementById('product_cart');
const delete_item = document.getElementById('delete_item');
const increase = document.getElementById('increase');
const increase_decrease = document.getElementById('increase_decrease');
const decrease = document.getElementById('decrease');
const no_of_item = document.getElementById('no_of_item');
const total_price = document.getElementById('total_price');
const img = document.getElementById('img');
const lightbox = document.getElementById('lightbox');
const lightbox_data = document.getElementById('lightbox_data');
const lightbox_close = document.getElementById('lightbox_close');
const lightbox_img = document.getElementById('lightbox_img');
const lightbox_previous = document.getElementById('lightbox_previous');
const lightbox_next = document.getElementById('lightbox_next');
const hamburgur = document.getElementById('hamburgur');
const hamburgur_back = document.getElementById('hamburgur_back');
const hamburgur_menu = document.getElementById('hamburgur_menu');
const previous = document.getElementById('previous');
const next = document.getElementById('next')

const imgs = document.getElementsByClassName('imgs');
const imgsspan = document.getElementsByClassName('spans');
const lightbox_spans = document.getElementsByClassName('lightbox_spans');
const lightbox_imgs = document.getElementsByClassName('lightbox_imgs')

var cart_open_close = 0;
var activeimgspan = 0;
var activeimg = 0;
var lightboxactiveimgspan = 0;
var lightboxactiveimg = 0;
var hamburgur_on_off = 0
var img_no = 0;

const img_array = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']

const cart_on_of = () => {
  if (cart_open_close === 0) {
    open_cart.style.display = "block";
    back_cart.style.display = "block";
    no_of_item.innerHTML = increase_decrease.innerHTML;
    total_price.innerHTML = ` $s${increase_decrease.innerHTML * 125}.00`;
    cart_open_close = 1;
  } else {
    open_cart.style.display = "none";
    back_cart.style.display = "none";
    cart_open_close = 0;
  }
}

cart.addEventListener("click", () => { cart_on_of() });
back_cart.addEventListener("click", () => { cart_on_of() });

const delete_add_to_cart = (ele1, ele2) => {
  ele1.style.display = 'none';
  ele2.style.display = 'flex';
}

add_to_cart.addEventListener("click", () => { delete_add_to_cart(empty_cart, product_cart) });
delete_item.addEventListener("click", () => { delete_add_to_cart(product_cart, empty_cart) });

decrease.addEventListener("click", () => {
  var value = (increase_decrease.innerHTML * 1);
  value === 1 ? increase_decrease.innerHTML = 1 : increase_decrease.innerHTML = value - 1;
})

increase.addEventListener('click', () => { increase_decrease.innerHTML = (increase_decrease.innerHTML * 1) + 1 })

const change_imges = (add, v) => {
  const ele1 = v === 0 ? img : lightbox_img;
  const ele2 = v === 0 ? imgsspan : lightbox_spans;
  const ele3 = v === 0 ? imgs : lightbox_imgs;
  ele1.src = img_array[add];
  v === 0 ? ele2[activeimgspan].classList.remove('activespan') : ele2[lightboxactiveimgspan].classList.remove('lightbox_activespan');
  v === 0 ? ele2[add].classList.add('activespan') : ele2[add].classList.add('lightbox_activespan');
  v === 0 ? ele3[activeimg].classList.remove('active') : ele3[lightboxactiveimg].classList.remove('lightbox_active');
  v === 0 ? ele3[add].classList.add('active') : ele3[add].classList.add('lightbox_active');
  v === 0 ? activeimgspan = add : lightboxactiveimgspan = add;
  v === 0 ? activeimg = add : lightboxactiveimg = add;
}

imgs[0].addEventListener("click", () => { change_imges(0, 0) });
imgs[1].addEventListener("click", () => { change_imges(1, 0) });
imgs[2].addEventListener("click", () => { change_imges(2, 0) });
imgs[3].addEventListener("click", () => { change_imges(3, 0) });

img.onclick = () => {
  lightbox.style.display = 'block';
  lightbox_data.style.display = 'flex';
}

lightbox_close.onclick = () => {
  lightbox.style.display = "none";
  lightbox_data.style.display = "none";
}

lightbox_imgs[0].addEventListener("click", () => { change_imges(0, 1) })
lightbox_imgs[1].addEventListener("click", () => { change_imges(1, 1) })
lightbox_imgs[2].addEventListener("click", () => { change_imges(2, 1) })
lightbox_imgs[3].addEventListener("click", () => { change_imges(3, 1) })

const change_img_pre_next = (opp, v) => {
  if (opp === '+') {
    img_no === 3 ? img_no = 0 : img_no += 1;
  } else {
    img_no === 0 ? img_no = 3 : img_no -= 1;
  }
  change_imges(img_no, v)
}

lightbox_previous.addEventListener('click', () => { change_img_pre_next('-', 1) })
lightbox_next.addEventListener('click', () => { change_img_pre_next('+', 1) })

hamburgur.onclick = () => {
  if (hamburgur_on_off === 0) {
    hamburgur_back.style.display = 'block';
    hamburgur_menu.style.display = 'block';
    hamburgur.src = "./images/icon-close.svg";
    hamburgur_on_off = 1;
  } else {
    hamburgur_back.style.display = 'none';
    hamburgur_menu.style.display = 'none';
    hamburgur.src = "./images/icon-menu.svg";
    hamburgur_on_off = 0;
  }
}

previous.addEventListener('click', () => { change_img_pre_next('-', 0) })
next.addEventListener('click', () => { change_img_pre_next('+', 0) })
