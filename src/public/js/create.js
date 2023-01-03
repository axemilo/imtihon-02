const renderSelect = async () => {
  let response = await fetch('/category')
  let data = await response.json()
  let data1 = data.data1
  let data2 = data.data2
  for (let data of data1) {
    let option = document.createElement('option')
    option.innerHTML = data.category_name
    categorySelect.append(option)
  }
  for (let data of data2) {
    let option = document.createElement('option')
    option.innerHTML = data.subcategory_name
    subcategorySelect.append(option)
  }
}

buttonPost.onclick = async (e) => {
  e.preventDefault()
  let formData = new FormData()

  formData.append('post_title', titleInput.value)
  formData.append('post_body', textInput.value)
  formData.append('post_user', nameInput.value)
  formData.append('post_date', dateInput.value)
  formData.append('post_time', timeInput.value)
  formData.append('post_category', categorySelect.value)
  formData.append('post_subcategory', subcategorySelect.value)
  formData.append('post_active', activeSelect.value)
  formData.append('post_desc', descInput.value)
  formData.append('phone', phoneInput.value)
  formData.append('post_img', uploadInput.files[0])

  let response = await fetch('/posts', {
    method: 'POST',
    body: formData,
  })
  console.log(formData)
  let { status, message, token } = await response.json()
  console.log(status)
  if (status == 201) {
    window.localStorage.setItem('token', token)
    window.location = '/'
  } else {
    console.log(message)
  }
}
renderSelect()
