
function randList(list){
	return list[Math.floor(Math.random()*list.length)];
}

function tellStory(){
	var result = randList(relationships)
	if (result == "%s got {0} to {1} {2}") {
		var promotedDemoted = "promoted";
		if (Math.random()>0.5) {
			promotedDemoted = "demoted";
		}
		result = result
				.replace("{0}",promotedDemoted)
				.replace("{1}",randList(leagues))
				.replace("{2}",Math.floor(
					Math.random()*5
				)+1);
	}
	result = result.replace("%s",randList(names));
	document.getElementById("story").innerHTML =
	"{0} I {1} {2} {3} as {4} to get {5},\
	 when suddenly {6} appeared and used {7}.<br>\
	 I didn't want to use my {8} so I used {9} and I {10}.<br>\
In the end we {11} because we {12} {13}.<br>\
But at least {14}."
		.replace("{0}",randList(openings))
		.replace("{1}",randList(activities))
		.replace("{2}",randList(monsters))
		.replace("{3}",randList(places))
		.replace("{4}",randList(champions))
		.replace("{5}",randList(buffs))
		.replace("{6}",randList(champions))
		.replace("{7}",randList(abilities))
		.replace("{8}",randList(items))
		.replace("{9}",randList(spells))
		.replace("{10}",randList(outcomes))
		.replace("{11}",randList(results))
		.replace("{12}",randList(activities))
		.replace("{13}",randList(monsters))
		.replace("{14}",result);
}