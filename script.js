const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love Youuu Sooo Muchhhhh meri gaon ki gorri ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWF3cmp1bDN1Nnl4d3kxb2NwdzJ2Zm1rM2V6OWx4M3lnNGV0cjgwaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vi0Ws3t4JSLOgdkaBq/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
