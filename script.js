const page = document.querySelector(".page");

const mailboxButton =
  document.getElementById("mailboxButton");

const lettersArea =
  document.getElementById("lettersArea");

const envelopes =
  document.querySelectorAll(".envelope");

const letterModal =
  document.getElementById("letterModal");

const letterTitle =
  document.getElementById("letterTitle");

const letterBody =
  document.getElementById("letterBody");

const closeLetter =
  document.getElementById("closeLetter");

const modalBackdrop =
  document.getElementById("modalBackdrop");


let opened = false;

const letters = {

  reminder: {

    title: "A Reminder",

    body: `
      <p>Dear Tsuki,</p>

      <p>I don't really know how to say this without making it sound too serious lmao, but I just wanted to tell you that you're very special to me and that you mean a lot to me, just as a friend okay?</p>

      <p>I really want you to know how much you're valued by the people around you. You are so loved, more than you probably realize. &lt;3</p>

      <p>Keep thriving and keep shining.</p>

      <p>With love,<br>Pulo</p>
    `
  },


  memory: {

    title: "A Memory",

    body: `
      <p>Dear Tsuki,</p>

      <p>I still remember when I shamelessly texted you and demanded your covers hahah. I'm still a little embarrassed about it, but I'm happy I did because that random little message ended up becoming something really special to me hehe.</p>

      <p>Also, the way we just became <strong>“besttt friendsss”</strong> on our very first call will always be diabolical to me haha. But yeah, it was such a vibe talking with youu, and I will forever cherish our talks.</p>

      <p>With love,<br>Pulo</p>
    `
  },


  "never-said": {

    title: "Something I Never Said",

    body: `
      <p>Dear Tsuki,</p>

      <p>This is probably something I've never actually told you properly, but yes, initially I liked you so much and it honestly had nothing to do with looks or anything like that. I liked how you actually cared for me and looked out for me. I really admired how you corrected me sometimes, even though I would whine about it lol.</p>

      <p>For me, looks never really played a huge role when it came to someone's personality, so yeah, I fell for the little things you did and the way you always made me feel understood. But when I realized that we're better off as friends, I kinda backed off and accepted that maybe we just weren't meant to be that way. And honestly, that made me realize that some things are beautiful even when they don't turn out the way you once imagined them to.</p>

      <p>So yeah, dw, I don't like you in that way anymore haha. Just as good friends, I promise. I'm just really glad things turned out the way they did, because I wouldn't want to lose the friendship we have now.</p>

      <p>Anywayyy, that's something I've wanted to tell you for a while hehe. Now you know.</p>

      <p>With love,<br>Pulo</p>
    `
  },


  future: {

    title: "For the Future",

    body: `
      <p>Dear Tsuki,</p>

      <p>I really hope that wherever life takes you, you end up somewhere you're genuinely happy. I hope you get to do all the things you've wanted to do and become the person you've always wanted to be.</p>

      <p>I hope you meet good people along the way, make lots of fun memories, attend my wedding and get me a dog hehe.</p>

      <p>Keep making covers (just so you know, I'm your biggest supporter hehe), keep making people laugh and please sometimes use okayyy instead of ok.</p>

      <p>I don't know what your future is going to look like, but I really hope it's a good one. You deserve a life you're proud of.</p>

      <p>Anywayyy, that's enough wholesome stuff from me. Don't let it get to your head haha.</p>

      <p>With love,<br>Pulo</p>
    `
  },


  apology: {

    title: "An Apology",

    body: `
      <p>Dear Tsuki,</p>

      <p>Okay, this is probably the most random apology letter ever, but I still wanted to write it.</p>

      <p>I'm sorry for all the times I've kept you on call for HOURS just because I had way too much to say. You'd literally just sit there and listen to me yap about everything and somehow never tell me to shut up. You even fell asleep while I was talking once, which still makes me laugh whenever I think about it. I found it really cute though.</p>

      <p>You always used to say that I could never annoy you, but I am still scared that one day I might actually get on your nerves lmao.</p>

      <p>I'm also sorry for making you stay up late because of me, especially when you probably should've been sleeping instead of staying up and replying to all my random stuff.</p>

      <p>And yeah, I'm sorry for liking you too, even though I knew I probably shouldn't have. I never wanted things to get weird between us, so I hope you can forgive me for that.</p>

      <p>I guess this is just me saying sorry for all the little things I've probably done without realizing, and thank you for putting up with me anyway.</p>

      <p>You were always way too patient with me, and I really do appreciate that. So, sorry for everything and thank you for putting up with me all this time. I really mean it.</p>

      <p>With love,<br>Pulo</p>
    `
  }

};


mailboxButton.addEventListener("click", () => {

  if (opened) {
    return;
  }

  opened = true;

  page.classList.add("opened");

  mailboxButton.setAttribute(
    "aria-label",
    "Mailbox opened"
  );

});


envelopes.forEach((envelope) => {

  envelope.addEventListener("click", () => {

    const id =
      envelope.dataset.letter;

    const selectedLetter =
      letters[id];

    if (!selectedLetter) {
      return;
    }


    envelopes.forEach((item) => {

      if (item !== envelope) {
        item.classList.add("unavailable");
      }

    });

    envelope.classList.add("selected");


    letterTitle.textContent =
      selectedLetter.title;

    letterBody.innerHTML =
      selectedLetter.body;



    letterModal.classList.add("show");

    letterModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

  });

});

function closeModal() {

  letterModal.classList.remove("show");

  letterModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


closeLetter.addEventListener(
  "click",
  closeModal
);


modalBackdrop.addEventListener(
  "click",
  closeModal
);


document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      letterModal.classList.contains("show")
    ) {

      closeModal();

    }

  }
);
