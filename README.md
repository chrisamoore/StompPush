### Stomp Over WebSockets w/ Apache Apollo

#####Apollo docs
- http://activemq.apache.org/apollo/
- I used Brew to install , with the default config and started the Apollo Engine, created a Broker and let her rip
- `brew install apollo`
- `/usr/local/Cellar/apollo/1.6/bin/apollo create --force /usr/local/var/apollo`
#####Broker Monitor
- http://127.0.0.1:61680/broker

#####Start DataProvider 
- in terminal : `php dataProvider`
- start apollo `"/usr/local/var/apollo/bin/apollo-broker-service" start`	
#####Open Page and watch feed

