		
		const express = require('express');
		require('./db/mongoose');
		const userRouter = require('./routers/user');
		const taskRouter = require('./routers/task');
		
		const app = express();
		const port = process.env.PORT;
		
		
		// Accept json file via http
		app.use(express.json());
		
		// Setting endpoint routes
		app.use(userRouter);
		app.use(taskRouter);
		
		
		app.listen(port, () => {
			console.log('Server is up in port ', port);
		});
		
		