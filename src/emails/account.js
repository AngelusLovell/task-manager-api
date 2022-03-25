			
			const sgMail = require('@sendgrid/mail');
			const sendgridAPIKey = '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';
			
			sgMail.setApiKey(process.env.SENDGRID_API_KEY);
						
			const sendWelcomeEmail = (email, name) => {
				sgMail.send({				
					to: email,
					from: 'ajamlanjyoti@gmail.com',
					subject: 'Thanks for joining in!',
					text: `Hello! ${name}, Welcome to app, I hope you have a good time.`
				});
			};
			
			const sendCancelationEmail = (email, name) => {
				sgMail.send({				
					to: email,
					from: 'ajamlanjyoti@gmail.com',
					subject: 'Sorry to see you go!',
					text: `Goodbye, ${name}. I hope to see you back sometime soon.`
				});
			};
			
			
			module.exports = {
				sendWelcomeEmail,
				sendCancelationEmail
			};