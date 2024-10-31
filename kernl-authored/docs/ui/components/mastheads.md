# Mastheads

`kernl-ui/src/styles/04.components/masthead.scss`

<div class="full">
  <header class="masthead bg--black mb--2">
    <a class="__logo" href="https://assets.provost.northeastern.edu/kernl-ui">
      <img class="__logo__image" alt="Logo" src="https://assets.provost.northeastern.edu/kernl-ui/docs/images/logo-white.png">
    </a>
    <button class="__toggler hidden--up@d" id="toggle_1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
    <nav class="__drawer" id="drawer_1" role="navigation">
      <div class="w--100 d--flex justify--between hidden--up@d">
        <a class="__logo" href="https://assets.provost.northeastern.edu/kernl-ui">
          <img class="__logo__image" alt="Logo" src="https://assets.provost.northeastern.edu/kernl-ui/docs/images/logo-white.png">
        </a>
        <button class="__toggler menu-is-open"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      </div>
      <ul class="__list">
        <li class="__item --active">
          <a class="__link" href="https://assets.provost.northeastern.edu/kernl-ui">Lorem Ipsum</a>
        </li>
        <li class="__item +children">
          <a class="__link" href="https://assets.provost.northeastern.edu/kernl-ui">Dolor Sit Amet</a>
          <ul class="__submenu">
            <li class="__item"><a class="__link" href="https://assets.provost.northeastern.edu/kernl-ui">Quam Vulputate Nibh</a></li>
            <li class="__item"><a class="__link" href="https://assets.provost.northeastern.edu/kernl-ui">Tortor Fusce</a></li>
          </ul>
        </li>
        <li class="__item +icon">
          <a class="__link" href="#" data-toggle="modal" data-target="#modal_search" aria-label="Modal Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</div>

<UiDemo href="mastheads"/>
