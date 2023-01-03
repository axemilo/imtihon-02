submitSignup.onclick = async () => {
  let response = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify({ admin_name: signupName.value, admin_password: signupPassword.value }),
  })
  let { status, message, token } = await response.json()
  if (status == 201) {
    window.localStorage.setItem('token', token)
    window.location = '/'
  } else {
    errorSignup.textContent = message
  }
}

submitLogin.onclick = async () => {
  let response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ admin_name: loginName.value, admin_password: loginPassword.value }),
  })
  let { status, message, token } = await response.json()
  if (status == 200) {
    window.localStorage.setItem('token', token)
    window.location = '/'
  } else {
    errorLogin.textContent = message
  }
}
