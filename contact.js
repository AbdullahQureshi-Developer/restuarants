// script.js

const Hamburger = document.querySelector('.Hamburger')
const nav = document.querySelector('.nav-links')

Hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-active')
})
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('validationForm').addEventListener('submit', function (event) {
      event.preventDefault()

      let isValid = true
       let errorMessages = '';
      const name = document.getElementById('name').value
      const nameError = document.getElementById('nameError')
      const namePattern =/^[A-Za-z\s]+$/ 
      if (name === '') {
        errorMessages += 'Name is required.\n'
        isValid = false
      } else if (!namePattern.test(name)) {
        errorMessages += 'Name must contain only alphabetic characters.\n'
        isValid = false
      } else {
        nameError.textContent = ''
       
      }

      const email = document.getElementById('email').value
      const emailError = document.getElementById('emailError')
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (email === '') {
           errorMessages += 'Email is required.\n';
        isValid = false
      } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format.'
        isValid = false
      } else {
        emailError.textContent = ''
      }



      const message = document.getElementById('message').value
      const messageError = document.getElementById('messageError')
      if (message === '') {
           errorMessages += 'Special Request is required.\n';
        isValid = false
      } else {
        messageError.textContent = ''
      }

      const subject = document.getElementById('subject').value
      const subjectError = document.getElementById('subjectError')
      if (subject === '') {
           errorMessages += 'subject is required.\n';
        isValid = false
      } else {
        subjectError.textContent = ''
      }
      
      const successMessage = document.getElementById('successMessage')
      if ( isValid) {
        successMessage.textContent =alert( 'Form submitted successfully!')
      } else {
        successMessage.textContent = alert('Please correct the errors!\n' + errorMessages)
      }
    })
})

function showMenu(menuType) {
  document.querySelectorAll('.menu').forEach((menu) => {
    menu.style.display = 'none'
  })

  document.querySelector(`.${menuType}-menu`).style.display = 'block'
}

document.addEventListener('DOMContentLoaded', () => {
  showMenu('breakfast')
})

document.addEventListener('scroll', function () {
  const scrollLink = document.getElementById('scrollLink')
  if (window.scrollY > 200) {
    scrollLink.classList.add('show')
  } else {
    scrollLink.classList.remove('show')
  }
})
document.addEventListener('scroll', function () {
  const scrollLink = document.getElementById('scrollLink')
  if (window.scrollY > 100) {
    scrollLink.classList.add('show')

  } else {
    scrollLink.classList.remove('show')

  }
})
// document.addEventListener('scroll', function () {
//   const scrollLinks = document.querySelector('.link')
//   if (window.scrollY > 50) {
//     scrollLinks.classList.add('show')

//   } else {
//     scrollLinks.classList.remove('show')

//   }
// })