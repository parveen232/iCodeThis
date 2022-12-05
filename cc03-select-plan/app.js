const plans = document.querySelectorAll('input[name="plan"]');
const trialBtn = document.querySelector('.trial-btn');
const terms = document.querySelector('#terms-pp');

trialBtn.addEventListener('click', () => {
    for (let plan of plans) {
        if (terms.checked && plan.checked) {
            document.body.innerHTML = `<div style="height:300px; text-align:center; display:flex; align-items:center;"><h1>Your trial for ${plan.value} plan starts now</h1></div>`;
        }
    }
})
