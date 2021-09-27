run:
	docker run -p 3000:3000 -d --rm --name next-increment deadtrace/next-increment
stop:
	docker stop next-hello