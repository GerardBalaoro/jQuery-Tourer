---
title: Usage
order: 2
---

Add the `.tour-wrapper` template anywhere inside the `body` tag. The `.tour-overlay` prevents interaction when the tour is activated.

```html
<ul class="tour-wrapper">
    <li class="tour-step" target="#logo">
        <span>Step 1</span>
        <div class="tour-content bottom">
            <h2>Step Number 1</h2>
            <p>
                This is a normal step. In larger displays, this is shown as a tooltip
                and the image is hidden. On devices with smaller screens, this will
                be shown as a modal.
            </p>
            <img src="assets/images/step-1.png" alt="step 1">
        </div>
    </li>
</ul>
<div class="tour-overlay"></div>
```

#### Adding Steps

```html
<!-- Add 'unbound' class to always show modal instead of a tooltip -->
<!-- Use the target attribute to denote which element the step will be bound on -->
<li class="tour-step" target="#logo">
    <!-- Short Title (For Large Displays) -->
    <span>Step 1</span>

    <!-- Use classes [top, bottom, right, left] for Tooltip Placement -->
    <div class="tour-content bottom">
        <!-- Full Title (On Mobile Devices) -->
        <h2>Step Number 1</h2>
        <!-- Body -->
        <p>
            This is a normal step. In larger displays, this is shown as a tooltip
            and the image is hidden. On devices with smaller screens, this will
            be shown as a modal.
        </p>
        <!-- Image (Hidden on Large Displays) -->
        <img src="assets/images/step-1.png" alt="step 1">
    </div>
</li>
```

#### Initialization

```js
// Initializate Tour Wrapper
// This is done automatically on page load
$('.tour-wrapper').tour();

// This creates two event listeners
$('.tour-wrapper').trigger('start-tour'); // Starts Tour
$('.tour-wrapper').trigger('stop-tour'); // Ends Tour

// These event listeners are automatically
// bound to the following buttons, respectively

$('.start-tour').click() // Triggers 'star-tour'
$('.stop-tour').click() // Triggers 'stop-tour'
```