new Vue ({
	el: "#myApp",
	data: {
		principal: 0,
		rate: 0,
		time: 0
	},
	methods: {
		SimpleInterest: function(){
			const interest = Math.round(this.principal * this.rate * this.time)/100;
			return interest;
		}
	}

});