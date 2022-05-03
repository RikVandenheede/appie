<template>
	<div id="spin"></div>
	<div id="spinner-template" style="display: block">
		<div class="spinner-container">
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				x="0px"
				y="0px"
				viewBox="0, 0, 100, 100"
			>
				<g>
					<g class="spinner">
						<circle
							class="path"
							fill="none"
							stroke="#7DB0D5"
							stroke-width="7"
							stroke-miterlimit="10"
							stroke-linecap="round"
							cx="50"
							cy="50"
							r="44"
						/>
					</g>
					<polyline
						class="check"
						fill="none"
						stroke="#7DB0D5"
						stroke-width="8"
						stroke-linecap="round"
						stroke-miterlimit="10"
						stroke-linejoin="round"
						points="70,35 45,65 30,52"
					/>
					<path
						class="cross"
						fill="none"
						stroke="#7DB0D5"
						stroke-width="16"
						stroke-linecap="round"
						stroke-miterlimit="10"
						d="M70,30 l-40,40 M70,70 l-40,-40"
					/>
				</g>
			</svg>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Check',
	props: {},

})
</script>

<style>
svg {
	width: 145px;
	height: auto;
}
.spinner-explainer {
	margin: 30px auto;
	width: 600px;
	font-family: Arial, sans-serif;
}

.spinner-container {
	margin: 0 auto;
}

.path {
	stroke-dasharray: 275;
	stroke-dashoffset: 0;
	animation: load 1.75s ease-in-out infinite;
	transform-origin: 50% 50%;
	/* There is a percentage bug in Firefox that requires a special over-definition using the vendor prefix, see https://bugzilla.mozilla.org/show_bug.cgi?id=923193 */
	/* It may seem counter-intuitive (because it is :P), but the fixed offset for transform-origin in Firefox *does* in fact scale with the svg element. */
	/* NOTE: Anything that you want to perform a transform on MUST be inside of an svg <g> tag, since this seems to reset things for Firefox and allow the pixel origin offset to work its magic. */
}

.spinner {
	animation: spin 1.75s linear infinite;

	transform-origin: 50% 50%;
}

.spinner-complete,
.path-complete {
	/*-webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;*/
}

.path-complete {
	stroke-dasharray: 800;
	stroke-dashoffset: 0;

	transition: all 2.75s ease-out;
	/*-webkit-animation-fill-mode: backwards;
    -moz-animation-fill-mode: backwards;
    -o-animation-fill-mode: backwards;
    animation-fill-mode: backwards;*/
}

.check,
.cross {
	stroke-dasharray: 110;
	stroke-dashoffset: 110;
	stroke-width: 0;
}

.check-complete,
.cross-complete {
	animation: check 1s ease-in forwards;
	stroke-width: 15;
	stroke-dashoffset: 0;
}

/*#region keyframes load*/
@-webkit-keyframes load {
	0% {
		stroke-dashoffset: 273;
	}
	50% {
		stroke-dashoffset: 68.25;

		transform: rotate(135deg);
	}
	100% {
		stroke-dashoffset: 273;
		transform: rotate(450deg);
	}
}
@-moz-keyframes load {
	0% {
		stroke-dashoffset: 273;
	}
	50% {
		stroke-dashoffset: 68.25;
		transform: rotate(135deg);
	}
	100% {
		stroke-dashoffset: 273;
		transform: rotate(450deg);
	}
}
@keyframes load {
	0% {
		stroke-dashoffset: 273;
	}
	50% {
		stroke-dashoffset: 68.25;

		transform: rotate(135deg);
	}
	100% {
		stroke-dashoffset: 273;

		transform: rotate(450deg);
	}
}
/*#endregion*/

/*#region keyframes check*/
@-webkit-keyframes check {
	0% {
		stroke-dashoffset: -110;
	}
	100% {
		stroke-dashoffset: 0;
	}
}
@-moz-keyframes check {
	0% {
		stroke-dashoffset: -110;
	}
	100% {
		stroke-dashoffset: 0;
	}
}
@keyframes check {
	0% {
		stroke-dashoffset: -110;
	}
	100% {
		stroke-dashoffset: 0;
	}
}
/*#endregion*/

/*#region keyframes spin */

@-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(270deg);
	}
}

@-moz-keyframes spin {
	0% {
		-moz-transform: rotate(0deg);
	}

	100% {
		-moz-transform: rotate(270deg);
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(270deg);
	}
}

/*#endregion */

.success,
.danger {
	stroke: #009900;

	transition: stroke 0.6s;
}
.danger {
	stroke: #b00;
}

.modal-loading-overlay {
	padding: 12px;
	background-color: rgba(255, 255, 255, 0.9);
	position: absolute;
	width: 100%;
	height: 100%;
	display: none;
	top: 0;
	left: 0;
	z-index: 10;
}
</style>
