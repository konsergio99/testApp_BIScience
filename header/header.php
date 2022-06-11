<style>
    <?php include 'header/header-desktop.css'; ?>
    <?php include 'header/header-mobile.css'; ?>
</style>

<div class="header-display-block">

    <div class="nav-block">

        <div class="nav-section">
            <img class="logo-img" src="/assets/images/logo/header-logo.png" alt="figmaLand">
        </div>

        <div class="nav-section text-size-15-white">
            <img class="mobile-menu-img" src="/assets/images/icons/menu-icon.png" alt="Slate menu">
            <ul>
                <li><a>Home</a></li>
                <li><a>Product</a></li>
                <li><a>Pricing</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>

            <form name="headerEmail" action="#">
                <input
                   class="nav-input"
                   type="text"
                   name="headerEmailValidator"
                   placeholder="Your Email">
            </form>

            <button
                class="subscribe-button"
                onclick="headerValidateEmail(document.headerEmail.headerEmailValidator.value)">
                Subscribe
            </button>
        </div>
    </div>

    <div class="success-error-block-header" id="success-error-block-header">
        <div id="success-error-text-header"></div>
    </div>

    <img class="first-background-image" src="../assets/images/background/background-image-1.png" alt="background">
    <img class="second-background-img" src="../assets/images/background/background-image-2.png" alt="background">

    <div class="header-content-block">
        <img class="browser-image-desktop" src="/assets/images/browser/browser-desktop.png" alt="UI Slate">
        <div class="header-content">
            <h1 class="text-size-55-white">We focus on ergonomics</h1>
            <h1 class="header-text-phone">Lightning fast prototyping </h1>
            <div class="content">
                <h2 class="text-size-16-white">Most calendars are designed for teams. Slate is designed for freelancers</h2>
            </div>
            <img class="browser-image-phone" src="/assets/images/browser/browser-phone.png" alt="UI Slate">
            <button class="try-for-free-button-header">Try for free</button>
        </div>
    </div>

</div>


