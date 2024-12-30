const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
function showStoreLinks() {
  var city = document.getElementById("city").value;
  var storeLinks = document.getElementById("store-links");
  var links = "";

  if (city === "karachi") {
      links = `
          <h2>Karachi AutoWorld Showroom</h2>
          <ul>
              <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1735416280965!5m2!1sen!2s" width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"</li>
          </ul>
      `;
  } else if (city === "islamabad") {
      links = `
          <h2>Islamabad AutoWorld Showroom</h2>
          <ul>
              <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425292.81279937417!2d72.75644688620325!3d33.61567900696361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735416413844!5m2!1sen!2s" width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
          </ul>
      `;
  } else if (city === "lahore") {
      links = `
<h2>Lahore AutoWorld Showroom</h2>
                    <ul>
                        <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435623.2394008298!2d73.61039978761974!3d31.46075223346083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735416460781!5m2!1sen!2s" width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
                    </ul>
                `;
            } else {
                links = "<p>Please select a city to view the showrooms.</p>";
            }

            storeLinks.innerHTML = links;
        }

