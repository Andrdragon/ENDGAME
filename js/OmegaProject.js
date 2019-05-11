var data = {
	defaultLanguage: 'ru',
	dictionary:{
		en: {
			name: "Your name",
			namePlaceholder: "Input your name",
			gender: "Choose your gender",
			genderMale: "Male",
			genderFemale: "Female",
			country__wrapper: "Choose country where you live",
			countries: {
				ua: "Ukraine",
				fr: "France",
				us: "USA",
				br: "Brasil"
			},
			isShowBornCountry: "The country where you live and the country where you were born are the same?",
			bornCountryWrapper: "Choose country where you born",
			email:	"Your email",
			emailPlaceholder: "Input your email",
			buttonText: "Send"
		},
		ua: {
			name: "Введите ваше имя",
			namePlaceholder: "Введите ваше имя",
			gender: "Ваш пол",
			genderMale: "M",
			genderFemale: "Ж",
			country__wrapper: "Место рождения",
			countries: {
				ua: "Украна",
				fr: "Франція",
				us: "Америка",
				br: "Бразилія"
			},
			isShowBornContry: "Страна где вы родились и страна где вы живете равны?",
			bornCountryWrapper: "Виберыть краъну у якый ви народились",
			email: "Введите ваш email",
			emailPlaceholder:"Введите ваш email",
			buttontext: "Отправить"
		}
	}
}
$(".language-image").click(function(event) {
	var currentLanguage = $(this).attr('data-lang')
	$(".language-image").removeClass('active')
	$(this).addClass('active');
	setFormValue();

});

function setFormValue(){
	var dict = data.dictionary[currentLanguage]
	$("#name .description").text(dict.name);
	$("#name input").attr('placeholder', dict.namePlaceholder);

	$("#email .description").text(dict.email);
	$("#email input").attr('placeholder', dict.emailPlaceholder);

	$("#gender .description").text(dict.gender);
	$("#male").text(dict.genderMale);
	$("#female").text(dict.genderFemale);

	$("#country__wrapper .description").text(dict.country__wrapper);
	$("#country option").each(function(index, el) {
	var currentVal = $("#country option").eq(index).val()
	$("#country option").eq(index).text(dict.countries[currentVal])	
	});
	
	
}

var currentLanguage = data.defaultLanguage;
setFormValue();
