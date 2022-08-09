# PageVisitCountCalculator_Docker-Redis-Node
Calculating how many time our web page visited using Docker, Redis and NodeJS

##What is this repository for?
This repository is created to learn docker. In this repo I'm creating a image containing two containers. i) Redis ii) NodeJS.

Redis is used to store the page visit count. Every time you refresh the page I'm fetching count from redis and displaying it on screen.

Used NodeJS as backend language.


##How to run this project?

1. Download and install docker on your computer.
2. Clone this repository on local.
3. Open the terminal and go to this project folder where docker files are present.
4. Execute `docker-compose up --build` command on the terminal.
5. Open any browser and hit `http://localhost:8081/` URL, you will see output like this `_Number of visits => 4_`
6. Every time you re-fresh the page count will increase. 


##Who do I talk to?

Ping me on linkedIn in case if you have any doubts(https://www.linkedin.com/in/vinayak-magadum-a2a90313b/).
