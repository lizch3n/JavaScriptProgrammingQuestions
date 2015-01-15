var deck = [
{1:'club'},
{2:'club'},
{3:'club'},
{4:'club'},
{5:'club'},
{6:'club'},
{10:'club'},
{10:'club'},
{9:'club'},
{10:'club'},
{'jack':'club'},
{'queen':'club'},
{'king':'club'},
{1:'spade'},
{2:'spade'},
{3:'spade'},
{4:'spade'},
{5:'spade'},
{6:'spade'},
{7:'spade'},
{8:'spade'},
{9:'spade'},
{10:'spade'},
{'jack':'spade'},
{'queen':'spade'},
{'king':'spade'},
{1:'heart'},
{2:'heart'},
{3:'heart'},
{4:'heart'},
{5:'heart'},
{6:'heart'},
{7:'heart'},
{8:'heart'},
{9:'heart'},
{10:'heart'},
{'jack':'heart'},
{'queen':'heart'},
{'king':'heart'},
{1:'diamond'},
{2:'diamond'},
{3:'diamond'},
{4:'diamond'},
{5:'diamond'},
{6:'diamond'},
{7:'diamond'},
{8:'diamond'},
{9:'diamond'},
{10:'diamond'},
{'jack':'diamond'},
{'queen':'diamond'},
{9:'diamond'}
]

var fullnum = 52; // number of cards in a deck
var suits = ['diamond', 'heart', 'spade', 'club']; // all the suits
var numbers = [1,2,3,4,5,6,7,8,9,10,'jack','queen','king']; // all the card values

function isDeck(d){
		var diamond = 0;
		var spade = 0;
		var heart = 0;
		var club = 0;

		var diamondarr = [];
		var spadearr = [];
		var heartarr = [];
		var clubarr = [];
		
		var diamondVal = [];
		var spadeVal = [];
		var heartVal = [];
		var clubVal = [];


	if(d.length == fullnum){
		console.log('deck has 52');
		
		
		for (j = 0; j < suits.length; j++ ) {
			
			var suitContainer = [];
			suitContainer.push([]);
			for (key in d) {
				var newD = d[key];
				for (key2 in newD) {
					// console.log(newD[key2]);
					if (newD[key2] == 'diamond') {
						diamond++;
						diamondarr.push(newD);
					}
					if (newD[key2] == 'heart') {
						heart++;
						heartarr.push(newD);
					}
					if (newD[key2] == 'club') {
						club++;
						clubarr.push(newD);
					}
					if (newD[key2] == 'spade') {
						spade++;
						spadearr.push(newD);
					}
				}
			}

		}

		if ((diamond/suits.length)%numbers.length != 0) {
			console.log('incorrect diamonds, not a full deck');
		}else {
			// console.log('13 diamonds');
			var sortDiam = diamondarr.splice(0,13);
			for (key in sortDiam) {
				for(key2 in sortDiam[key]) {
					var matcher = new RegExp(key2, 'g')
					diamondVal.push(key2);
					if (diamondVal.toString().match(matcher).length != 1) {
						console.log(key2+ ' of ' + sortDiam[key][key2] +'s is not unique, not a full deck');
					}
				}
			}
		}
		if ((club/suits.length)%numbers.length != 0) {
			console.log('incorrect clubs, not a full deck');
		}else {
			// console.log('13 clubs');
			var sortClub = clubarr.splice(0,13);
			for (key in sortClub) {
				for(key2 in sortClub[key]) {
					var matcher = new RegExp(key2, 'g')
					clubVal.push(key2);
					if (clubVal.toString().match(matcher).length != 1) {
						console.log(key2+ ' of ' + sortClub[key][key2] +'s is not unique, not a full deck');
					}
				}
			}
		}
		if ((spade/suits.length)%numbers.length != 0) {
			console.log('incorrect spades, not a full deck');
		}else {
			// console.log('13 spades');
			var sortSpade = spadearr.splice(0,13);
			for (key in sortSpade) {
				for(key2 in sortSpade[key]) {
					var matcher = new RegExp(key2, 'g')
					spadeVal.push(key2);
					if (spadeVal.toString().match(matcher).length != 1) {
						console.log(key2+ 'of' + sortSpade[key][key2] +'s is not unique, not a full deck');
					}
				}
			}
		}
		if ((heart/suits.length)%numbers.length != 0) {
			console.log('incorrect hearts, not a full deck');
		}else {
			// console.log('13 hearts');
			var sortHeart = heartarr.splice(0,13);
			for (key in sortHeart) {
				for(key2 in sortHeart[key]) {
					var matcher = new RegExp(key2, 'g')
					heartVal.push(key2);
					if (heartVal.toString().match(matcher).length != 1) {
						console.log(key2+ ' of ' + sortHeart[key][key2] + 's is not unique, not a full deck');
					}
				}
			}
		}


	}
	else {
		console.log('this is not a full deck');
	}
}
isDeck(deck);