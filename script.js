  // dont foget to add .png at end bro u went through like 20 minute sfiguring it out
const imageUrls = [
    'rngimagegenerator/1/a.png',
    'rngimagegenerator/1/asahiouka.png',
    'rngimagegenerator/1/mahiroanime.png',
    'rngimagegenerator/1/g.png',
    'rngimagegenerator/1/h.png',
    'rngimagegenerator/1/KaedeAnime2.png',
    'rngimagegenerator/1/MiyoAnime2.png',
    'rngimagegenerator/1/MihariAnime2.png',
    'rngimagegenerator/1/c.png',
    'rngimagegenerator/1/d.png',
    'rngimagegenerator/1/e.png',
    'rngimagegenerator/1/Main.png',
    'rngimagegenerator/1/Mahiro2.png',
    'rngimagegenerator/1/zoro2.png',
    'rngimagegenerator/1/clown.png',
    'rngimagegenerator/1/usopp1.png',
    'rngimagegenerator/1/choppertony.png',
    'rngimagegenerator/1/zoro.png',
    'rngimagegenerator/1/franky.png',
    'rngimagegenerator/1/usopp_anime_6.png',
    'rngimagegenerator/1/brook.png',
    'rngimagegenerator/1/smoker.png',
    'rngimagegenerator/1/ussoop.png',
    'rngimagegenerator/1/robin.png',
    'rngimagegenerator/1/nami5.png',
    'rngimagegenerator/1/fatgirl.png',
    'rngimagegenerator/1/sanji.png',
    'rngimagegenerator/1/luffy.png',
    'rngimagegenerator/1/cirno.png',
    'rngimagegenerator/1/marisa.png',
    'rngimagegenerator/1/touhou-fumo.gif',
    'rngimagegenerator/1/mlala.png',
    'rngimagegenerator/1/fumo.png',
    'rngimagegenerator/1/whack.png',
    'rngimagegenerator/1/Lovely-Anime-TouHou-Project-Fumo-Inu-Sakuya-Cosplay-Cute-Doll-Plush-Stuffed-Throw-Pillow-Sitting-Boy.png',
    'rngimagegenerator/1/neurosama.png',
    'rngimagegenerator/1/neuro.png',
    'rngimagegenerator/1/filianplushie.png',
    'rngimagegenerator/1/filianmiddlefinger.png',
    'rngimagegenerator/1/filian.png',
    'rngimagegenerator/1/fill.png',
    'rngimagegenerator/1/filianwhat.gif',
    'rngimagegenerator/1/Nami.png',
    'rngimagegenerator/1/nami3.png',
    'rngimagegenerator/1/nami4.png',
    'rngimagegenerator/1/nami2.png',
    'rngimagegenerator/1/nami1.png',
    'rngimagegenerator/1/one_piece___nami___sp___24__breaking_mirrors_2__by_thunder1928_dcnjx7u-fullview.png',
    'rngimagegenerator/1/kid-nami.png',
    'rngimagegenerator/1/op_luffy_5.png',
    'rngimagegenerator/1/tonychopper2.png',
    'rngimagegenerator/1/Nami_Waifuuu.png',
    'rngimagegenerator/1/tonychopper1.png',
    'rngimagegenerator/1/onepiecea.png',
    'rngimagegenerator/1/NamiPostTimeskip__28Original_29.png',
    'rngimagegenerator/1/chicken1.png',
    'rngimagegenerator/1/chicken2.png',
    'rngimagegenerator/1/chicken3.png',
    'rngimagegenerator/1/chicken4.png',
    'rngimagegenerator/1/chicken5.png',
    'rngimagegenerator/1/chicken6.png',
    'rngimagegenerator/1/chicken7.png',
    'rngimagegenerator/1/chicken8.png',
    'rngimagegenerator/1/chicken9.png',
    'rngimagegenerator/1/chicken10.png',
    'rngimagegenerator/1/chicken11.png',
    'rngimagegenerator/1/chicken12.png',
    'rngimagegenerator/1/copfilian.png',

    'rngimagegenerator/1/lucsuggested1.jpg',
    'rngimagegenerator/1/lucsuggested2.jpg',
    'rngimagegenerator/1/lucsuggested3.jpg',
    'rngimagegenerator/1/lucsuggested4.jpg',
    'rngimagegenerator/1/lucsuggested5.png',
    'rngimagegenerator/1/lucsuggested6.png',
    'rngimagegenerator/1/lucsuggested7.png',












//    'rngimagegenerator/2/a.png',
  ];

  // dont foget to add .png at end bro
  
  // get a random index to select a random image from the array
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  
  // get the img element by its id
  const imgElement = document.getElementById('randomImg');
  
  // set the src attribute of the img element to the randomly selected image URL
  imgElement.src = imageUrls[randomIndex];
  






  
  document.addEventListener("DOMContentLoaded", function() {
    // Triggering the animation on page load
    var iconElement = document.querySelector('.icon');
    if (iconElement) {
      iconElement.style.animation = 'flip-card 3s ease-in-out infinite';
      iconElement.style.animationPlayState = 'running';
    }
  });



