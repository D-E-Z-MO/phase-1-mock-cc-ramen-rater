
// create our menu items

const ramenMenu = document.getElementById("ramen-menu")

const fetchAllRamens = () => {
  fetch("http://localhost:3000/ramens/")
  .then(res => res.json())
  .then(ramens => {
    console.log(ramens)
    ramens.forEach(ramen => {
      createMenuImage(ramen)
    })
  })
}

const createMenuImage = ramen => {
  const img= document.createElement("img")
  img.src = ramen.image
  img.id = ramen.name
  img.alt = ramen .id
  img.addEventListener("click", handleUpdateDetail)
  ramenMenu.append(img)
}

// add event to menu image items
const ramenDetail = document.getElementById("ramen-detail")
const ramenName = ramenDetail.querySelector(".name")
const ramenDetailImage = ramenDetail.querySelector(".detail-img")
const ramenRestaurant = ramenDetail.querySelector(".restaurant")
const rating = document.getElementById("rating-display")
const comment = ramenDetail.querySelector('comment')


const updateDetail = (ramen) => {
  ramenName.textContent = ramen.name;
  ramenRestaurant.innerText = ramen.restaurant;
  ramenDetailImage.src = ramen.image;
  ramenDetailImage.alt = ramen.image;
  rating.innerText = ramen.rating;
  comment.innerText = ramen.comment;
};
const handleUpdateDetail = (event) => {
  fetchARamen(event.target.id)
}
const fetchARamen = (id) => {
  fetch("http://localhost.3000/ramens" + id)
  .then(res => res.json())
  .then((ramen) => {
  console.log(ramen);
  handleUpdateDetail(ramen);
  }).catch(e => {
    console.log(e)
  });
};

const form = document.getElementById("new-ramen")


const handleSubmit = event => {
  event.preventDefault()
  const ramenObj = {
    name:form[0].value,
    restaurant: form[1].value,
    image : form[2].value,
    rating: form[3].value,
    comment: form[4].value,
  }
  createMenuImage(ramenObj)
  form.reset()
}


const init = () => {
  fetchAllRamens();
  form.addEventListener("submit", handleSubmit)
};

init();