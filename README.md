Next.js increment app (using Docker)
=============

Simple increment application using Next.js and Docker (ITMO University study task). LocalStorage is used as a storage for the counter.
https://hub.docker.com/r/deadtrace/next-increment

Home Page (`/`)
-------------------------
![main-page](https://user-images.githubusercontent.com/46153650/134954190-62769a2d-0ab2-4333-9f81-a315c285d1a7.png)
Counter info is shown to the user.


Stat Page (`/stat`)
------------------------
![stat-page](https://user-images.githubusercontent.com/46153650/134954481-7e2a4930-26b3-496b-ba66-fc51e0bf502a.png)
When a user visites this page, the counter updates every time. The page shows information that the counter was successfully updated and the new value.


About Page (`/about`)
------------------------
![about-page](https://user-images.githubusercontent.com/46153650/134954923-a5a227c8-2e90-4b94-9b0a-ab93b01da221.png)
Information about the author.


How to launch
-------------------------

```bash
docker run -d -p 3000:3000 deadtrace/next-increment
```
OR (using Makefile in the directory of this repository)

```bash
make run
```

Then navigate to http://localhost:3000.
