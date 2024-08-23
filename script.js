const slides = [
  {
    text: 'HI KATERADE!!!',
    image: 'images/gaterade.JPG',
  },
  {
    text: `MAKE SURE YOURE ON A COMPUTER FOR THIS. IT WONT WORK ON YOUR PHONE!! LINK IS kevinbenavente.github.io/katerade`,
    image: null,
  },
  {
    text: `OKOK ARE YOU ON COMPUTER NOW?? GREAT, PROCEED!!!`,
    image: null,
  },
  {
    text: `i thought since i've already given you a card before, i'd make something for you this time instead :o`,
    image: 'https://media1.tenor.com/m/r0R0N3dI3kIAAAAd/dancing-cat-dance.gif',
  },
  {
    text: `before i start, i just wanna warn that my creativity is AWFUL so sorry in advance`,
    image: 'https://media1.tenor.com/m/UyXyHDmPBOcAAAAC/cat-stare-stare.gif',
  },
  {
    text: `AND AHH IK YOU'RE PROBABLY SO MUCH BETTER THAN ME AT ALL OF THIS WEBDEV STUFF SO PLS EXCUSE MY MEDIOCRE CODING SKILLS`,
    image: null,
  },
  {
    text: 'but hmmm where should i start...',
    image:
      'https://media1.tenor.com/m/lzr7_YQLlBoAAAAC/cat-process-cat-think.gif',
  },
  {
    text: `i am so so grateful to have you in my life kate. you're such a kind, caring, and funny person and i'm so lucky to have you as my friend. i give thanks to God every single day for allowing me to have somebody like you and everybody else in our RG especially Grace, James, Min, and MJ present in my life!`,
    image: null,
  },
  {
    text: `thank you so much for being my best friend! for being there always, for all of our laughs, our prayers, and the countless moments of encouragement as well. you have been a constant source of inspiration in my life and i am beyond grateful that God called me through you when He did!`,
    image: null,
  },
  {
    text: `you have been there through the ups and the downs, and you're always ready to give me advice, just listen when i go on and on, and always talk to me and lift my spirits when im in need! i feel that my faith life would not be anywhere near what it is today without the support of you and our rg and i am so grateful that you have been with me throughout this journey!`,
    image: null,
  },
  {
    text: `i'd also just like to apologize for all that i've put you through as well. i have not been a good friend and good fruit and i'm so sorry for all of the stress that i have caused w my stupid actions. i really listen to all of the advice you give me and i know that i will be better! i have changed so much since i met Yeshua and i met you and i know that i will continue to grow and one day become a true pillar of the Truth and pillar of the church!`,
    image: null,
  },
  {
    text: `all in all, i know that God has amazing plans for both of us, and i’m excited to see how He continues to use us to encourage and support each other on this journey. i’m truly blessed to have you as my sister in Christ, and i pray that our friendship continues to grow deeper and stronger in the years to come and that when that day comes, we will make it to the Father's house together!`,
    image: null,
  },
  {
    text: 'OKOKOK GIFT TIME, DRUMROLL PLS!!!',
    image: 'https://media1.tenor.com/m/4uG_lzNBctQAAAAC/drums-cat.gif',
  },
  {
    text: `so i know that you GUESSED SOMEHOW WHAT I GOT YOU, but its the sweater! im really worried if you will like it because i realized that when i asked which one that you liked, that it might've been the one that you liked for me and not for yourself. SO IM REALLY SORRY BUT I HOPE THAT ITS OKAY!!`,
    image: null,
  },
  {
    text: 'BUT WAIT, THERES MORE!!!',
    image: 'https://media1.tenor.com/m/80HwAa0Rz-0AAAAd/scared-cat.gif',
  },
  {
    text: `since i've been really enjoying the screen protector that you got me (THANK YOU SO MUCH BTW) and i know that you wanted one and that was the other gift i had in mind, I GOT ONE FOR YOU TOO!! i went and looked for the exact same brand and everything since the one you got me is so cool. so now people can't snoop on you either!!! LOLOL`,
    image: null,
  },
  {
    text: `i have been so wrong in showing my gratitude to you in the past, i hope that this gift will show a glimpse of how much i appreciate everything that you do for me. i don't want you to think that i'm only getting you a gift because you told me how you felt. you are there for me always and you deserve this and so much more than what im giving you here. even just making this and looking back at what i came from and how i met you, has brought me to the happiest tears. so truly thank you so much from the bottom of my heart for being you!!! :)`,
  },
  {
    text: `i know that you've been really busy recently and probably really stressed with dedication season and everything so i hope that this message can maybe give you a little boost even for just a second. i really hope that you'll accept my gift and enjoy what i've prepared, but HERES TO MANY MORE YEARS OF FRIENDSHIP AND MEMORIES TO COME, LOVE YOU KATERTOT !! :)`,
  },
];

let currentSlideIndex = 0;

function updateSlide() {
  const slide = slides[currentSlideIndex];
  document.getElementById('message').textContent = slide.text;

  const imageElement = document.getElementById('image');
  if (slide.image) {
    imageElement.src = slide.image;
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }

  if (currentSlideIndex === 0) {
    document.getElementById('backButton').style.display = 'none';
  } else {
    document.getElementById('backButton').style.display = 'inline-block';
  }

  if (currentSlideIndex === slides.length - 1) {
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('finalButton').style.display = 'inline-block';
  } else {
    document.getElementById('nextButton').style.display = 'inline-block';
    document.getElementById('finalButton').style.display = 'none';
  }
}

document.getElementById('nextButton').addEventListener('click', function () {
  currentSlideIndex++;
  updateSlide();
});

document.getElementById('backButton').addEventListener('click', function () {
  currentSlideIndex--;
  updateSlide();
});

updateSlide();
