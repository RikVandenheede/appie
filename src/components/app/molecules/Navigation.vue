<template>
  <nav class="navigation">
    <div :class="{ active: isActive == 1 }">
      <svg
        @click="isActive = 1"
        xmlns="http://www.w3.org/2000/svg"
        width="19.862"
        height="20.092"
        viewBox="0 0 19.862 20.092"
      >
        <g
          id="Icon_ionic-ios-qr-scanner"
          data-name="Icon ionic-ios-qr-scanner"
          transform="translate(0 0)"
        >
          <path
            id="Path_5"
            data-name="Path 5"
            d="M10.438,4.5h-3.3A3.768,3.768,0,0,0,3.375,8.267v3.3a.785.785,0,1,0,1.57,0V8.211A2.282,2.282,0,0,1,7.086,6.07h3.352a.785.785,0,1,0,0-1.57Z"
            transform="translate(-3.375 -4.5)"
            fill="#23a811"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M26.918,4.5H23.566a.785.785,0,1,0,0,1.57h3.352a2.282,2.282,0,0,1,2.141,2.141v3.352a.785.785,0,0,0,1.57,0V8.211A3.715,3.715,0,0,0,26.918,4.5Z"
            transform="translate(-10.767 -4.5)"
            fill="#23a811"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M10.438,27.934H7.086a2.282,2.282,0,0,1-2.141-2.141V22.441a.785.785,0,0,0-1.57,0v3.352A3.715,3.715,0,0,0,7.086,29.5h3.352a.785.785,0,0,0,0-1.57Z"
            transform="translate(-3.375 -9.412)"
            fill="#23a811"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M29.844,21.656a.787.787,0,0,0-.785.785v3.352a2.282,2.282,0,0,1-2.141,2.141H23.566a.785.785,0,0,0,0,1.57h3.3a3.771,3.771,0,0,0,3.767-3.767v-3.3A.787.787,0,0,0,29.844,21.656Z"
            transform="translate(-10.767 -9.412)"
            fill="#23a811"
          />
        </g>
      </svg>
    </div>
    <div :class="{ active: isActive == 2 }">
      <svg
        @click="isActive = 2"
        xmlns="http://www.w3.org/2000/svg"
        width="22.597"
        height="19.207"
        viewBox="0 0 22.597 19.207"
      >
        <path
          id="Icon_material-home"
          data-name="Icon material-home"
          d="M12.039,23.707V16.928h4.519v6.779h5.649V14.669H25.6L14.3,4.5,3,14.669H6.39v9.039Z"
          transform="translate(-3 -4.5)"
          fill="#28a745"
        />
      </svg>
    </div>
    <div :class="{ active: isActive == 3 }">
      <svg
        @click="isActive = 3"
        xmlns="http://www.w3.org/2000/svg"
        width="23.05"
        height="22.093"
        viewBox="0 0 23.05 22.093"
      >
        <g
          id="Icon_feather-shopping-cart"
          data-name="Icon feather-shopping-cart"
          transform="translate(1 1)"
        >
          <path
            id="Path_2"
            data-name="Path 2"
            d="M13.914,30.957A.957.957,0,1,1,12.957,30,.957.957,0,0,1,13.914,30.957Z"
            transform="translate(-5.302 -11.821)"
            fill="none"
            stroke="#23a811"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_3"
            data-name="Path 3"
            d="M30.414,30.957A.957.957,0,1,1,29.457,30,.957.957,0,0,1,30.414,30.957Z"
            transform="translate(-11.277 -11.821)"
            fill="none"
            stroke="#23a811"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M1.5,1.5H5.327L7.891,14.311a1.914,1.914,0,0,0,1.914,1.54h9.3a1.914,1.914,0,0,0,1.914-1.54L22.55,6.284H6.284"
            transform="translate(-1.5 -1.5)"
            fill="none"
            stroke="#23a811"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation",
  props: {},
  data() {
    return {
      isActive: false,
    };
  },
});
</script>
