<p align="center">
    <img src="https://imgur.com/WWpReBq.png" alt="jQuery-Tourer">
    <br>
    <a href="https://gerardbalaoro.github.io/jQuery-Tourer/"><img src="https://img.shields.io/badge/See%20It%20In%20Action-Click%20Here-purple.svg" alt="Demo"></a>
    <a href="https://github.com/GerardBalaoro/jQuery-Tourer/releases/latest"><img src="https://img.shields.io/github/release/GerardBalaoro/jQuery-Tourer.svg" alt="VERSION"></a>
    <a href="https://github.com/GerardBalaoro/jQuery-Tourer/blob/master/LICENSE.md"><img src="https://img.shields.io/github/license/GerardBalaoro/jQuery-Tourer.svg" alt="LICENSE"></a>
    <img src="https://zenodo.org/badge/doi/10.5281/zenodo.1473134.svg" alt="DOI">
</p>

### Getting Started

* Copy-paste the stylesheet <link> into your <head> to load our CSS.
 
```html 
<!-- Tourer CSS -->
<link rel="stylesheet" href="dist/jquery-tourer.css">
```

* Since this is a jQuery plugin, make sure that the library was included first before including our <script>.

```html
<!-- jQuery -->
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<!-- Tourer JS -->
<script type="text/javascript" src="dist/jquery-tourer.js"></script>
```

### Usage

* The tour-wrapper class serves as the over all container for all out the tour elements. It contains elements li.tour-step which are the "steps" of the tour.

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

> #### .tour-overlay
> This acts as a "barrier" to prevent interaction to the actual webpage elements during mobile mode or when an unbound element is shown.

### Tour Steps

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

> #### Target Element
> Then target attribute accepts any single element jQuery selector string.

### Initialization & Methods

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

### License

Copyright © 2018 Gerard Balaoro 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Credits

* **[CodyHouse/product-tour](https://codyhouse.co/gem/product-tour/)** - This project was forked from the orginal work of CodyHouse, which is published under the [BSD-3 Clause License](https://opensource.org/licenses/BSD-3-Clause).
* **PrettyDocs Template** - The template used in this project was created by [Xiaoying Riley](https://twitter.com/3rdwave_themes) under the [Creative Commons Attribution 3.0 License (CC BY 3.0)](https://creativecommons.org/licenses/by/3.0/). 
