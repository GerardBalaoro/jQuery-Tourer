---
title: Template
section: Usage
---

The tour-wrapper class serves as the over all container for all out the tour elements. 

```html
<!-- Main Tour Element -->
<ul class="tour-wrapper">
    <!-- Tour Step -->
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
<!-- Overlay -->
<div class="tour-overlay"></div>
```

{% include components/callout.html title=".tour-overlay" content="This acts as a barrier to prevent interaction to the actual webpage elements during mobile mode or when an unbound element is shown." %}

#### Steps

Each `li.tour-step` element corresponds to the each modal step.

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