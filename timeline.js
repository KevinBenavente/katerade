document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.timeline');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalVideo = document.getElementById('modalVideo');
  const modalCaption = document.getElementById('modalCaption');
  const closeModal = document.getElementById('close');

  const timelineData = [
    {
      date: 'Nov 21, 2023',
      image: 'images/firstmsg.PNG',
      caption: `this is the first time i messaged you! i know i've shown it to you before but it's so crazy to look back and see that this is where it all started :o`,
      type: 'image',
    },
    {
      date: 'Dec 4, 2023',
      image: 'images/inperson.PNG',
      caption: `i don't think that this is actually the first time we met in person but this is super super early on in our friendship so i thought it was worth including!`,
      type: 'image',
    },
    {
      date: 'Dec 17, 2023',
      image: 'images/firstday.jpg',
      caption: `AHHHH i took this right when i got back into my car after my first day at church! what an amazing experience, im so so glad that i went and got to experience God's Word for the very first time!! look at me now :') (ALSO I'VE BEEN AT COJ 8 MONTHS NOW, ALMOST A YEAR!!)`,
      type: 'image',
    },
    {
      date: 'Dec 20, 2023',
      image:
        'https://www.youtube.com/embed/GUBdmYKa-i4?si=MwthA6qoxMtU9PJp?autoplay=1',
      caption: `LOOK AT YOUR SICK MOVES!! the date is my first rg meeting but this vid is from our second rg meeting i believe when we were practicing for praise comp. i still can't dance to save my life but getting to interact with all of our rg members for the first time was so amazing!! i would've never thought that yall would become the family to me that you are! :')`,
      type: 'iframe',
    },
    {
      date: 'Dec 31, 2023',
      image:
        'https://www.youtube.com/embed/IGBE3Da2SwI?si=4i8gwFKT9EqmAp0L?autoplay=1',
      caption: `RAHHH RG PRAISE COMP!!! we should've won smhsmh, BUT WE'LL WIN THIS YEAR. anyways this was such a scary experience for me but i am so grateful that i was able to participate in this with everyone. i still go back and watch this from time to time and it makes me so happy :)`,
      type: 'iframe',
    },
    {
      date: 'Jan 5, 2024',
      image: 'images/firstbible.jpg',
      caption: `MY FIRST BIBLE WOAHHHH. i remember this is when we were first starting our full read through for january and i was so excited to read for the first time. i struggled a lot with understanding the text since it was my first time but i'm so glad that i was able to push through and finish it!! that first read just gave me the starting point even more motivation to keep going and keep learning more about God's Word :') thank you so much for all of your ecouragement and support throughout this time as well!!`,
      type: 'image',
    },
    {
      date: 'Mar 31, 2024',
      image: 'images/baptized.PNG',
      caption: `LOOK AT THISSS SUCH A PIVOTAL MOMENT IN MY FAITH LIFE. MY NEW BIRTHDAY MARCH 31, 2024!! im so grateful that i was able to take this step in my faith life and i couldn't have done it without all of the support from you, Grace, James, Min, MJ and the rest of our rg. this day was so special to me and i'm so glad that i was able to share it with you all :')`,
      type: 'image',
    },
    {
      date: 'Jun 14, 2024',
      image: 'images/bday.JPG',
      caption: `WOOO YOUR BIRTHDAY!! first birthday that i celebrated with you!!! we don't have too many pictures of us together so heres the one w me you and daniel.. LOLOL! heres to so many more birthdays we will celebrate together!!!`,
      type: 'image',
    },
    {
      date: 'Jul 8, 2024',
      image: 'images/HS.PNG',
      caption: `OMLL this day was nuts. THE WHOLE RETREAT WAS SO AMAZING. IVE NEVER CRIED SO MUCH IN MY WHOLE LIFE!!! and then when Grace, Min, and Victoria suprised me and then you and everyone prayed over me was the most surreal experience ever. i really can't put into words that overwhelming feeling of His presence. BUT IT WAS SO AMAZING, I WILL NEVER FORGET THIS DAY`,
      type: 'image',
    },
  ];

  function updateTimeline() {
    timeline.innerHTML = '';
    timelineData.forEach((data) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.textContent = data.date;
      item.addEventListener('click', () => {
        modalCaption.textContent = data.caption;
        if (data.type === 'image') {
          modalImage.src = data.image;
          modalImage.style.display = 'block';
          modalVideo.style.display = 'none';
          modalIframe.style.display = 'none';
        } else if (data.type === 'video') {
          modalVideo.src = data.image;
          modalVideo.style.display = 'block';
          modalImage.style.display = 'none';
          modalIframe.style.display = 'none';
        } else if (data.type === 'iframe') {
          modalIframe.src = data.image;
          modalIframe.style.display = 'block';
          modalImage.style.display = 'none';
          modalVideo.style.display = 'none';
        }
        modal.style.display = 'block';
      });
      timeline.appendChild(item);
    });
  }

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  updateTimeline();
});
