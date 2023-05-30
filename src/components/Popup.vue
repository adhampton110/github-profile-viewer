<script>
export default {
    name: "Popup",
    props: ['title','message'],
    methods: {
        dismiss() {
            console.log('dismiss called');
            this.$emit("dismiss");
        }
    }
}
</script>
<template>
    <div class="popup">
        <div class="popup-inner">
            <h2>{{title}}</h2>
            <p style="color:black;"> {{ message }} </p>
            <button v-on:click="dismiss">Okay</button>
        </div>
    </div>
</template>

<style scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	

	display: flex;
	align-items: center;
	justify-content: center;
}
.popup-inner {
		background: #FFF;
        border-radius: 8px;
		padding-left: 128px;
        padding-right: 128px;
        padding-top: 32px;
        padding-bottom:32px;
        color: black;
	}

.popup-inner h2, .popup-inner button {
    display:inline-flexbox;
}
</style>