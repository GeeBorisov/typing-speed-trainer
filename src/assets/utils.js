export const getRandomText = (textArray) => {
  return textArray[Math.floor(Math.random() * textArray.length)];
};

export const countErrors = (originalText, userInput) => {
  let errors = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== originalText[i]) {
      errors++;
    }
  }
  return errors;
};

export const getWordCount = (text) => {
  return text.trim().split(' ').length;
};

export const splitTextIntoChars = (text) => {
  return text.split('');
};


export const TEXT_ARRAY = [
  'в детстве я зачитывался книжками про индейцев и страстно мечтал жить где-нибудь в прериях, охотиться на бизонов, ночевать в шалаше... Летом, когда я окончил девятый класс, моя мечта неожиданно сбылась: дядя предложил мне охранять пасеку на берегу тощей, но рыбной речушки Сисявы.',
  'в качестве помощника он навязал своего десятилетнего сына Мишку, парня степенного, хозяйственного, но прожорливого, как галчонок. Два дня пролетели в один миг: мы ловили щук, обходили дозором наши владения, вооружившись луком и стрелами, без устали купались; в густой траве, где мы собирали ягоды, таились гадюки, и это придавало нашему собирательству остроту опасного приключения.',
  'вечерами в огромном котле я варил уху из пойманных щук, а Мишка, пыхтя от натуги, выхлебывал её огромной, как ковш экскаватора, ложкой. Но, как выяснилось, одно дело — читать про охотничью жизнь в книгах, и совсем другое — жить ею в реальности. Скука мало-помалу начинала томить меня, вначале она ныла несильно, как недолеченный зуб, потом боль стала нарастать и всё яростнее терзать мою душу.',
];
