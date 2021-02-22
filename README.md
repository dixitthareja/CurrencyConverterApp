# CurrencyConverterApp
Currency converter is an application where user can input a source currency, an amount in the source currency, and an output currency.
The user will see the value in the output currency. The user can see a history of the last 10 currency conversions that were performed.

How to call the API:
    http://localhost:8080/convert/fromcurrency/tocurrency

e.g http://localhost:8080/convert/USD/INR

This application contains two project directories:
 - CurrenncyConverterFront: currency converter front end to perform conversions on GUI
 - CurrenncyConverterBack: contains the back end service to call open exchange rate api
 
 ### How to build the application:
 
     To pull docker image for back end:
     - Open a command terminal
     - Run docker pull tharejadixit/currencyconverterback 
     - Run docker run -p 8080:8080 tharejadixit/currencyconverterback

     To pull docker image for front end:
     - Open a command terminal
     - docker pull tharejadixit/currencyconverterfront
     - docker run -p 3000:3000 tharejadixit/currencyconverterfront
 
 ### How to run the application:
 
  Once both the docker run commands have been executed, containers for front and back end will be up and running.
     
  Another alternative to run the application without docker:
     
     - Navigate to folder CurrencyConverterFront via cmd and run npm start
     - Navigate to folder CurrencyConverterBack via cmd and run node ./index.js
     
   In both cases docker and non-docker:
       - Back end can be accessed on : http://localhost:8080/ 
       - Front end can be accessed on : http://localhost:3000/
       
       
  ### How to test the application:
   
   With Docker:
  - Go to terminal 
  - Run docker ps and grab the container id for tharejadixit/currencyconverterback container
  - docker exec -it "container-id-of-back-end-service" npm test
  
   Without Docker:
   - Assume CurrencyConverterBack service is up and running on http://localhost:8080/ already.
   - Go to terminal and navigate to folder CurrencyConverterBack 
   - Run npm test
   
