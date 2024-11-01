// Components
// Toggle
// changes the appopriate aria attibutes for toggle effect


import $ from 'jquery'

const $toggle = $('[data-toggle]')
$toggle.swap({ collapse: false })

//--
// Formstone Swap activate and deactivate event listeners

// Activate
$toggle.on('activate.swap', function () {
  $(this).attr('aria-selected', true)
  $($(this).data('swap-target')).attr('aria-hidden', false)
})

// Deactivate
$toggle.on('deactivate.swap', function () {
  $(this).attr('aria-selected', false)
  $($(this).data('swap-target')).attr('aria-hidden', true)
  $('body').removeClass('of-hidden') // req for active modals
})

// --
// Formstone Swap deactivate events

// Close button click
$('[toggle-dismiss]').click(function() {
  $toggle.swap("deactivate")
})

// Escape key listener
$(document).on('keyup', (e) => {
  if (e.keyCode === 27) {
    $toggle.swap("deactivate")
  }
})

// --
// modal-specific rules

// prevent scroll on body
// add autofocus if modal is search
$('[data-toggle="modal"]').on('click touch', function() {
  $('body').addClass('of-hidden')
  $('.has-autofocus').focus()
})
