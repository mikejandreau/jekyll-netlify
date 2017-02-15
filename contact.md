---
layout: page
title: Contact
permalink: /contact/
order: 3
---


<div id="contact">
	<div class="row">
		<div class="six-md column">
			<form id="contactform" class="contact-form" method="POST">
				<input type="hidden" name="_subject" value="Incoming message from website">
				<label for="name">Name *</label>
				<input type="text" name="name" placeholder="Your Name" required="">
				<label for="_replyto">Email *</label>
				<input type="email" name="_replyto" placeholder="Your Email" required="">
				<label for="message">Message</label>
				<textarea name="message" placeholder="Your Message" required=""></textarea>
				<input type="text" name="_gotcha" style="display:none">
				<input type="submit" value="Submit">
				<input type="hidden" name="_next" value="/thanks/">
			</form>
		</div>
		<div class="six-md column">
			<p>Please use the form on this page or the information below to get in touch.</p>
			<p><a class="contact-link" href="https://www.google.com/maps" target="_blank">{{ site.name }}<br>
			123 Main Street<br>
			Bangor, ME 04401<br></a>
			<a class="contact-link" href="tel:2075555555"><i class="fa fa-phone" aria-hidden="true"></i> (207) 944-5555</a></p>

			<p>
			<a class="social-link" href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
			<a class="social-link" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
			<a class="social-link" href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
			</p>
		</div>
	</div>
</div>

<script>
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'mike' + '@' + 'losaidos' + '.' + 'com');
</script>