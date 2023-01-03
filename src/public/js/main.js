const postList = document.getElementById('list')
const btn = document.querySelector('.header__btn')

async function renderPosts() {
  let response = await (await fetch('/posts')).json()
  let data = await response.data
  for (let post of data) {
    if (post.active) {
      const item = document.createElement('li')
      item.innerHTML = `
      <img src="${post.post_img}" class="post__img" alt="baby" />
      <p class="post__title">${post.post_title}</p>
      <ul class="post__info">
        <li class="post__info-icon">
          <img src="./img/icons/user.svg" class="post__info-img" alt="" />
          <p class="post__info-user">${post.post_user}</p>
        </li>
        <li class="post__info-icon">
          <img src="./img/icons/date.svg" class="post__info-img" alt="" />
          <p class="post__info-user">${post.post_date}</p>
        </li>
        <li class="post__info-icon">
          <img src="./img/icons/active.svg" class="post__info-img" alt="" />
          <p class="post__info-user">${post.post_active}</p>
        </li>
        <li class="post__info-icon">
          <img src="./img/icons/job.svg" class="post__info-img" alt="" />
          <p class="post__info-user">${post.post_subcategory}</p>
        </li>
        <li class="post__info-icon">
          <img src="./img/icons/time.svg" class="post__info-img" alt="" />
          <p class="post__info-user">${post.post_time}</p>
        </li>
        <li class="post__info-icon">
          <img src="./img/icons/view.svg" class="post__info-img" alt="" />
          <p class="post__info-user">2550</p>
        </li>
      </ul>
    `
      item.classList.add('post__item')
      postList.append(item)
    }
  }
}

renderPosts()
