

const openButton1 = document.getElementById('open-model1');
const openButton2 = document.getElementById('open-model2');
const openButton3 = document.getElementById('open-model3');
const openButton4 = document.getElementById('open-model4');
const content = document.getElementById('content');
const closeButton = document.getElementById('close');
const dialog = document.getElementById('dialog');

openButton1.addEventListener('click', () => {
  content.innerHTML = `
    <h1>Non Profit Membership Level</h1>
    <p>The Basic Membership is designed for newcomers who want to start enjoying our community benefits at an affordable rate.</p>
    <ul>
      <li>✔ Access to standard resources and updates</li>
      <li>✔ Participation in community events and discussions</li>
      <li>✔ Monthly newsletter with tips and opportunities</li>
      <li>✔ Member-only discounts on selected services</li>
    </ul>
    <p>This level is perfect if you're just getting started and want to explore what we offer before upgrading to higher tiers.</p>
  `;
  dialog.showModal();
});

openButton2.addEventListener('click', () => {
  content.innerHTML = `
    <h1>Bronze Membership Level</h1>
    <p>The Bronze Membership is ideal for members who want more than the basics, with added value and recognition.</p>
    <ul>
      <li>✔ All benefits from the Basic Membership</li>
      <li>✔ Early access to selected community events</li>
      <li>✔ Exclusive Bronze badge to showcase your status</li>
      <li>✔ Priority responses in member forums</li>
      <li>✔ Occasional bonus resources and offers</li>
    </ul>
    <p>This level is perfect if you're ready to step up your involvement and enjoy extra privileges without a big commitment.</p>
  `;
    dialog.showModal();
});

openButton3.addEventListener('click', () => {
  content.innerHTML = `
    <h1>Silver Membership Level</h1>
    <p>The Silver Membership is designed for dedicated members who want enhanced benefits and recognition within the community.</p>
    <ul>
      <li>✔ All benefits from the Bronze Membership</li>
      <li>✔ Priority access to workshops and training sessions</li>
      <li>✔ Exclusive Silver badge to highlight your membership status</li>
      <li>✔ Access to premium resources and extended content libraries</li>
      <li>✔ Invitations to quarterly networking events</li>
    </ul>
    <p>This level is perfect if you're ready to invest more in your growth and enjoy a richer membership experience.</p>
  `;
    dialog.showModal();
});

openButton4.addEventListener('click', () => {
  content.innerHTML = `
    <h1>Gold Membership Level</h1>
    <p>The Gold Membership is crafted for committed members who want top-tier benefits, recognition, and exclusive opportunities.</p>
    <ul>
      <li>✔ All benefits from the Silver Membership</li>
      <li>✔ VIP access to special events and masterclasses</li>
      <li>✔ Exclusive Gold badge to showcase your elite status</li>
      <li>✔ Direct support from our member services team</li>
      <li>✔ Early previews of new features and resources</li>
      <li>✔ Invitations to annual leadership and networking summits</li>
    </ul>
    <p>This level is perfect if you're ready to enjoy premium privileges, deeper connections, and priority treatment across our community.</p>
  `;
    dialog.showModal();
});


closeButton.addEventListener('click', () => {
  dialog.close();
});